import * as FileSystem from 'expo-file-system';
import * as React from "react";
import {Text, View, StyleSheet, Image, FlatList, Button, SafeAreaView, PermissionsAndroid} from "react-native";
import { List, ListItem } from "react-native-elements";
import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from "react";

import {fetchGifs} from "../giphyUtils/Fetcher";

const gifIds = ['YsTs5ltWtEhnq', 'cZ7rmKfFYOvYI', '11BCDu2iUc8Nvhryl7', 'B0Xcf2Qvh743AWnmg0'];
const GIPHY_API_KEY = 'gfS95JJ09dNp4Mn8k1UdS43Su3dkb7Uf';

const gifDir = FileSystem.cacheDirectory + 'giphy/';
const gifFileUri = (gifId) => gifDir + `gif_${gifId}_200.gif`;

const gifUrl = (gifId) => `https://media1.giphy.com/media/${gifId}/200.gif`;

async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(gifDir);
    if (!dirInfo.exists) {
        console.log("Gif directory doesn't exist, creating...");
        await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
    }
}

async function addMultipleGifs(gifIds) {
    try {
        let allGifs = [];
        await ensureDirExists();

        console.log('Downloading', gifIds.length, 'gif files...');
        await Promise.all(gifIds.map(id => {
            console.log(gifUrl(id));
            console.log(gifFileUri(id));
            allGifs.push(gifFileUri(id));
            FileSystem.downloadAsync(gifUrl(id), gifFileUri(id))
        }));
        console.log("Downloaded!")
        return allGifs;
    } catch (e) {
        console.error("Couldn't download gif files:", e);
    }
}

async function findGifs(phrase) {
    try {
        // const gf = new GiphyFetch(GIPHY_API_KEY)
        // const data = gf.trending({ limit: 10 })
        //
        // console.log(data)
        // return data;

        // const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=&rating=g`, {
        //     method: 'POST'
        // })
        //     // .then((data) => {
        //     //     console.log(data);
        //     // });
        // return await response.json();

        const searchRequest = {
            api_key: GIPHY_API_KEY,
            q: phrase.trim(),
        };

        const response = await fetch('https://api.giphy.com/v1/gifs/search', {
            method: 'POST',
            body: JSON.stringify(searchRequest),
        });
        const {data} = await response.json();

        console.log(data)

        return data.map(item => item.id);
    } catch (e) {
        console.error('Unable to search for gifs', e);
        return [];
    }
}

async function deleteAllGifs() {
    console.log('Deleting all GIF files...');
    await FileSystem.deleteAsync(gifDir);
}

async function getAllGifs(gifsId) {
    await ensureDirExists();
    const gifsList = [];

    gifsId.forEach( id => gifsList.push(getSingleGif(id)));

    return gifsList;
}

async function getSingleGif(gifId) {
    await ensureDirExists();

    const fileUri = gifFileUri(gifId);
    const fileInfo = await FileSystem.getInfoAsync(fileUri);

    if (!fileInfo.exists) {
        console.log("Gif isn't cached locally. Downloading...");
        await FileSystem.downloadAsync(gifUrl(gifId), fileUri);
    }

    return fileUri;
}

const Giphy = ({navigation, route}) => {
    // const out = findGifs();
    // console.log("OUTsss666:")
    // console.log(out)

    const [selectedUri, setUri] = useState("");
    const [allGifs, setGifs] = useState([]);
    const [show, setShow] = useState(false);
    const [rerender, setRerender] = useState(0);

    React.useEffect(() => {
        (async () => {
            setGifs(await addMultipleGifs(gifIds));
            // setUri(await getSingleGif(gifIds[2]));
            // setGifs(await getAllGifs(gifIds));
        })();

        return () => {
            deleteAllGifs();
        };
    }, []);

    function loadGifs() {
        requestCameraPermission();
        setShow(!show)
        // fetchGifs();
    }

    function rerenderAdd() {

        setRerender(rerender + 1)
    }

    const renderItem = ({ id, index }) => (
        // console.log(id)
        <Image
            style={{
                height: 200,
                margin: 20,
            }}
            source={{ uri: id }}
            key={index}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Gifs gallery</Text>

            <Button title={"Show?"} onPress={loadGifs}/>
            {/*<Button title={"Rerender"} onPress={rerenderAdd}/>*/}

            {/*{show ? <FlatList*/}
            {/*    style={{flex: 1}}*/}
            {/*    horizontal={true}*/}
            {/*    data={allGifs}*/}
            {/*    renderItem={renderItem}*/}
            {/*/> : ""}*/}

            {/*{show ? allGifs.map(*/}
            {/*    (id, index) =>*/}
            {/*        <Image*/}
            {/*            style={{*/}
            {/*                height: 200,*/}
            {/*                margin: 20,*/}
            {/*            }}*/}
            {/*            source={{ uri: id }}*/}
            {/*            key={index}*/}
            {/*        />*/}
            {/*) : ""}*/}

            {allGifs.map((id, index) => {
                    return (
                        <Image
                            style={{
                                height: 200,
                                margin: 20,
                            }}
                            source={{uri: id}}
                            key={index}
                        />
                    )
                }
            )}
        </View>
    )
};

export default Giphy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    header: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 15,
    },
});

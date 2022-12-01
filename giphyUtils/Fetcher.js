import * as FileSystem from "expo-file-system";

const GIPHY_API_KEY = 'gfS95JJ09dNp4Mn8k1UdS43Su3dkb7Uf';

const fetchUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=10&rating=g`
const gifDir = FileSystem.cacheDirectory + 'giphy/';
const gifFileUri = (gifId) => gifDir + `gif_${gifId}_200.gif`;

async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(gifDir);
    if (!dirInfo.exists) {
        console.log("Gif directory doesn't exist, creating...");
        await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
    }
}

export async function fetchGifs() {
    const response = await fetch(fetchUrl);
    console.log(response.json())
    return await response.json();
}

// async function addTenTrending() {
//     try {
//         let allGifs = [];
//         await ensureDirExists();
//
//         console.log('Downloading 10 trending gif files...');
//         await Promise.all(gifIds.map(id => {
//             console.log(gifFileUri(id));
//             allGifs.push(gifFileUri(id));
//             FileSystem.downloadAsync(gifUrl(id), gifFileUri(id))
//         }));
//         console.log("Downloaded!")
//         return allGifs;
//     } catch (e) {
//         console.error("Couldn't download gif files:", e);
//     }
// }


import pdf2pic from 'pdf2pic';
import path, { resolve } from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { tesseractOCR } from './tesseractOCR.js';
import { rejects } from 'assert';

export async function pdf2img(file){
    const options = {
        density: 100,
        saveFilename: `${path.parse(file).name}`,
        savePath: path.join(__dirname,'../images'),
        format: "png",
        width: 1200,
        height: 2000
    };
    return await new Promise(async (resolve,rejects)=>{
        const storeAsImage = pdf2pic.fromPath(file, options);
        await storeAsImage(1).then(async (res) => {
            console.log(`${res.name} is now converted as png`);
            await tesseractOCR(res);
            resolve();
        });
    });
}
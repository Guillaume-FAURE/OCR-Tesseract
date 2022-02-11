import tesseract from 'node-tesseract-ocr';
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function tesseractOCR(file){
    const config = {
        lang: "fra",
        psm: 11,
    }
    console.log(`Initialisation de l'OCR du fichier ${file.name}`)
    await tesseract
        .recognize(file.path,config)
        .then(async (text) =>{
            await fs.writeFile(path.join(__dirname,'../text/',`${path.parse(file.name).name}.txt`), text,(e) => {
                if(e!==null){console.log(e.message)}
            });
            console.log(`OCR termine pour ${file.name}`)
        })
        .catch((err) =>{
            console.log(err.message);
        })
}

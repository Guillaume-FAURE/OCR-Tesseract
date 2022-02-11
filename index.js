//import function from utils
import { pdf2img } from './utils/convertPDFtoPNG.js';
import { tesseractOCR } from './utils/tesseractOCR.js';

const pdfArgs = process.argv;
console.log(pdfArgs.length)

async function asyncLoop(){
    for (let i=2;i<pdfArgs.length;i++){
        await pdf2img(pdfArgs[i]);
    }
}

//If your system is a LINUX system
if (process.platform==='linux'){
    console.log(`Your OS is a ${process.platform} system!`);
    asyncLoop();
}


/*let options = {
    format : 'jpeg',
    out_dir : 'C:\\Users\\user\\Desktop\\RootFolder\\pdfImageFolder',
    out_prefix : path.basename(pdfPath, path.extname(pdfPath)),
    page : 1
}
const storeAsImage = pdfpoppler.convert(process.argv[2], options);
console.log(storeAsImage);
const pageToConvertAsImage = 1;
  
storeAsImage(pageToConvertAsImage).then((res) => {
    console.log("Page 1 is now converted as image");
    return res;
});*/
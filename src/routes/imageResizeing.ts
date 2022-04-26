import fs from 'fs-extra';
import path from "path";
import resizeProcess from './resizeProcess'
interface ImageQuery {
  filename?: string;
  width?: string;
  height?: string;
}
export default class Image {
static imagesPath: string = './images';
static thumbsPath: string = './thumbs';
static async ImageUrlPath(params: ImageQuery): Promise<null | string>{
const imagePath: string =params.width && params.height? path.resolve(Image.thumbsPath,`${params.filename}-${params.width}x${params.height}.jpg`)
: path.resolve(Image.imagesPath, `${params.filename}.jpg`);
try {
  await fs.access(imagePath);
    return imagePath;
  } catch {
    return null;
  }
} 
static async thumbsExistsInTheImagesDir(params: ImageQuery): Promise<Boolean| undefined> {
  if (!params.filename || !params.width || !params.height) {
    return false;
  }
  const filePath: string = path.resolve(Image.thumbsPath,`${params.filename}-${params.width}x${params.height}.jpg`);
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
static async createThumbs(): Promise<void>{
    try {
      await fs.access(Image.thumbsPath);
    } catch {
      fs.mkdir(Image.thumbsPath);
    }
  }
static async createThumbsFile(params: ImageQuery) : Promise<null | string>{
const filePathFull: string = path.resolve(Image.imagesPath,`${params.filename}.jpg`);
const filePathThumb: string = path.resolve(Image.thumbsPath,`${params.filename}-${params.width}x${params.height}.jpg`);

    return await resizeProcess({
      source: filePathFull,
      target: filePathThumb,
      width: parseInt(params.width!),
      height: parseInt(params.height!)
    });
  }
}
































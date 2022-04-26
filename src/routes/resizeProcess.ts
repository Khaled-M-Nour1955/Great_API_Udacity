import sharp from 'sharp';
interface resizeParams {
  source: string;
  target: string;
  width: number;
  height: number;
}
const resizeProcess = async (params: resizeParams): Promise<null | string> => {
  try {
    await sharp(params.source).resize(params.width, params.height).toFormat('jpeg').toFile(params.target);
    return null;
  } catch(error){
    return `error`;
  }
};
export default resizeProcess;

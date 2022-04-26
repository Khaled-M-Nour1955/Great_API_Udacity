"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const resizeProcess_1 = __importDefault(require("./resizeProcess"));
class Image {
    static ImageUrlPath(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const imagePath = params.width && params.height ? path_1.default.resolve(Image.thumbsPath, `${params.filename}-${params.width}x${params.height}.jpg`)
                : path_1.default.resolve(Image.imagesPath, `${params.filename}.jpg`);
            try {
                yield fs_extra_1.default.access(imagePath);
                return imagePath;
            }
            catch (_a) {
                return null;
            }
        });
    }
    static thumbsExistsInTheImagesDir(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params.filename || !params.width || !params.height) {
                return false;
            }
            const filePath = path_1.default.resolve(Image.thumbsPath, `${params.filename}-${params.width}x${params.height}.jpg`);
            try {
                yield fs_extra_1.default.access(filePath);
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
    static createThumbs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_extra_1.default.access(Image.thumbsPath);
            }
            catch (_a) {
                fs_extra_1.default.mkdir(Image.thumbsPath);
            }
        });
    }
    static createThumbsFile(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePathFull = path_1.default.resolve(Image.imagesPath, `${params.filename}.jpg`);
            const filePathThumb = path_1.default.resolve(Image.thumbsPath, `${params.filename}-${params.width}x${params.height}.jpg`);
            return yield (0, resizeProcess_1.default)({
                source: filePathFull,
                target: filePathThumb,
                width: parseInt(params.width),
                height: parseInt(params.height)
            });
        });
    }
}
exports.default = Image;
Image.imagesPath = './images';
Image.thumbsPath = './thumbs';

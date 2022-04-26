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
exports.orginalImages = exports.thumbImage = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageprocessing_1 = __importDefault(require("./imageprocessing"));
const requestImage = (0, express_1.default)();
const thumbImage = path_1.default.resolve('./') + '/thumbs';
exports.thumbImage = thumbImage;
const orginalImages = path_1.default.resolve('./') + '/images';
exports.orginalImages = orginalImages;
requestImage.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileName = req.query.image;
        const height = parseInt(req.query.height);
        const width = parseInt(req.query.width);
        yield (0, imageprocessing_1.default)(fileName, width, height);
        const createdThumbs = `${orginalImages}/${fileName}W${width}H${height}.jpg`;
        res.sendFile(createdThumbs);
    }
    catch (error) {
        res.send(error);
    }
}));
exports.default = requestImage;

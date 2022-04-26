"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const multer_1 = __importDefault(require("multer"));
//check if the images folder is exists
const dir = "thumbs";
if (!fs_extra_1.default.existsSync(dir)) {
    fs_extra_1.default.mkdirSync(dir);
}
//upload the photos to the folder fo images
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) { cb(null, "images"); },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + (file.originalname));
    },
});
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;

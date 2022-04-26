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
// importing the requierments
const express_1 = __importDefault(require("express"));
const imageResizeing_1 = __importDefault(require("./routes/imageResizeing"));
//Global variables
const app = (0, express_1.default)();
const port = process.env.port || 3000;
const api = express_1.default.Router();
//routes using
app.use(api);
//main process
api.get('/resizeimage', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield imageResizeing_1.default.createThumbsFile(request.query);
    const path = yield imageResizeing_1.default.ImageUrlPath(request.query);
    if (path) {
        response.sendFile(path);
    }
}));
// Enable  cors for the server to avoid 405 error 
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
// sending the response of 200
app.get('/', (_, res) => {
    res.status(200).send('The Server Is Running');
});
// the port 
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `\x1b[2mhttp://localhost:${port}\x1b[0m`;
    console.log(`Running On ${url}`);
}));
exports.default = app;

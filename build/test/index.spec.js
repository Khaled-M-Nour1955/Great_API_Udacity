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
const supertest_1 = __importDefault(require("supertest"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const imageResizeing_1 = __importDefault(require("../routes/imageResizeing"));
const __1 = __importDefault(require(".."));
const request = (0, supertest_1.default)(__1.default);
describe('Test responses from endpoints', () => {
    describe('endpoint: /', () => {
        it('gets /', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/');
            expect(response.status).toBe(200);
        }));
    });
    describe('endpoint: /resizeimage', () => {
        it('gets /resizeimage?filename=fjord (valid args)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/resizeimage?filename=fjord');
            expect(response.status).toBe(200);
        }));
        it('gets /resizeimage?filename=fjord&width=200&height=200 (valid args)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/resizeimage?filename=fjord&width=200&height=200');
            expect(response.status).toBe(200);
        }));
        it('gets /resizeimage?filename=fjord&width=200 (valid args)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/resizeimage?filename=fjord&width=200');
            expect(response.status).toBe(200);
        }));
        it('gets /resizeimage?filename=fjord&height=200 (valid args)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request.get('/resizeimage?filename=fjord&height=200');
            expect(response.status).toBe(200);
        }));
    });
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const resizedImageThumb = path_1.default.resolve(imageResizeing_1.default.thumbsPath, `${Date.now()} + 'fjord.jpg'`);
        try {
            yield fs_extra_1.default.access(resizedImageThumb);
            fs_extra_1.default.unlink(resizedImageThumb);
        }
        catch (_a) { }
    }));
});

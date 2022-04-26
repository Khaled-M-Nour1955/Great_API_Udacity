"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mangeRequests_1 = __importDefault(require("../API/mangeRequests"));
const routes = express_1.default.Router();
routes.use('/createdThumbs', mangeRequests_1.default);
routes.use('/', express_1.default.static('./images'));
exports.default = routes;

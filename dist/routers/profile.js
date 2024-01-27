"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkingRoom_1 = __importDefault(require("../middlewares/profile/checkingRoom"));
const findUserFormapping_1 = __importDefault(require("../middlewares/user/findUserFormapping"));
const mapping_1 = __importDefault(require("../controllers/profile/mapping"));
const findProfilles_1 = __importDefault(require("../controllers/profile/findProfilles"));
const profile = (0, express_1.Router)();
profile
    .get('/', findProfilles_1.default)
    .post('/', findUserFormapping_1.default, checkingRoom_1.default, mapping_1.default);
exports.default = profile;

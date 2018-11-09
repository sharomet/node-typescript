"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
;
exports.UserSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: 'Enter a name'
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    password: {
        type: String
    }
});

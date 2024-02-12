"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// from https://stackoverflow.com/a/17190385
const csvtojson_1 = __importDefault(require("csvtojson"));
const jsonArray = (0, csvtojson_1.default)()
    .fromFile("aisc-shapes-database-v15.0.csv")
    .then(function (beams) {
    const fs = require("fs");
    const jsonData = JSON.stringify({ beams });
    fs.writeFileSync("db.json", jsonData);
});

"use strict";
exports.__esModule = true;
exports.apiService = void 0;
var axios_1 = require("axios");
var apiService = axios_1["default"].create({ baseURL: 'https://jsonplaceholder.typicode.com' });
exports.apiService = apiService;

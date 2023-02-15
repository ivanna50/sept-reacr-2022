"use strict";
exports.__esModule = true;
exports.userService = void 0;
var apiService_1 = require("./apiService");
var userService = {
    getAll: function () { return apiService_1.apiService.get('/users'); }
};
exports.userService = userService;

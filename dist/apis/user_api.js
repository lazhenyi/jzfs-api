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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApi = void 0;
const basicNet_1 = require("../basicNet");
class UserApi extends basicNet_1.BasicNet {
    Apply(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/apply', data);
        });
    }
    LoginName(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/login/name', data);
        });
    }
    LoginEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/login/email', data);
        });
    }
    ResetPassword(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/reset/online', data);
        });
    }
    ResetPasswordEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/reset/forget', data);
        });
    }
    Logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/logout', {});
        });
    }
    Update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/update', data);
        });
    }
    Local() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/user/local', {});
        });
    }
}
exports.UserApi = UserApi;

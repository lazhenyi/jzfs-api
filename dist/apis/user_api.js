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
            return yield this.post('/users/apply', {
                inner: window.btoa(JSON.stringify(data))
            });
        });
    }
    LoginName(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/login/name', {
                inner: window.btoa(JSON.stringify(data))
            });
        });
    }
    LoginEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/login/email', {
                inner: window.btoa(JSON.stringify(data))
            });
        });
    }
    ResetPassword(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/reset/online', {
                inner: window.btoa(JSON.stringify(data))
            });
        });
    }
    ResetPasswordEmail(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/reset/forget', {
                inner: window.btoa(JSON.stringify(data))
            });
        });
    }
    Logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/logout', {});
        });
    }
    Update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/update', data);
        });
    }
    Local() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/local', {});
        });
    }
}
exports.UserApi = UserApi;

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
exports.GroupApi = void 0;
const basicNet_1 = require("../basicNet");
class GroupApi extends basicNet_1.BasicNet {
    Create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/group/create', dto);
        });
    }
    Delete(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/group/delete', dto);
        });
    }
    CheckName(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/group/check/name', dto);
        });
    }
    CheckOwner(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/group/check/owner', dto);
        });
    }
    ListOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/group/list/owner', {});
        });
    }
    SearchByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/group/search/name', {
                name: name
            });
        });
    }
}
exports.GroupApi = GroupApi;

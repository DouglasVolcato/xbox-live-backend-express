"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryStub = void 0;
const fake_user_1 = require("../../fake-entities/fake-user");
class UserRepositoryStub {
    create() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
    getOneByEmail() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
    getOneById() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
    getAll() {
        return new Promise((resolve) => resolve([fake_user_1.fakeUser]));
    }
    update() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
    delete() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
}
exports.UserRepositoryStub = UserRepositoryStub;
//# sourceMappingURL=user-repository-stub.js.map
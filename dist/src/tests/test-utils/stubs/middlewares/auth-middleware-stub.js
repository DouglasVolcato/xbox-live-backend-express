"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddlewareStub = void 0;
const fake_user_1 = require("../../fake-entities/fake-user");
class AuthMiddlewareStub {
    async auth() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
}
exports.AuthMiddlewareStub = AuthMiddlewareStub;
//# sourceMappingURL=auth-middleware-stub.js.map
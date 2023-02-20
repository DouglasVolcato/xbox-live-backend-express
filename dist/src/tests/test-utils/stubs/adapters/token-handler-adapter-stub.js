"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenHandlerAdapterStub = void 0;
const fake_user_1 = require("../../fake-entities/fake-user");
class TokenHandlerAdapterStub {
    generateToken() {
        return 'generated_token';
    }
    validateToken() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
}
exports.TokenHandlerAdapterStub = TokenHandlerAdapterStub;
//# sourceMappingURL=token-handler-adapter-stub.js.map
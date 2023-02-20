"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneUserByIdUseCaseStub = void 0;
const fake_user_1 = require("../../../../test-utils/fake-entities/fake-user");
class GetOneUserByIdUseCaseStub {
    async execute() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
}
exports.GetOneUserByIdUseCaseStub = GetOneUserByIdUseCaseStub;
//# sourceMappingURL=getOne-user-byId-usecase-stub.js.map
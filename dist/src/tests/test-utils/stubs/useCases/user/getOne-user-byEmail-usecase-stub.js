"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneUserByEmailUseCaseStub = void 0;
const fake_user_1 = require("../../../../test-utils/fake-entities/fake-user");
class GetOneUserByEmailUseCaseStub {
    async execute() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
}
exports.GetOneUserByEmailUseCaseStub = GetOneUserByEmailUseCaseStub;
//# sourceMappingURL=getOne-user-byEmail-usecase-stub.js.map
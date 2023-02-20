"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersUseCaseStub = void 0;
const fake_user_1 = require("../../../../test-utils/fake-entities/fake-user");
class GetAllUsersUseCaseStub {
    async execute() {
        return new Promise((resolve) => resolve([fake_user_1.fakeUser]));
    }
}
exports.GetAllUsersUseCaseStub = GetAllUsersUseCaseStub;
//# sourceMappingURL=getAll-user-usecase-stub.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const getAll_user_usecase_1 = require("../../../../data/useCases/user/getAll-user-usecase");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const getAllUsersUseCase = new getAll_user_usecase_1.GetAllUsersUseCase(userRepositoryStub);
    return { userRepositoryStub, getAllUsersUseCase };
}
describe('GetAllUsersUseCase', () => {
    test('Should throw if UserRepository throws', async () => {
        const { userRepositoryStub, getAllUsersUseCase } = makeSut();
        jest.spyOn(userRepositoryStub, 'getAll').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = getAllUsersUseCase.execute();
        await expect(promise).rejects.toThrow();
    });
    test('Should return an array of users.', async () => {
        const { getAllUsersUseCase } = makeSut();
        const users = await getAllUsersUseCase.execute();
        expect(users[0]).toBe(fake_user_1.fakeUser);
    });
});
//# sourceMappingURL=getAll-user-usecase.spec.js.map
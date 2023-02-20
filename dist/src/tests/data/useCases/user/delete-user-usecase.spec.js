"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const delete_user_usecase_1 = require("../../../../data/useCases/user/delete-user-usecase");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const make_error_1 = require("../../../test-utils/errors/make-error");
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const deleteUserUseCase = new delete_user_usecase_1.DeleteUserUseCase(userRepositoryStub);
    return { userRepositoryStub, deleteUserUseCase };
}
describe('DeleteUserUseCase', () => {
    test('Should call UserRepository with correct value.', async () => {
        const { userRepositoryStub, deleteUserUseCase } = makeSut();
        const deleteSpy = jest.spyOn(userRepositoryStub, 'delete');
        await deleteUserUseCase.execute(fake_user_1.fakeUser.id);
        expect(deleteSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.id);
    });
    test('Should throw if UserRepository throws', async () => {
        const { userRepositoryStub, deleteUserUseCase } = makeSut();
        jest.spyOn(userRepositoryStub, 'delete').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = deleteUserUseCase.execute(fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct user ID.', async () => {
        const { deleteUserUseCase } = makeSut();
        const promise = await deleteUserUseCase.execute(fake_user_1.fakeUser.id);
        expect(promise).toBe(true);
    });
});
//# sourceMappingURL=delete-user-usecase.spec.js.map
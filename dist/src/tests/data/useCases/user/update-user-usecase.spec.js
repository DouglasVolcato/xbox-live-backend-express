"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const make_error_1 = require("../../../test-utils/errors/make-error");
const update_user_usecase_1 = require("../../../../data/useCases/user/update-user-usecase");
const errors_1 = require("../../../../utils/errors");
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const updateUserUseCase = new update_user_usecase_1.UpdateUserUseCase(userRepositoryStub);
    return { userRepositoryStub, updateUserUseCase };
}
describe('UpdateUserUseCase', () => {
    test('Should call UserRepository with correct values.', async () => {
        const { userRepositoryStub, updateUserUseCase } = makeSut();
        const updateSpy = jest.spyOn(userRepositoryStub, 'update');
        await updateUserUseCase.execute(fake_user_1.fakeUser, fake_user_1.fakeUser.id);
        expect(updateSpy).toHaveBeenCalledWith(expect.objectContaining(fake_user_1.fakeUserWithoutPassword), fake_user_1.fakeUser.id);
    });
    test('Should throw if UserRepository throws.', async () => {
        const { userRepositoryStub, updateUserUseCase } = makeSut();
        jest.spyOn(userRepositoryStub, 'update').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = updateUserUseCase.execute(fake_user_1.fakeUser, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct values.', async () => {
        const { updateUserUseCase } = makeSut();
        const promise = await updateUserUseCase.execute(fake_user_1.fakeUser, fake_user_1.fakeUser.id);
        expect(promise).toBe(true);
    });
    test('Should throw if UserRepository.getOneById returns void.', async () => {
        const { updateUserUseCase, userRepositoryStub } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneById')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = updateUserUseCase.execute(fake_user_1.fakeUser, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if there is another user with the same email registered.', async () => {
        const { updateUserUseCase, userRepositoryStub } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneByEmail')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_user_1.fakeUser), { id: 'another_id' }))));
        const promise = updateUserUseCase.execute(fake_user_1.fakeUser, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
});
//# sourceMappingURL=update-user-usecase.spec.js.map
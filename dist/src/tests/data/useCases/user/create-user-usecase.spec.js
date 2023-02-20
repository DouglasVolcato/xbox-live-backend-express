"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const create_user_usecase_1 = require("../../../../data/useCases/user/create-user-usecase");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const errors_1 = require("../../../../utils/errors");
const newFakeUser = Object.assign(Object.assign({}, fake_user_1.fakeUser), { email: 'another_email' });
const newFakeUserWithoutPassword = Object.assign(Object.assign({}, fake_user_1.fakeUserWithoutPassword), { email: 'another_email' });
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const createUserUseCase = new create_user_usecase_1.CreateUserUseCase(userRepositoryStub);
    return { createUserUseCase, userRepositoryStub };
}
describe('CreateUserUseCase', () => {
    test('Should call UserRepository with correct value.', async () => {
        const { createUserUseCase, userRepositoryStub } = makeSut();
        const createSpy = jest.spyOn(userRepositoryStub, 'create');
        await createUserUseCase.execute(newFakeUser);
        expect(createSpy).toHaveBeenCalledWith(expect.objectContaining(newFakeUserWithoutPassword));
    });
    test('Should throw if UserRepository.create throws.', async () => {
        const { createUserUseCase, userRepositoryStub } = makeSut();
        jest.spyOn(userRepositoryStub, 'create').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = createUserUseCase.execute(newFakeUser);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if foundUser email is equal to the new user email.', async () => {
        const { createUserUseCase, userRepositoryStub } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneByEmail')
            .mockReturnValueOnce(new Promise((resolve) => resolve(newFakeUser)));
        const promise = createUserUseCase.execute(newFakeUser);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if UserRepository.getOneByEmail throws.', async () => {
        const { createUserUseCase, userRepositoryStub } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneByEmail')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = createUserUseCase.execute(newFakeUser);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct user.', async () => {
        const { createUserUseCase } = makeSut();
        const promise = await createUserUseCase.execute(newFakeUser);
        expect(promise).toBe(true);
    });
});
//# sourceMappingURL=create-user-usecase.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const login_auth_usecase_1 = require("../../../../data/useCases/auth/login-auth-usecase");
const fake_login_1 = require("../../../test-utils/fake-entities/fake-login");
const hasher_adapter_stub_1 = require("../../../test-utils/stubs/adapters/hasher-adapter-stub");
const token_handler_adapter_stub_1 = require("../../../test-utils/stubs/adapters/token-handler-adapter-stub");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const errors_1 = require("../../../../utils/errors");
const make_error_1 = require("../../../test-utils/errors/make-error");
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const hasherAdapterStub = new hasher_adapter_stub_1.HasherAdapterStub();
    const tokenHandlerAdapterStub = new token_handler_adapter_stub_1.TokenHandlerAdapterStub();
    const loginAuthUseCase = new login_auth_usecase_1.LoginAuthUseCase(userRepositoryStub, hasherAdapterStub, tokenHandlerAdapterStub);
    return {
        userRepositoryStub,
        hasherAdapterStub,
        tokenHandlerAdapterStub,
        loginAuthUseCase,
    };
}
describe('LoginAuthUseCase', () => {
    test('Should call UserRepository on success.', async () => {
        const { userRepositoryStub, loginAuthUseCase } = makeSut();
        const getByEmailSpy = jest.spyOn(userRepositoryStub, 'getOneByEmail');
        await loginAuthUseCase.execute(fake_login_1.fakeLogin);
        expect(getByEmailSpy).toHaveBeenCalledWith(fake_login_1.fakeLogin.email);
    });
    test('Should call Hasher on success.', async () => {
        const { hasherAdapterStub, loginAuthUseCase } = makeSut();
        const compareSpy = jest.spyOn(hasherAdapterStub, 'compare');
        await loginAuthUseCase.execute(fake_login_1.fakeLogin);
        expect(compareSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.password, fake_user_1.fakeUser.password);
    });
    test('Should call TokenHandler on success.', async () => {
        const { tokenHandlerAdapterStub, loginAuthUseCase } = makeSut();
        const generateTokenSpy = jest.spyOn(tokenHandlerAdapterStub, 'generateToken');
        await loginAuthUseCase.execute(fake_login_1.fakeLogin);
        expect(generateTokenSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.id);
    });
    test('Should return a token on success.', async () => {
        const { loginAuthUseCase } = makeSut();
        const token = await loginAuthUseCase.execute(fake_login_1.fakeLogin);
        expect(token).toBe('generated_token');
    });
    test('Should throw if foundUser is null.', async () => {
        const { loginAuthUseCase, userRepositoryStub } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneByEmail')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = loginAuthUseCase.execute(fake_login_1.fakeLogin);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if password validation is false.', async () => {
        const { hasherAdapterStub, loginAuthUseCase } = makeSut();
        jest.spyOn(hasherAdapterStub, 'compare').mockReturnValueOnce(false);
        const promise = loginAuthUseCase.execute(fake_login_1.fakeLogin);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if UserRepository throws.', async () => {
        const { userRepositoryStub, loginAuthUseCase } = makeSut();
        jest.spyOn(userRepositoryStub, 'getOneByEmail').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = loginAuthUseCase.execute(fake_login_1.fakeLogin);
        await expect(promise).rejects.toThrow();
    });
});
//# sourceMappingURL=login-user-usecase.spec.js.map
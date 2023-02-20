"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_auth_usecase_stub_1 = require("../../test-utils/stubs/useCases/auth/login-auth-usecase-stub");
const auth_controller_1 = require("../../../presentation/controllers/auth/auth-controller");
const make_http_request_1 = require("../../test-utils/http/make-http-request");
const fake_user_1 = require("../../test-utils/fake-entities/fake-user");
const make_error_1 = require("../../test-utils/errors/make-error");
function makeLogin(email, password) {
    return { body: { email: email, password: password } };
}
function makeSut() {
    const loginAuthUseCaseStub = new login_auth_usecase_stub_1.LoginAuthUseCaseStub();
    const authController = new auth_controller_1.AuthController(loginAuthUseCaseStub);
    return { loginAuthUseCaseStub, authController };
}
describe('AuthController', () => {
    test('Should call LoginAuthUseCase with correct values.', async () => {
        const { loginAuthUseCaseStub, authController } = makeSut();
        const loginUseCaseSpy = jest.spyOn(loginAuthUseCaseStub, 'execute');
        await authController.login((0, make_http_request_1.makeHttpRequest)(makeLogin(fake_user_1.fakeUser.email, fake_user_1.fakeUser.password)));
        expect(loginUseCaseSpy).toHaveBeenCalledWith({
            email: fake_user_1.fakeUser.email,
            password: fake_user_1.fakeUser.password,
        });
    });
    test('Should return statusCode 401 if LoginAuthUseCase throws.', async () => {
        const { loginAuthUseCaseStub, authController } = makeSut();
        jest
            .spyOn(loginAuthUseCaseStub, 'execute')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = await authController.login((0, make_http_request_1.makeHttpRequest)(makeLogin(fake_user_1.fakeUser.email, fake_user_1.fakeUser.password)));
        expect(promise).toHaveProperty('statusCode');
        expect(promise.statusCode).toBe(401);
    });
    test('Should return statusCode 200 on success.', async () => {
        const { authController } = makeSut();
        const promise = await authController.login((0, make_http_request_1.makeHttpRequest)(makeLogin(fake_user_1.fakeUser.email, fake_user_1.fakeUser.password)));
        expect(promise).toHaveProperty('statusCode');
        expect(promise.statusCode).toBe(200);
    });
});
//# sourceMappingURL=auth-controller.spec.js.map
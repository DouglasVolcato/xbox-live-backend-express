"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_handler_adapter_stub_1 = require("../../test-utils/stubs/adapters/token-handler-adapter-stub");
const auth_middleware_1 = require("../../../presentation/middlewares/auth-middleware");
const make_http_request_1 = require("../../test-utils/http/make-http-request");
const errors_1 = require("../../../utils/errors");
const make_error_1 = require("../../test-utils/errors/make-error");
const fake_user_1 = require("../../test-utils/fake-entities/fake-user");
function makeAuthorization(authorization) {
    return { headers: { authorization: authorization } };
}
function makeSut() {
    const tokenHandlerAdapterStub = new token_handler_adapter_stub_1.TokenHandlerAdapterStub();
    const authMiddleware = new auth_middleware_1.AuthMiddleware(tokenHandlerAdapterStub);
    return { tokenHandlerAdapterStub, authMiddleware };
}
describe('AuthMiddleware', () => {
    test('Should throw if authorization was not informed.', async () => {
        const { authMiddleware } = makeSut();
        const promise = authMiddleware.auth((0, make_http_request_1.makeHttpRequest)({}));
        await expect(promise).rejects.toThrow(errors_1.UnauthorizedError);
    });
    test('Should throw if authorization has not two words.', async () => {
        const { authMiddleware } = makeSut();
        const promise = authMiddleware.auth((0, make_http_request_1.makeHttpRequest)(makeAuthorization('any_token')));
        await expect(promise).rejects.toThrow(errors_1.UnauthorizedError);
    });
    test('Should throw if authorization has not the word Bearer.', async () => {
        const { authMiddleware } = makeSut();
        const promise = authMiddleware.auth((0, make_http_request_1.makeHttpRequest)(makeAuthorization('somer_word any_token')));
        await expect(promise).rejects.toThrow(errors_1.UnauthorizedError);
    });
    test('Should throw if authorization has more than three words.', async () => {
        const { authMiddleware } = makeSut();
        const promise = authMiddleware.auth((0, make_http_request_1.makeHttpRequest)(makeAuthorization('some_word any_token another_word')));
        await expect(promise).rejects.toThrow(errors_1.UnauthorizedError);
    });
    test('Should call TokenHandler with correct value.', async () => {
        const { authMiddleware, tokenHandlerAdapterStub } = makeSut();
        const validatorSpy = jest.spyOn(tokenHandlerAdapterStub, 'validateToken');
        await authMiddleware.auth((0, make_http_request_1.makeHttpRequest)(makeAuthorization('Bearer any_token')));
        expect(validatorSpy).toHaveBeenCalledWith('any_token');
    });
    test('Should throw is TokenHandler throws.', async () => {
        const { authMiddleware, tokenHandlerAdapterStub } = makeSut();
        jest
            .spyOn(tokenHandlerAdapterStub, 'validateToken')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = authMiddleware.auth((0, make_http_request_1.makeHttpRequest)(makeAuthorization('Bearer any_token')));
        await expect(promise).rejects.toThrow(errors_1.UnauthorizedError);
    });
    test('Should return a user on success.', async () => {
        const { authMiddleware } = makeSut();
        const user = await authMiddleware.auth((0, make_http_request_1.makeHttpRequest)(makeAuthorization('Bearer any_token')));
        expect(user).toBe(fake_user_1.fakeUser);
    });
});
//# sourceMappingURL=auth-middleware.spec.js.map
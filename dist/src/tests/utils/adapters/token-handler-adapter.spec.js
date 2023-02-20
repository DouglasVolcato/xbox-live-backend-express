"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../test-utils/errors/make-error");
const token_handler_adapter_1 = require("../../../utils/adapters/token-handler-adapter");
const fake_user_1 = require("../../test-utils/fake-entities/fake-user");
const errors_1 = require("../../../utils/errors");
process.env.SECRET = 'any_secret';
let token = '';
class GetUserByIdStub {
    async execute() {
        return new Promise((resolve) => resolve(fake_user_1.fakeUser));
    }
}
function makeSut() {
    const getUserByIdUseCaseStub = new GetUserByIdStub();
    const tokenHandlerAdapter = new token_handler_adapter_1.TokenHandlerAdapter(getUserByIdUseCaseStub);
    return { getUserByIdUseCaseStub, tokenHandlerAdapter };
}
describe('TokenHandlerAdapter', () => {
    test('GenerateToken should return a string.', () => {
        const { tokenHandlerAdapter } = makeSut();
        const generatedToken = tokenHandlerAdapter.generateToken(fake_user_1.fakeUser.id);
        token = generatedToken;
        expect(typeof token).toBe('string');
    });
    test('Should throw if GenerateToken throws.', () => {
        const { tokenHandlerAdapter } = makeSut();
        jest
            .spyOn(tokenHandlerAdapter, 'generateToken')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const generatedToken = tokenHandlerAdapter.generateToken('any_id');
        expect(generatedToken).rejects.toThrow();
    });
    test('ValidateToken should return a user if token is valid.', async () => {
        const { tokenHandlerAdapter } = makeSut();
        const validate = await tokenHandlerAdapter.validateToken(token);
        expect(validate).toBe(fake_user_1.fakeUser);
    });
    test('Should throw if if token is not valid', async () => {
        const { tokenHandlerAdapter } = makeSut();
        const validate = tokenHandlerAdapter.validateToken('invalid_token');
        await expect(validate).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if ValidateToken throws.', async () => {
        const { tokenHandlerAdapter } = makeSut();
        jest
            .spyOn(tokenHandlerAdapter, 'validateToken')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const validate = tokenHandlerAdapter.validateToken('any_token');
        expect(validate).rejects.toThrow();
    });
    test('Should call GetUserById with user decoded id.', async () => {
        const { getUserByIdUseCaseStub, tokenHandlerAdapter } = makeSut();
        const getUserByIdSpy = jest.spyOn(getUserByIdUseCaseStub, 'execute');
        await tokenHandlerAdapter.validateToken(token);
        expect(getUserByIdSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.id);
    });
    test('Should throw GetUserById throws.', async () => {
        const { getUserByIdUseCaseStub, tokenHandlerAdapter } = makeSut();
        jest
            .spyOn(getUserByIdUseCaseStub, 'execute')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = tokenHandlerAdapter.validateToken(token);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
});
//# sourceMappingURL=token-handler-adapter.spec.js.map
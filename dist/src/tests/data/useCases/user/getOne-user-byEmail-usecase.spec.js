"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const getOne_user_byEmail_usecase_1 = require("../../../../data/useCases/user/getOne-user-byEmail-usecase");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const make_error_1 = require("../../../test-utils/errors/make-error");
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const getOneUserByEmailUseCase = new getOne_user_byEmail_usecase_1.GetOneUserByEmailUseCase(userRepositoryStub);
    return { userRepositoryStub, getOneUserByEmailUseCase };
}
describe('GetOneUserByEmailUseCase', () => {
    test('Should call UserRepository with correct value.', async () => {
        const { userRepositoryStub, getOneUserByEmailUseCase } = makeSut();
        const getOneSpy = jest.spyOn(userRepositoryStub, 'getOneByEmail');
        await getOneUserByEmailUseCase.execute(fake_user_1.fakeUser.email);
        expect(getOneSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.email);
    });
    test('Should throw if UserRepository throws.', async () => {
        const { userRepositoryStub, getOneUserByEmailUseCase } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneByEmail')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = getOneUserByEmailUseCase.execute(fake_user_1.fakeUser.email);
        await expect(promise).rejects.toThrow();
    });
    test('Should return a user if called with correct user email.', async () => {
        const { getOneUserByEmailUseCase } = makeSut();
        const promise = await getOneUserByEmailUseCase.execute(fake_user_1.fakeUser.email);
        expect(promise).toBe(fake_user_1.fakeUser);
    });
});
//# sourceMappingURL=getOne-user-byEmail-usecase.spec.js.map
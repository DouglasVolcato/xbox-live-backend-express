"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const user_repository_stub_1 = require("../../../test-utils/stubs/repositories/user-repository-stub");
const make_error_1 = require("../../../test-utils/errors/make-error");
const getOne_user_byId_usecase_1 = require("../../../../data/useCases/user/getOne-user-byId-usecase");
function makeSut() {
    const userRepositoryStub = new user_repository_stub_1.UserRepositoryStub();
    const getOneUserByIdUseCase = new getOne_user_byId_usecase_1.GetOneUserByIdUseCase(userRepositoryStub);
    return { userRepositoryStub, getOneUserByIdUseCase };
}
describe('GetOneUserByEmailUseCase', () => {
    test('Should call UserRepository with correct value.', async () => {
        const { userRepositoryStub, getOneUserByIdUseCase } = makeSut();
        const getOneSpy = jest.spyOn(userRepositoryStub, 'getOneById');
        await getOneUserByIdUseCase.execute(fake_user_1.fakeUser.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.id);
    });
    test('Should throw if UserRepository throws.', async () => {
        const { userRepositoryStub, getOneUserByIdUseCase } = makeSut();
        jest
            .spyOn(userRepositoryStub, 'getOneById')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = getOneUserByIdUseCase.execute(fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should return a user if called with correct user ID.', async () => {
        const { getOneUserByIdUseCase } = makeSut();
        const promise = await getOneUserByIdUseCase.execute(fake_user_1.fakeUser.id);
        expect(promise).toBe(fake_user_1.fakeUser);
    });
});
//# sourceMappingURL=getOne-user-byId-usecase.spec.js.map
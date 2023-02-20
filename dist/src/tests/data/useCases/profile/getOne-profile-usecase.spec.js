"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const getOne_profile_usecase_1 = require("../../../../data/useCases/profile/getOne-profile-usecase");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
const errors_1 = require("../../../../utils/errors");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const getOneProfileUseCase = new getOne_profile_usecase_1.GetOneProfileUseCase(profileRepositoryStub);
    return { profileRepositoryStub, getOneProfileUseCase };
}
describe('GetOneProfileUseCase', () => {
    test('Should call ProfileReposiory with correct value.', async () => {
        const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
        const getOneSpy = jest.spyOn(profileRepositoryStub, 'getOne');
        await getOneProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id);
    });
    test('Should throw if ProfileReposiory throws.', async () => {
        const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = getOneProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_profile_1.fakeProfile.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if foundProfile.userId is different than the given user id.', async () => {
        const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_profile_1.fakeProfile), { userId: 'another_id' }))));
        const promise = getOneProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_profile_1.fakeProfile.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if foundProfile.getOne return void.', async () => {
        const { profileRepositoryStub, getOneProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = getOneProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_profile_1.fakeProfile.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
});
//# sourceMappingURL=getOne-profile-usecase.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const update_profile_usecase_1 = require("../../../../data/useCases/profile/update-profile-usecase");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
const errors_1 = require("../../../../utils/errors");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const updateProfileUseCase = new update_profile_usecase_1.UpdateProfileUseCase(profileRepositoryStub);
    return { profileRepositoryStub, updateProfileUseCase };
}
describe('UpdateProfileUseCase', () => {
    test('Ensure ProfileRepository is called with correct values.', async () => {
        const { profileRepositoryStub, updateProfileUseCase } = makeSut();
        const getOneSpy = jest.spyOn(profileRepositoryStub, 'getOne');
        const updateSpy = jest.spyOn(profileRepositoryStub, 'update');
        await updateProfileUseCase.execute(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id);
        expect(updateSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id);
    });
    test('Should throw if ProfileRepository.getOne throws.', async () => {
        const { profileRepositoryStub, updateProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = updateProfileUseCase.execute(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if ProfileRepository.update throws.', async () => {
        const { profileRepositoryStub, updateProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'update')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = updateProfileUseCase.execute(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct values.', async () => {
        const { updateProfileUseCase } = makeSut();
        const updated = await updateProfileUseCase.execute(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        expect(updated).toBe(true);
    });
    test('Should throw if ProfileRepository.getOne returns void.', async () => {
        const { profileRepositoryStub, updateProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = updateProfileUseCase.execute(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if foundProfile.userId is different than the given user id.', async () => {
        const { profileRepositoryStub, updateProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_profile_1.fakeProfile), { userId: 'another_id' }))));
        const promise = updateProfileUseCase.execute(fake_profile_1.fakeProfile, fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
});
//# sourceMappingURL=update-profile-usecase.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const delete_profile_usecase_1 = require("../../../../data/useCases/profile/delete-profile-usecase");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
const errors_1 = require("../../../../utils/errors");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const deleteProfileUseCase = new delete_profile_usecase_1.DeleteProfileUseCase(profileRepositoryStub);
    return { profileRepositoryStub, deleteProfileUseCase };
}
describe('DeleteProfileUseCase', () => {
    test('Should call ProfileRepository with correct values.', async () => {
        const { profileRepositoryStub, deleteProfileUseCase } = makeSut();
        const deleteSpy = jest.spyOn(profileRepositoryStub, 'delete');
        const getOneSpy = jest.spyOn(profileRepositoryStub, 'getOne');
        await deleteProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id);
        expect(deleteSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id);
    });
    test('Should throw if foundProfile userId is different then the user id.', async () => {
        const { profileRepositoryStub, deleteProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_profile_1.fakeProfile), { userId: 'wrong_id' }))));
        const promise = deleteProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if foundProfile is null.', async () => {
        const { profileRepositoryStub, deleteProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = deleteProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if ProfileRepository.getOne throws.', async () => {
        const { profileRepositoryStub, deleteProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = deleteProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if ProfileRepository.delete throws.', async () => {
        const { profileRepositoryStub, deleteProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'delete')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = deleteProfileUseCase.execute(fake_profile_1.fakeProfile.id, fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
});
//# sourceMappingURL=delete-profile-usecase.spec.js.map
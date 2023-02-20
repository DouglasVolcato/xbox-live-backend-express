"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const getAll_profile_usecase_1 = require("../../../../data/useCases/profile/getAll-profile-usecase");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const getAllProfilesUseCase = new getAll_profile_usecase_1.GetAllProfilesUseCase(profileRepositoryStub);
    return { profileRepositoryStub, getAllProfilesUseCase };
}
describe('GetAllProfilesUseCase', () => {
    test('Should return an array of profiles related to the user id.', async () => {
        const { getAllProfilesUseCase } = makeSut();
        const profiles = await getAllProfilesUseCase.execute(fake_user_1.fakeUser.id);
        expect(profiles[0]).toBe(fake_profile_1.fakeProfile);
    });
    test('Should return an empty array if ProfileRepository.getAll return an empty array.', async () => {
        const { getAllProfilesUseCase, profileRepositoryStub } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getAll')
            .mockReturnValueOnce(new Promise((resolve) => resolve([])));
        const profiles = await getAllProfilesUseCase.execute(fake_user_1.fakeUser.id);
        expect(profiles.length).toBe(0);
    });
    test('Should return an empty array if there are no profiles related to the given userId.', async () => {
        const { getAllProfilesUseCase } = makeSut();
        const profiles = await getAllProfilesUseCase.execute('another_userId');
        expect(profiles.length).toBe(0);
    });
    test('Should throw if ProfileRepository throws.', async () => {
        const { getAllProfilesUseCase, profileRepositoryStub } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getAll')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const profiles = getAllProfilesUseCase.execute(fake_user_1.fakeUser.id);
        await expect(profiles).rejects.toThrow();
    });
});
//# sourceMappingURL=getAll-profile-usecase.spec.js.map
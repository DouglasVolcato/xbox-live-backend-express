"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const create_profile_usecase_1 = require("../../../../data/useCases/profile/create-profile-usecase");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const createProfileUseCase = new create_profile_usecase_1.CreateProfileUseCase(profileRepositoryStub);
    return { profileRepositoryStub, createProfileUseCase };
}
describe('CreateUserUseCase', () => {
    test('Should call ProfileRepository with correct value.', async () => {
        const { profileRepositoryStub, createProfileUseCase } = makeSut();
        const createSpy = jest.spyOn(profileRepositoryStub, 'create');
        await createProfileUseCase.execute(fake_profile_1.fakeProfile);
        expect(createSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile);
    });
    test('Should throw if ProfileRepository throws.', async () => {
        const { profileRepositoryStub, createProfileUseCase } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'create')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = createProfileUseCase.execute(fake_profile_1.fakeProfile);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct user.', async () => {
        const { createProfileUseCase } = makeSut();
        const promise = await createProfileUseCase.execute(fake_profile_1.fakeProfile);
        expect(promise).toBe(true);
    });
});
//# sourceMappingURL=create-profile-usecase.spec.js.map
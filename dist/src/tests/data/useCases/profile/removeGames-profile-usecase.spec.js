"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const removeGames_profile_usecase_1 = require("../../../../data/useCases/profile/removeGames-profile-usecase");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
const errors_1 = require("../../../../utils/errors");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const removeGamesProfile = new removeGames_profile_usecase_1.RemoveGamesProfileUseCase(profileRepositoryStub);
    return { profileRepositoryStub, removeGamesProfile };
}
describe('RemoveGamesProfileUseCase', () => {
    test('Should call ProfileRepository with correct values.', async () => {
        const { profileRepositoryStub, removeGamesProfile } = makeSut();
        const getOneSpy = jest.spyOn(profileRepositoryStub, 'getOne');
        const updateFavoriteGamesSpy = jest.spyOn(profileRepositoryStub, 'updateFavoriteGames');
        await removeGamesProfile.execute(fake_profile_1.fakeProfile.id, ['game_to_delete'], fake_user_1.fakeUser.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id);
        expect(updateFavoriteGamesSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id, []);
    });
    test('Should throw if ProfileRepository.updateFavoriteGames throws.', async () => {
        const { profileRepositoryStub, removeGamesProfile } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'updateFavoriteGames')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = removeGamesProfile.execute(fake_profile_1.fakeProfile.id, ['game_to_delete'], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should call ProfileRepository.updateFavoriteGames with correct gameIds if they where not selected to remove.', async () => {
        const { profileRepositoryStub, removeGamesProfile } = makeSut();
        jest.spyOn(profileRepositoryStub, 'getOne').mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_profile_1.fakeProfile), { favoriteGames: ['game_to_delete', 'game_not_to_delete'] }))));
        const updateFavoriteGamesSpy = jest.spyOn(profileRepositoryStub, 'updateFavoriteGames');
        await removeGamesProfile.execute(fake_profile_1.fakeProfile.id, ['game_to_delete'], fake_user_1.fakeUser.id);
        expect(updateFavoriteGamesSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id, [
            'game_not_to_delete',
        ]);
    });
    test('Should throw if ProfileRepository.getOne throws.', async () => {
        const { profileRepositoryStub, removeGamesProfile } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = removeGamesProfile.execute(fake_profile_1.fakeProfile.id, ['game_to_delete'], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if foundProfile.userId is different from given user id.', async () => {
        const { profileRepositoryStub, removeGamesProfile } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_profile_1.fakeProfile), { userId: 'another_id' }))));
        const promise = removeGamesProfile.execute(fake_profile_1.fakeProfile.id, ['game_to_delete'], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if foundProfile is null.', async () => {
        const { profileRepositoryStub, removeGamesProfile } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = removeGamesProfile.execute(fake_profile_1.fakeProfile.id, ['game_to_delete'], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
});
//# sourceMappingURL=removeGames-profile-usecase.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const addGames_profile_usecase_1 = require("../../../../data/useCases/profile/addGames-profile-usecase");
const fake_game_1 = require("../../../test-utils/fake-entities/fake-game");
const fake_profile_1 = require("../../../test-utils/fake-entities/fake-profile");
const fake_user_1 = require("../../../test-utils/fake-entities/fake-user");
const profile_repository_stub_1 = require("../../../test-utils/stubs/repositories/profile-repository-stub");
const errors_1 = require("../../../../utils/errors");
function makeSut() {
    const profileRepositoryStub = new profile_repository_stub_1.ProfileRepositoryStub();
    const addGamesProfileUseCase = new addGames_profile_usecase_1.AddGamesProfileUseCase(profileRepositoryStub);
    return { profileRepositoryStub, addGamesProfileUseCase };
}
describe('AddGamesProfileUseCase', () => {
    test('Should call ProfileRepository with correct values.', async () => {
        const { profileRepositoryStub, addGamesProfileUseCase } = makeSut();
        const getOneSpy = jest.spyOn(profileRepositoryStub, 'getOne');
        const updateFavoriteGamesSpy = jest.spyOn(profileRepositoryStub, 'updateFavoriteGames');
        await addGamesProfileUseCase.execute(fake_profile_1.fakeProfile.id, [fake_game_1.fakeGame.id], fake_user_1.fakeUser.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id);
        expect(updateFavoriteGamesSpy).toHaveBeenCalledWith(fake_profile_1.fakeProfile.id, [
            fake_game_1.fakeGame.id,
        ]);
    });
    test('Should return true if called with correct values.', async () => {
        const { addGamesProfileUseCase } = makeSut();
        const gamesAdded = await addGamesProfileUseCase.execute(fake_profile_1.fakeProfile.id, [fake_game_1.fakeGame.id], fake_user_1.fakeUser.id);
        expect(gamesAdded).toBe(true);
    });
    test('Should throw if foundProfile userId is different than the given user id.', async () => {
        const { addGamesProfileUseCase, profileRepositoryStub } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_profile_1.fakeProfile), { userId: 'another_id' }))));
        const promise = addGamesProfileUseCase.execute(fake_profile_1.fakeProfile.id, [fake_game_1.fakeGame.id], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should return false if foundProfile is void.', async () => {
        const { addGamesProfileUseCase, profileRepositoryStub } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = addGamesProfileUseCase.execute(fake_profile_1.fakeProfile.id, [fake_game_1.fakeGame.id], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
    test('Should throw if ProfileRepository.getOne throws.', async () => {
        const { addGamesProfileUseCase, profileRepositoryStub } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'getOne')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = addGamesProfileUseCase.execute(fake_profile_1.fakeProfile.id, [fake_game_1.fakeGame.id], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if ProfileRepository.updateFavoriteGames throws.', async () => {
        const { addGamesProfileUseCase, profileRepositoryStub } = makeSut();
        jest
            .spyOn(profileRepositoryStub, 'updateFavoriteGames')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = addGamesProfileUseCase.execute(fake_profile_1.fakeProfile.id, [fake_game_1.fakeGame.id], fake_user_1.fakeUser.id);
        await expect(promise).rejects.toThrow();
    });
});
//# sourceMappingURL=addGames-profile-usecase.spec.js.map
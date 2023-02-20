"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const getAll_game_usecase_1 = require("../../../../data/useCases/game/getAll-game-usecase");
const fake_game_1 = require("../../../test-utils/fake-entities/fake-game");
const game_repository_stub_1 = require("../../../test-utils/stubs/repositories/game-repository-stub");
function makeSut() {
    const gameRepositoryStub = new game_repository_stub_1.GameRepositoryStub();
    const getAllGamesUseCase = new getAll_game_usecase_1.GetAllGamesUseCase(gameRepositoryStub);
    return { gameRepositoryStub, getAllGamesUseCase };
}
describe('GetAllGamesUseCase', () => {
    test('Should return an array of games.', async () => {
        const { getAllGamesUseCase } = makeSut();
        const games = await getAllGamesUseCase.execute();
        expect(games.length).toBeGreaterThanOrEqual(1);
        expect(games[0]).toBe(fake_game_1.fakeGame);
    });
    test('Should throw if GameRepository throws.', async () => {
        const { getAllGamesUseCase, gameRepositoryStub } = makeSut();
        jest.spyOn(gameRepositoryStub, 'getAll').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = getAllGamesUseCase.execute();
        await expect(promise).rejects.toThrow();
    });
});
//# sourceMappingURL=getAll-game-usecase.spec.js.map
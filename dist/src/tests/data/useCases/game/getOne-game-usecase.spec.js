"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const getOne_game_usecase_1 = require("../../../../data/useCases/game/getOne-game-usecase");
const fake_game_1 = require("../../../test-utils/fake-entities/fake-game");
const game_repository_stub_1 = require("../../../test-utils/stubs/repositories/game-repository-stub");
function makeSut() {
    const gameRepositoryStub = new game_repository_stub_1.GameRepositoryStub();
    const getOneGameUseCase = new getOne_game_usecase_1.GetOneGameUseCase(gameRepositoryStub);
    return { gameRepositoryStub, getOneGameUseCase };
}
describe('GetOneGameUseCase', () => {
    test('Should call GameRepository with correct values.', async () => {
        const { gameRepositoryStub, getOneGameUseCase } = makeSut();
        const getOneSpy = jest.spyOn(gameRepositoryStub, 'getOne');
        await getOneGameUseCase.execute(fake_game_1.fakeGame.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_game_1.fakeGame.id);
    });
    test('Should throw if GameRepository throws.', async () => {
        const { gameRepositoryStub, getOneGameUseCase } = makeSut();
        jest.spyOn(gameRepositoryStub, 'getOne').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = getOneGameUseCase.execute(fake_game_1.fakeGame.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should return a game if GameRepository.getOne returns a game.', async () => {
        const { getOneGameUseCase } = makeSut();
        const promise = await getOneGameUseCase.execute(fake_game_1.fakeGame.id);
        expect(promise).toBe(fake_game_1.fakeGame);
    });
    test('Should return void if GameRepository.getOne returns undefined.', async () => {
        const { getOneGameUseCase, gameRepositoryStub } = makeSut();
        jest
            .spyOn(gameRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = await getOneGameUseCase.execute(fake_game_1.fakeGame.id);
        expect(promise).toBeUndefined();
    });
});
//# sourceMappingURL=getOne-game-usecase.spec.js.map
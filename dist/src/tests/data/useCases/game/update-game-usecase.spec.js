"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const update_game_usecase_1 = require("../../../../data/useCases/game/update-game-usecase");
const fake_game_1 = require("../../../test-utils/fake-entities/fake-game");
const game_repository_stub_1 = require("../../../test-utils/stubs/repositories/game-repository-stub");
const errors_1 = require("../../../../utils/errors");
function makeSut() {
    const gameRepositoryStub = new game_repository_stub_1.GameRepositoryStub();
    const updateGameUseCase = new update_game_usecase_1.UpdateGameUseCase(gameRepositoryStub);
    return { gameRepositoryStub, updateGameUseCase };
}
describe('UpdateGameUseCase', () => {
    test('Should call GameRepository with correct values.', async () => {
        const { gameRepositoryStub, updateGameUseCase } = makeSut();
        const getOneSpy = jest.spyOn(gameRepositoryStub, 'getOne');
        const updateSpy = jest.spyOn(gameRepositoryStub, 'update');
        await updateGameUseCase.execute(fake_game_1.fakeGame, fake_game_1.fakeGame.id);
        expect(getOneSpy).toHaveBeenCalledWith(fake_game_1.fakeGame.id);
        expect(updateSpy).toHaveBeenCalledWith(fake_game_1.fakeGame, fake_game_1.fakeGame.id);
    });
    test('Should return true on success.', async () => {
        const { updateGameUseCase } = makeSut();
        const promise = await updateGameUseCase.execute(fake_game_1.fakeGame, fake_game_1.fakeGame.id);
        expect(promise).toBe(true);
    });
    test('Should throw if GameRepository.findOne throws.', async () => {
        const { gameRepositoryStub, updateGameUseCase } = makeSut();
        jest.spyOn(gameRepositoryStub, 'getOne').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = updateGameUseCase.execute(fake_game_1.fakeGame, fake_game_1.fakeGame.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if GameRepository.update throws.', async () => {
        const { gameRepositoryStub, updateGameUseCase } = makeSut();
        jest.spyOn(gameRepositoryStub, 'update').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = updateGameUseCase.execute(fake_game_1.fakeGame, fake_game_1.fakeGame.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should throw if GameRepository.findOne returns void.', async () => {
        const { gameRepositoryStub, updateGameUseCase } = makeSut();
        jest
            .spyOn(gameRepositoryStub, 'getOne')
            .mockReturnValueOnce(new Promise((resolve) => resolve()));
        const promise = updateGameUseCase.execute(fake_game_1.fakeGame, fake_game_1.fakeGame.id);
        expect(promise).rejects.toThrow(errors_1.InvalidParamError);
    });
});
//# sourceMappingURL=update-game-usecase.spec.js.map
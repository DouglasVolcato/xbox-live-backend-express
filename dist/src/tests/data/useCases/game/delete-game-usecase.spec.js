"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const delete_game_usecase_1 = require("../../../../data/useCases/game/delete-game-usecase");
const fake_game_1 = require("../../../test-utils/fake-entities/fake-game");
const game_repository_stub_1 = require("../../../test-utils/stubs/repositories/game-repository-stub");
function makeSut() {
    const gameRepositoryStub = new game_repository_stub_1.GameRepositoryStub();
    const deleteGameUseCase = new delete_game_usecase_1.DeleteGameUseCase(gameRepositoryStub);
    return { gameRepositoryStub, deleteGameUseCase };
}
describe('DeleteGameUseCase', () => {
    test('Ensure GameRepository is called with correct values.', async () => {
        const { gameRepositoryStub, deleteGameUseCase } = makeSut();
        const deleteSpy = jest.spyOn(gameRepositoryStub, 'delete');
        await deleteGameUseCase.execute(fake_game_1.fakeGame.id);
        expect(deleteSpy).toHaveBeenCalledWith(fake_game_1.fakeGame.id);
    });
    test('Should throw if GameRepository throws.', async () => {
        const { gameRepositoryStub, deleteGameUseCase } = makeSut();
        jest.spyOn(gameRepositoryStub, 'delete').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = deleteGameUseCase.execute(fake_game_1.fakeGame.id);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct value.', async () => {
        const { deleteGameUseCase } = makeSut();
        const promise = await deleteGameUseCase.execute(fake_game_1.fakeGame.id);
        expect(promise).toBe(true);
    });
});
//# sourceMappingURL=delete-game-usecase.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../../test-utils/errors/make-error");
const create_game_usecase_1 = require("../../../../data/useCases/game/create-game-usecase");
const fake_game_1 = require("../../../test-utils/fake-entities/fake-game");
const game_repository_stub_1 = require("../../../test-utils/stubs/repositories/game-repository-stub");
function makeSut() {
    const gameRepositoryStub = new game_repository_stub_1.GameRepositoryStub();
    const createGameUseCase = new create_game_usecase_1.CreateGameUseCase(gameRepositoryStub);
    return { gameRepositoryStub, createGameUseCase };
}
describe('CreateGameUseCase', () => {
    test('Should call GameRepository with correct value.', async () => {
        const { gameRepositoryStub, createGameUseCase } = makeSut();
        const createSpy = jest.spyOn(gameRepositoryStub, 'create');
        await createGameUseCase.execute(fake_game_1.fakeGame);
        expect(createSpy).toHaveBeenCalledWith(fake_game_1.fakeGame);
    });
    test('Should throw if GameRepository throws.', async () => {
        const { gameRepositoryStub, createGameUseCase } = makeSut();
        jest.spyOn(gameRepositoryStub, 'create').mockReturnValueOnce((0, make_error_1.makeError)());
        const promise = createGameUseCase.execute(fake_game_1.fakeGame);
        await expect(promise).rejects.toThrow();
    });
    test('Should return true if called with correct values.', async () => {
        const { createGameUseCase } = makeSut();
        const promise = await createGameUseCase.execute(fake_game_1.fakeGame);
        expect(promise).toBe(true);
    });
});
//# sourceMappingURL=create-game-usecase.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGameControllerFactory = void 0;
const create_game_usecase_1 = require("src/data/useCases/game/create-game-usecase");
const delete_game_usecase_1 = require("src/data/useCases/game/delete-game-usecase");
const getAll_game_usecase_1 = require("src/data/useCases/game/getAll-game-usecase");
const getOne_game_usecase_1 = require("src/data/useCases/game/getOne-game-usecase");
const update_game_usecase_1 = require("src/data/useCases/game/update-game-usecase");
const game_repository_1 = require("src/infra/repositories/game-repository");
const game_controller_1 = require("src/presentation/controllers/game/game-controller");
const auth_middleware_1 = require("src/presentation/middlewares/auth-middleware");
const token_handler_factory_1 = require("./token-handler-factory");
function makeGameControllerFactory() {
    const repository = new game_repository_1.GameRepository();
    const authMiddleware = new auth_middleware_1.AuthMiddleware((0, token_handler_factory_1.makeTokenHandler)());
    const createGameUseCase = new create_game_usecase_1.CreateGameUseCase(repository);
    const getOneGameUseCase = new getOne_game_usecase_1.GetOneGameUseCase(repository);
    const getAllGamesUseCase = new getAll_game_usecase_1.GetAllGamesUseCase(repository);
    const updateGameUseCase = new update_game_usecase_1.UpdateGameUseCase(repository);
    const deleteGameUseCase = new delete_game_usecase_1.DeleteGameUseCase(repository);
    return new game_controller_1.GameController(authMiddleware, createGameUseCase, getOneGameUseCase, getAllGamesUseCase, updateGameUseCase, deleteGameUseCase);
}
exports.makeGameControllerFactory = makeGameControllerFactory;
//# sourceMappingURL=game-controller-factory.js.map
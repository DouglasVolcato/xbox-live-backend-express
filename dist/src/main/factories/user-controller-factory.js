"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserControllerFactory = void 0;
const create_user_usecase_1 = require("src/data/useCases/user/create-user-usecase");
const delete_user_usecase_1 = require("src/data/useCases/user/delete-user-usecase");
const getAll_user_usecase_1 = require("src/data/useCases/user/getAll-user-usecase");
const getOne_user_byEmail_usecase_1 = require("src/data/useCases/user/getOne-user-byEmail-usecase");
const getOne_user_byId_usecase_1 = require("src/data/useCases/user/getOne-user-byId-usecase");
const update_user_usecase_1 = require("src/data/useCases/user/update-user-usecase");
const user_repository_1 = require("src/infra/repositories/user-repository");
const user_controller_1 = require("src/presentation/controllers/user/user-controller");
const auth_middleware_1 = require("src/presentation/middlewares/auth-middleware");
const token_handler_factory_1 = require("./token-handler-factory");
function makeUserControllerFactory() {
    const repository = new user_repository_1.UserRepository();
    const authMiddleware = new auth_middleware_1.AuthMiddleware((0, token_handler_factory_1.makeTokenHandler)());
    const createUserUseCase = new create_user_usecase_1.CreateUserUseCase(repository);
    const getOneUserByEmailUseCase = new getOne_user_byEmail_usecase_1.GetOneUserByEmailUseCase(repository);
    const getOneUserByIdUseCase = new getOne_user_byId_usecase_1.GetOneUserByIdUseCase(repository);
    const getAllUsersUseCase = new getAll_user_usecase_1.GetAllUsersUseCase(repository);
    const updateUserUseCase = new update_user_usecase_1.UpdateUserUseCase(repository);
    const deleteUserUseCase = new delete_user_usecase_1.DeleteUserUseCase(repository);
    return new user_controller_1.UserController(authMiddleware, createUserUseCase, getOneUserByEmailUseCase, getOneUserByIdUseCase, getAllUsersUseCase, updateUserUseCase, deleteUserUseCase);
}
exports.makeUserControllerFactory = makeUserControllerFactory;
//# sourceMappingURL=user-controller-factory.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthControllerFactory = void 0;
const login_auth_usecase_1 = require("src/data/useCases/auth/login-auth-usecase");
const user_repository_1 = require("src/infra/repositories/user-repository");
const auth_controller_1 = require("src/presentation/controllers/auth/auth-controller");
const hasher_adapter_1 = require("src/utils/adapters/hasher-adapter");
const token_handler_factory_1 = require("./token-handler-factory");
function makeAuthControllerFactory() {
    const repository = new user_repository_1.UserRepository();
    const hasher = new hasher_adapter_1.HasherAdapter();
    const loginAuthUseCase = new login_auth_usecase_1.LoginAuthUseCase(repository, hasher, (0, token_handler_factory_1.makeTokenHandler)());
    return new auth_controller_1.AuthController(loginAuthUseCase);
}
exports.makeAuthControllerFactory = makeAuthControllerFactory;
//# sourceMappingURL=auth-controller-factory.js.map
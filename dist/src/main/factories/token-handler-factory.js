"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTokenHandler = void 0;
const getOne_user_byId_usecase_1 = require("src/data/useCases/user/getOne-user-byId-usecase");
const user_repository_1 = require("src/infra/repositories/user-repository");
const token_handler_adapter_1 = require("src/utils/adapters/token-handler-adapter");
function makeTokenHandler() {
    const repository = new user_repository_1.UserRepository();
    const getOneUserByIdUseCase = new getOne_user_byId_usecase_1.GetOneUserByIdUseCase(repository);
    return new token_handler_adapter_1.TokenHandlerAdapter(getOneUserByIdUseCase);
}
exports.makeTokenHandler = makeTokenHandler;
//# sourceMappingURL=token-handler-factory.js.map
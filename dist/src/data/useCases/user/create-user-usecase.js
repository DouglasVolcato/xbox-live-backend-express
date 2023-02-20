"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const user_entity_1 = require("../../../entities/user-entity");
const errors_1 = require("../../../utils/errors");
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(body) {
        const userBody = new user_entity_1.UserEntity(body);
        userBody.validateBody();
        const newUser = userBody.getBody();
        const foundUser = await this.repository.getOneByEmail(newUser.email);
        if (foundUser && foundUser.email === newUser.email) {
            throw new errors_1.InvalidParamError('Email already registered.');
        }
        const createdUser = await this.repository.create(newUser);
        if (createdUser) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=create-user-usecase.js.map
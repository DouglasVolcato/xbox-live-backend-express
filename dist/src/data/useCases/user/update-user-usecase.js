"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const user_entity_1 = require("../../../entities/user-entity");
const errors_1 = require("../../../utils/errors");
class UpdateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(body, id) {
        const foundUser = await this.repository.getOneById(id);
        if (foundUser) {
            if (body.email) {
                const foundUserWithTheSameEmail = await this.repository.getOneByEmail(body.email);
                if (foundUserWithTheSameEmail &&
                    foundUserWithTheSameEmail.id !== foundUser.id) {
                    throw new errors_1.InvalidParamError('Email already registered in another account.');
                }
            }
            const updatedBody = new user_entity_1.UserEntity(body).updateBody(foundUser);
            const updatedUser = await this.repository.update(updatedBody, id);
            if (updatedUser) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            throw new errors_1.InvalidParamError('ID');
        }
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=update-user-usecase.js.map
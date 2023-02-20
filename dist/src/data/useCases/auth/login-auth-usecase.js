"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAuthUseCase = void 0;
const errors_1 = require("../../../utils/errors");
class LoginAuthUseCase {
    constructor(repository, hasher, tokenHandler) {
        this.repository = repository;
        this.hasher = hasher;
        this.tokenHandler = tokenHandler;
    }
    async execute(body) {
        const foundUser = await this.repository.getOneByEmail(body.email);
        if (foundUser) {
            const comparison = this.hasher.compare(body.password, foundUser.password);
            if (comparison) {
                return this.tokenHandler.generateToken(foundUser.id);
            }
            else {
                throw new errors_1.InvalidParamError('Password');
            }
        }
        else {
            throw new errors_1.InvalidParamError('Email');
        }
    }
}
exports.LoginAuthUseCase = LoginAuthUseCase;
//# sourceMappingURL=login-auth-usecase.js.map
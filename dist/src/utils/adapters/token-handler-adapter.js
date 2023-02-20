"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenHandlerAdapter = void 0;
const jwt = require("jsonwebtoken");
const errors_1 = require("../errors");
const env_vars_adapter_1 = require("./env-vars-adapter");
class TokenHandlerAdapter {
    constructor(getOneUserByIdUseCase) {
        this.getOneUserByIdUseCase = getOneUserByIdUseCase;
    }
    generateToken(userId) {
        return jwt.sign({ id: userId }, new env_vars_adapter_1.EnvVarsAdapter().secret, {
            expiresIn: 86400,
        });
    }
    async validateToken(token) {
        let mainUser;
        await jwt.verify(token, new env_vars_adapter_1.EnvVarsAdapter().secret, async (error, decoded) => {
            try {
                if (error) {
                    throw new errors_1.InvalidParamError('Token');
                }
                const user = await this.getOneUserByIdUseCase.execute(decoded.id);
                if (!user || !user.id) {
                    throw new errors_1.InvalidParamError('Token');
                }
                mainUser = user;
                return;
            }
            catch (error) {
                throw new errors_1.InvalidParamError('Token');
            }
        });
        return mainUser;
    }
}
exports.TokenHandlerAdapter = TokenHandlerAdapter;
//# sourceMappingURL=token-handler-adapter.js.map
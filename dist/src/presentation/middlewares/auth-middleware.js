"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const errors_1 = require("../../utils/errors");
class AuthMiddleware {
    constructor(tokenHandler) {
        this.tokenHandler = tokenHandler;
    }
    async auth(httpRequest) {
        try {
            const authorization = httpRequest.authorization;
            if (!authorization) {
                throw new errors_1.UnauthorizedError('Invalid Token');
            }
            const split = authorization.split(' ');
            if (!split || split[0] !== 'Bearer' || split.length !== 2) {
                throw new errors_1.UnauthorizedError('Invalid Token');
            }
            const user = await this.tokenHandler.validateToken(split[1]);
            return user;
        }
        catch (error) {
            throw new errors_1.UnauthorizedError('Invalid Token');
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth-middleware.js.map
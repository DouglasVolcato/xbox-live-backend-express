"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParamError = void 0;
class InvalidParamError extends Error {
    constructor(paramName) {
        super(`Invalid param: ${paramName}`);
        this.name = `Invalid param: ${paramName}`;
    }
}
exports.InvalidParamError = InvalidParamError;
//# sourceMappingURL=invalid-param-error.js.map
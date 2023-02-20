"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const env_vars_adapter_1 = require("../utils/adapters/env-vars-adapter");
const hasher_adapter_1 = require("../utils/adapters/hasher-adapter");
const id_generator_adapter_1 = require("../utils/adapters/id-generator-adapter");
const errors_1 = require("../utils/errors");
class UserEntity {
    constructor(user) {
        this.user = user;
    }
    validateBody() {
        if (!this.user.name) {
            throw new errors_1.MissingParamError('Name');
        }
        if (!this.user.password) {
            throw new errors_1.MissingParamError('Password');
        }
        if (!this.user.email) {
            throw new errors_1.MissingParamError('Email');
        }
    }
    getBody() {
        var _a, _b;
        const generatedId = new id_generator_adapter_1.IdGeneratorAdapter().generateId();
        const hashedPassword = new hasher_adapter_1.HasherAdapter().hash(this.user.password, 10);
        const isAdmin = this.user.secret &&
            this.user.secret === new env_vars_adapter_1.EnvVarsAdapter().adminPassword;
        const todayDate = new Date().toISOString().split('T')[0];
        return {
            id: (_a = this.user.id) !== null && _a !== void 0 ? _a : generatedId,
            name: this.user.name,
            email: this.user.email,
            password: hashedPassword,
            cpf: (_b = this.user.cpf) !== null && _b !== void 0 ? _b : '',
            isAdmin: isAdmin !== null && isAdmin !== void 0 ? isAdmin : false,
            profiles: [],
            createdAt: todayDate,
            updatedAt: todayDate,
        };
    }
    updateBody(mainUser) {
        var _a, _b, _c;
        const todayDate = new Date().toISOString().split('T')[0];
        const password = this.user.password
            ? new hasher_adapter_1.HasherAdapter().hash(this.user.password, 10)
            : mainUser.password;
        const isAdmin = this.user.secret &&
            this.user.secret === new env_vars_adapter_1.EnvVarsAdapter().adminPassword;
        return {
            id: mainUser.id,
            name: (_a = this.user.name) !== null && _a !== void 0 ? _a : mainUser.name,
            email: (_b = this.user.email) !== null && _b !== void 0 ? _b : mainUser.email,
            password: password,
            cpf: (_c = this.user.cpf) !== null && _c !== void 0 ? _c : mainUser.cpf,
            isAdmin: isAdmin !== null && isAdmin !== void 0 ? isAdmin : mainUser.isAdmin,
            profiles: mainUser.profiles,
            createdAt: mainUser.createdAt,
            updatedAt: todayDate,
        };
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user-entity.js.map
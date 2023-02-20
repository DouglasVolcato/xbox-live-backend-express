"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileEntity = void 0;
const id_generator_adapter_1 = require("../utils/adapters/id-generator-adapter");
const errors_1 = require("../utils/errors");
class ProfileEntity {
    constructor(profile) {
        this.profile = profile;
    }
    validateBody() {
        if (!this.profile.title) {
            throw new errors_1.MissingParamError('Title');
        }
    }
    getBody() {
        var _a, _b;
        const todayDate = new Date().toISOString().split('T')[0];
        return {
            id: (_a = this.profile.id) !== null && _a !== void 0 ? _a : new id_generator_adapter_1.IdGeneratorAdapter().generateId(),
            title: this.profile.title,
            imageUrl: (_b = this.profile.imageUrl) !== null && _b !== void 0 ? _b : '',
            favoriteGames: [],
            userId: this.profile.userId,
            createdAt: todayDate,
            updatedAt: todayDate,
        };
    }
    updateBody(mainProfile) {
        var _a, _b;
        const todayDate = new Date().toISOString().split('T')[0];
        return {
            id: mainProfile.id,
            title: (_a = this.profile.title) !== null && _a !== void 0 ? _a : mainProfile.title,
            imageUrl: (_b = this.profile.imageUrl) !== null && _b !== void 0 ? _b : mainProfile.imageUrl,
            favoriteGames: mainProfile.favoriteGames,
            userId: mainProfile.userId,
            createdAt: mainProfile.createdAt,
            updatedAt: todayDate,
        };
    }
}
exports.ProfileEntity = ProfileEntity;
//# sourceMappingURL=profile-entity.js.map
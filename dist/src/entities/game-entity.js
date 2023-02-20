"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEntity = void 0;
const id_generator_adapter_1 = require("../utils/adapters/id-generator-adapter");
const errors_1 = require("../utils/errors");
class GameEntity {
    constructor(game) {
        this.game = game;
    }
    validateBody() {
        if (!this.game.title) {
            throw new errors_1.MissingParamError('Title');
        }
        if (!this.game.year) {
            throw new errors_1.MissingParamError('Year');
        }
        if (!this.game.description) {
            throw new errors_1.MissingParamError('Description');
        }
        if (!this.game.coverImageUrl) {
            throw new errors_1.MissingParamError('Cover image');
        }
    }
    getBody() {
        var _a, _b, _c, _d, _e;
        const todayDate = new Date().toISOString().split('T')[0];
        return {
            id: (_a = this.game.id) !== null && _a !== void 0 ? _a : new id_generator_adapter_1.IdGeneratorAdapter().generateId(),
            title: this.game.title,
            coverImageUrl: this.game.coverImageUrl,
            description: this.game.description,
            year: this.game.year,
            gender: (_b = this.game.gender) !== null && _b !== void 0 ? _b : '',
            imdbScore: (_c = this.game.imdbScore) !== null && _c !== void 0 ? _c : 0,
            trailerYouTubeUrl: (_d = this.game.trailerYouTubeUrl) !== null && _d !== void 0 ? _d : '',
            gameplayYouTubeUrl: (_e = this.game.gameplayYouTubeUrl) !== null && _e !== void 0 ? _e : '',
            userId: this.game.userId,
            createdAt: todayDate,
            updatedAt: todayDate,
        };
    }
    updateBody(mainGame) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const todayDate = new Date().toISOString().split('T')[0];
        return {
            id: mainGame.id,
            title: (_a = this.game.title) !== null && _a !== void 0 ? _a : mainGame.title,
            coverImageUrl: (_b = this.game.coverImageUrl) !== null && _b !== void 0 ? _b : mainGame.coverImageUrl,
            description: (_c = this.game.description) !== null && _c !== void 0 ? _c : mainGame.description,
            year: (_d = this.game.year) !== null && _d !== void 0 ? _d : mainGame.year,
            gender: (_e = this.game.gender) !== null && _e !== void 0 ? _e : mainGame.gender,
            imdbScore: (_f = this.game.imdbScore) !== null && _f !== void 0 ? _f : mainGame.imdbScore,
            trailerYouTubeUrl: (_g = this.game.trailerYouTubeUrl) !== null && _g !== void 0 ? _g : mainGame.trailerYouTubeUrl,
            gameplayYouTubeUrl: (_h = this.game.gameplayYouTubeUrl) !== null && _h !== void 0 ? _h : mainGame.gameplayYouTubeUrl,
            userId: mainGame.userId,
            createdAt: mainGame.createdAt,
            updatedAt: todayDate,
        };
    }
}
exports.GameEntity = GameEntity;
//# sourceMappingURL=game-entity.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRepositoryStub = void 0;
const fake_game_1 = require("../../fake-entities/fake-game");
class GameRepositoryStub {
    create() {
        return new Promise((resolve) => resolve(fake_game_1.fakeGame));
    }
    getOne() {
        return new Promise((resolve) => resolve(fake_game_1.fakeGame));
    }
    getAll() {
        return new Promise((resolve) => resolve([fake_game_1.fakeGame]));
    }
    update() {
        return new Promise((resolve) => resolve(fake_game_1.fakeGame));
    }
    delete() {
        return new Promise((resolve) => resolve(fake_game_1.fakeGame));
    }
}
exports.GameRepositoryStub = GameRepositoryStub;
//# sourceMappingURL=game-repository-stub.js.map
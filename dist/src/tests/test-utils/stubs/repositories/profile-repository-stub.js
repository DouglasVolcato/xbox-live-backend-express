"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepositoryStub = void 0;
const fake_game_1 = require("../../fake-entities/fake-game");
const fake_profile_1 = require("../../fake-entities/fake-profile");
class ProfileRepositoryStub {
    create() {
        return new Promise((resolve) => resolve(fake_profile_1.fakeProfile));
    }
    getOne() {
        return new Promise((resolve) => resolve(fake_profile_1.fakeProfile));
    }
    getAll() {
        return new Promise((resolve) => resolve([fake_profile_1.fakeProfile]));
    }
    update() {
        return new Promise((resolve) => resolve(fake_profile_1.fakeProfile));
    }
    delete() {
        return new Promise((resolve) => resolve(fake_profile_1.fakeProfile));
    }
    updateFavoriteGames() {
        return new Promise((resolve) => resolve(fake_profile_1.fakeProfile));
    }
    getAllGames() {
        return new Promise((resolve) => resolve([fake_game_1.fakeGame]));
    }
}
exports.ProfileRepositoryStub = ProfileRepositoryStub;
//# sourceMappingURL=profile-repository-stub.js.map
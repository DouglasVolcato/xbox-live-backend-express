"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGameFactory = void 0;
const game_controller_factory_1 = require("../../factories/game-controller-factory");
const game_route_1 = require("../routes/game-route");
function makeGameFactory(router) {
    const gameController = (0, game_controller_factory_1.makeGameControllerFactory)();
    return new game_route_1.GameRoute(gameController, router);
}
exports.makeGameFactory = makeGameFactory;
//# sourceMappingURL=game-factory.js.map
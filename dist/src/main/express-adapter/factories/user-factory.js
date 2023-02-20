"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserFactory = void 0;
const user_controller_factory_1 = require("../../factories/user-controller-factory");
const user_route_1 = require("../routes/user-route");
function makeUserFactory(router) {
    const userController = (0, user_controller_factory_1.makeUserControllerFactory)();
    return new user_route_1.UserRoute(userController, router);
}
exports.makeUserFactory = makeUserFactory;
//# sourceMappingURL=user-factory.js.map
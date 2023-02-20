"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthFactory = void 0;
const auth_controller_factory_1 = require("../../factories/auth-controller-factory");
const auth_route_1 = require("../routes/auth-route");
function makeAuthFactory(router) {
    const authController = (0, auth_controller_factory_1.makeAuthControllerFactory)();
    return new auth_route_1.AuthRoute(authController, router);
}
exports.makeAuthFactory = makeAuthFactory;
//# sourceMappingURL=auth-factory.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProfileFactory = void 0;
const profile_controller_factory_1 = require("../../factories/profile-controller-factory");
const profile_route_1 = require("../routes/profile-route");
function makeProfileFactory(router) {
    const profileController = (0, profile_controller_factory_1.makeProfileControllerFactory)();
    return new profile_route_1.ProfileRoute(profileController, router);
}
exports.makeProfileFactory = makeProfileFactory;
//# sourceMappingURL=profile-factory.js.map
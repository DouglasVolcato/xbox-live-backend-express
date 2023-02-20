"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeApiTestFactory = void 0;
const apiTest_route_1 = require("../routes/apiTest-route");
function makeApiTestFactory(router) {
    return new apiTest_route_1.ApiTestRoute(router);
}
exports.makeApiTestFactory = makeApiTestFactory;
//# sourceMappingURL=apiTest-factory.js.map
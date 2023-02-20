"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTestRoute = void 0;
class ApiTestRoute {
    constructor(router) {
        this.router = router;
    }
    route() {
        this.router.get("/", (req, res) => {
            res.status(200).json({
                message: "Api is running.",
                docs: "xbox-live-backend-production.up.railway.app/api",
            });
        });
        return this.router;
    }
}
exports.ApiTestRoute = ApiTestRoute;
//# sourceMappingURL=apiTest-route.js.map
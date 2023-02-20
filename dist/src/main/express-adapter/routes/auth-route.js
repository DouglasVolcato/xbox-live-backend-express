"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const http_request_handler_1 = require("../../../utils/handlers/http/http-request-handler");
class AuthRoute {
    constructor(authController, router) {
        this.authController = authController;
        this.router = router;
    }
    route() {
        this.router.post("/login", (req, res) => {
            const { body } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ body }).request();
            this.authController.login(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        return this.router;
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth-route.js.map
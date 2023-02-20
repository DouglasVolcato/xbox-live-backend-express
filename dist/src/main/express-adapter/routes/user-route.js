"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const http_request_handler_1 = require("../../../utils/handlers/http/http-request-handler");
class UserRoute {
    constructor(profileController, router) {
        this.profileController = profileController;
        this.router = router;
    }
    route() {
        this.router.post("/create-user", (req, res) => {
            const { body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ body, headers }).request();
            this.profileController.create(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.get("/get-all-users", (req, res) => {
            const { headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ headers }).request();
            this.profileController.getAll(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.get("/get-user-by-id/:id", (req, res) => {
            const { params, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ params, headers }).request();
            this.profileController.getOneById(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.post("/get-user-by-email", (req, res) => {
            const { body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ body, headers }).request();
            this.profileController.getOneByEmail(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.delete("/delete-user/:id", (req, res) => {
            const { params, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ params, headers }).request();
            this.profileController.delete(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.patch("/update-profile/:id", (req, res) => {
            const { params, body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({
                params,
                body,
                headers,
            }).request();
            this.profileController.update(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        return this.router;
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=user-route.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoute = void 0;
const http_request_handler_1 = require("../../../utils/handlers/http/http-request-handler");
class ProfileRoute {
    constructor(profileController, router) {
        this.profileController = profileController;
        this.router = router;
    }
    route() {
        this.router.post("/create-profile", (req, res) => {
            const { body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ body, headers }).request();
            this.profileController.create(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.get("/get-all-profiles", (req, res) => {
            const { headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ headers }).request();
            this.profileController.getAll(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.get("/get-profile/:id", (req, res) => {
            const { params, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ params, headers }).request();
            this.profileController.getOne(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.delete("/delete-profile/:id", (req, res) => {
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
        this.router.patch("/add-games-profile/:id", (req, res) => {
            const { params, body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({
                params,
                body,
                headers,
            }).request();
            this.profileController.addGames(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.patch("/remove-games-profile/:id", (req, res) => {
            const { params, body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({
                params,
                body,
                headers,
            }).request();
            this.profileController.removeGames(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        return this.router;
    }
}
exports.ProfileRoute = ProfileRoute;
//# sourceMappingURL=profile-route.js.map
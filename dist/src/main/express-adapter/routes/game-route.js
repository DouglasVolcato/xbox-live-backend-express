"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoute = void 0;
const http_request_handler_1 = require("../../../utils/handlers/http/http-request-handler");
class GameRoute {
    constructor(gameController, router) {
        this.gameController = gameController;
        this.router = router;
    }
    route() {
        this.router.post("/create-game", (req, res) => {
            const { body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ body, headers }).request();
            this.gameController.create(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.delete("/delete-game/:id", (req, res) => {
            const { params, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ params, headers }).request();
            this.gameController.delete(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.get("/get-game/:id", (req, res) => {
            const { params, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ params, headers }).request();
            this.gameController.getOne(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.get("/get-all-games", (req, res) => {
            const { headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({ headers }).request();
            this.gameController.getAll(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        this.router.put("/update-game/:id", (req, res) => {
            const { params, body, headers } = req;
            const httpRequest = new http_request_handler_1.HttpRequestHandler({
                params,
                body,
                headers,
            }).request();
            this.gameController.update(httpRequest).then((data) => {
                res.status(data.statusCode).json(data.body);
            });
        });
        return this.router;
    }
}
exports.GameRoute = GameRoute;
//# sourceMappingURL=game-route.js.map
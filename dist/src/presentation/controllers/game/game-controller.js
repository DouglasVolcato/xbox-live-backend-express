"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const http_response_handler_1 = require("src/utils/handlers/http/http-response-handler");
class GameController {
    constructor(authMiddleware, createGameUseCase, getOneGameUseCase, getAllGamesUseCase, updateGameUseCase, deleteGameUseCase) {
        this.authMiddleware = authMiddleware;
        this.createGameUseCase = createGameUseCase;
        this.getOneGameUseCase = getOneGameUseCase;
        this.getAllGamesUseCase = getAllGamesUseCase;
        this.updateGameUseCase = updateGameUseCase;
        this.deleteGameUseCase = deleteGameUseCase;
    }
    async create(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const body = httpRequest.body;
            if (!authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Only admins can create games.',
                });
                return http.unauthorized();
            }
            const created = await this.createGameUseCase.execute(Object.assign(Object.assign({}, body), { userId: authUser.id }));
            if (created) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Game created.' });
                return http.created();
            }
            else {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'An error occurred.' });
                return http.badRequest();
            }
        }
        catch (error) {
            const http = new http_response_handler_1.HttpResponseHandler(error);
            return http.badRequest();
        }
    }
    async getOne(httpRequest) {
        try {
            await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const foundGame = await this.getOneGameUseCase.execute(id);
            if (foundGame) {
                const http = new http_response_handler_1.HttpResponseHandler(foundGame);
                return http.ok();
            }
            else {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Not found.' });
                return http.notFound();
            }
        }
        catch (error) {
            const http = new http_response_handler_1.HttpResponseHandler(error);
            return http.notFound();
        }
    }
    async getAll(httpRequest) {
        try {
            await this.authMiddleware.auth(httpRequest);
            const foundGames = await this.getAllGamesUseCase.execute();
            if (foundGames.length > 0) {
                const http = new http_response_handler_1.HttpResponseHandler(foundGames);
                return http.ok();
            }
            else {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Not found.' });
                return http.notFound();
            }
        }
        catch (error) {
            const http = new http_response_handler_1.HttpResponseHandler(error);
            return http.notFound();
        }
    }
    async update(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const body = httpRequest.body;
            if (!authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Only admins can update games.',
                });
                return http.unauthorized();
            }
            const updated = await this.updateGameUseCase.execute(body, id);
            if (updated) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Game updated.' });
                return http.ok();
            }
            else {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'An error occurred.' });
                return http.badRequest();
            }
        }
        catch (error) {
            const http = new http_response_handler_1.HttpResponseHandler(error);
            return http.badRequest();
        }
    }
    async delete(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            if (!authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Only admins can delete games.',
                });
                return http.unauthorized();
            }
            const deleted = await this.deleteGameUseCase.execute(id);
            if (deleted) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Game deleted.' });
                return http.ok();
            }
            else {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'An error occurred.' });
                return http.badRequest();
            }
        }
        catch (error) {
            const http = new http_response_handler_1.HttpResponseHandler(error);
            return http.badRequest();
        }
    }
}
exports.GameController = GameController;
//# sourceMappingURL=game-controller.js.map
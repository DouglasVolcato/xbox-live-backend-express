"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const http_response_handler_1 = require("src/utils/handlers/http/http-response-handler");
class ProfileController {
    constructor(authMiddleware, createProfileUseCase, getOneProfileUseCase, getAllProfilesUseCase, updateProfileUseCase, deleteProfileUseCase, addGamesProfileUseCase, removeGamesProfileUseCase) {
        this.authMiddleware = authMiddleware;
        this.createProfileUseCase = createProfileUseCase;
        this.getOneProfileUseCase = getOneProfileUseCase;
        this.getAllProfilesUseCase = getAllProfilesUseCase;
        this.updateProfileUseCase = updateProfileUseCase;
        this.deleteProfileUseCase = deleteProfileUseCase;
        this.addGamesProfileUseCase = addGamesProfileUseCase;
        this.removeGamesProfileUseCase = removeGamesProfileUseCase;
    }
    async create(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const body = httpRequest.body;
            const created = await this.createProfileUseCase.execute(Object.assign(Object.assign({}, body), { userId: authUser.id }));
            if (created) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Profile created.' });
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
            const authUser = await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const foundProfile = await this.getOneProfileUseCase.execute(id, authUser.id);
            if (foundProfile) {
                const http = new http_response_handler_1.HttpResponseHandler(foundProfile);
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
            const authUser = await this.authMiddleware.auth(httpRequest);
            const foundProfiles = await this.getAllProfilesUseCase.execute(authUser.id);
            if (foundProfiles.length > 0) {
                const http = new http_response_handler_1.HttpResponseHandler(foundProfiles);
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
            await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const body = httpRequest.body;
            const authUser = await this.authMiddleware.auth(httpRequest);
            const updated = await this.updateProfileUseCase.execute(body, id, authUser.id);
            if (updated) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Profile updated.' });
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
            const deleted = await this.deleteProfileUseCase.execute(id, authUser.id);
            if (deleted) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Profile deleted.' });
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
    async addGames(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const games = httpRequest.body.favoriteGames;
            const addedGames = await this.addGamesProfileUseCase.execute(id, games, authUser.id);
            if (addedGames) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Game(s) added.' });
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
    async removeGames(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const games = httpRequest.body.favoriteGames;
            const deletedGames = await this.removeGamesProfileUseCase.execute(id, games, authUser.id);
            if (deletedGames) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'Game(s) removed.' });
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
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile-controller.js.map
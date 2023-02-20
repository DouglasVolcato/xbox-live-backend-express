"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_response_handler_1 = require("../../../utils/handlers/http/http-response-handler");
class UserController {
    constructor(authMiddleware, createUserUseCase, getOneUserByEmailUseCase, getOneUserByIdUseCase, getAllUsersUseCase, updateUserUseCase, deleteUserUseCase) {
        this.authMiddleware = authMiddleware;
        this.createUserUseCase = createUserUseCase;
        this.getOneUserByEmailUseCase = getOneUserByEmailUseCase;
        this.getOneUserByIdUseCase = getOneUserByIdUseCase;
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async create(httpRequest) {
        try {
            const body = httpRequest.body;
            const created = await this.createUserUseCase.execute(body);
            if (created) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'User created.' });
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
    async getOneByEmail(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const email = httpRequest.body.email;
            const foundUser = await this.getOneUserByEmailUseCase.execute(email);
            if (foundUser && authUser.id !== foundUser.id && !authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Unauthorized to view this user.',
                });
                return http.unauthorized();
            }
            else if (foundUser) {
                const http = new http_response_handler_1.HttpResponseHandler(foundUser);
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
    async getOneById(httpRequest) {
        try {
            const authUser = await this.authMiddleware.auth(httpRequest);
            const id = httpRequest.id;
            const foundUser = await this.getOneUserByIdUseCase.execute(id);
            if (foundUser && authUser.id !== foundUser.id && !authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Unauthorized to view this user.',
                });
                return http.unauthorized();
            }
            else if (foundUser) {
                const http = new http_response_handler_1.HttpResponseHandler(foundUser);
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
            if (!authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Only admins can view the user list.',
                });
                return http.unauthorized();
            }
            const foundUsers = await this.getAllUsersUseCase.execute();
            if (foundUsers.length > 0) {
                const http = new http_response_handler_1.HttpResponseHandler(foundUsers);
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
            if (authUser.id !== id && !authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Unauthorized to update this user.',
                });
                return http.unauthorized();
            }
            const updated = await this.updateUserUseCase.execute(body, id);
            if (updated) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'User updated.' });
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
            if (authUser.id !== id && !authUser.isAdmin) {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Unauthorized to delete this user.',
                });
                return http.unauthorized();
            }
            const deleted = await this.deleteUserUseCase.execute(id);
            if (deleted) {
                const http = new http_response_handler_1.HttpResponseHandler({ message: 'User deleted.' });
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
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map
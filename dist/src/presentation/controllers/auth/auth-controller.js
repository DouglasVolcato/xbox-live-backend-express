"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_response_handler_1 = require("../../../utils/handlers/http/http-response-handler");
class AuthController {
    constructor(loginAuthUseCase) {
        this.loginAuthUseCase = loginAuthUseCase;
    }
    async login(httpRequest) {
        try {
            const { email, password } = httpRequest.body;
            const token = await this.loginAuthUseCase.execute({ email, password });
            if (token) {
                const http = new http_response_handler_1.HttpResponseHandler({ token });
                return http.ok();
            }
            else {
                const http = new http_response_handler_1.HttpResponseHandler({
                    message: 'Invalid information.',
                });
                return http.unauthorized();
            }
        }
        catch (error) {
            const http = new http_response_handler_1.HttpResponseHandler({ message: error });
            return http.unauthorized();
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth-controller.js.map
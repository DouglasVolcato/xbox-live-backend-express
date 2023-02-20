"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestHandler = void 0;
class HttpRequestHandler {
    constructor(clientRequest) {
        this.clientRequest = clientRequest;
    }
    request() {
        const httpRequest = {};
        try {
            httpRequest.authorization = this.clientRequest.headers.authorization;
        }
        catch (error) {
            httpRequest.authorization = '';
        }
        try {
            httpRequest.id = this.clientRequest.params.id;
        }
        catch (error) {
            httpRequest.id = '';
        }
        try {
            httpRequest.body = this.clientRequest.body;
        }
        catch (error) {
            httpRequest.body = {};
        }
        return httpRequest;
    }
}
exports.HttpRequestHandler = HttpRequestHandler;
//# sourceMappingURL=http-request-handler.js.map
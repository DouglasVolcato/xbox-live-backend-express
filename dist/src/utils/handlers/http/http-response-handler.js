"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseHandler = void 0;
class HttpResponseHandler {
    constructor(body) {
        this.body = body;
    }
    ok() {
        return {
            statusCode: 200,
            body: this.body,
        };
    }
    created() {
        return {
            statusCode: 201,
            body: this.body,
        };
    }
    badRequest() {
        return {
            statusCode: 400,
            body: this.body,
        };
    }
    unauthorized() {
        return {
            statusCode: 401,
            body: this.body,
        };
    }
    notFound() {
        return {
            statusCode: 404,
            body: this.body,
        };
    }
}
exports.HttpResponseHandler = HttpResponseHandler;
//# sourceMappingURL=http-response-handler.js.map
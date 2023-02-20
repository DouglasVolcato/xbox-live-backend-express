"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHttpRequest = void 0;
const http_request_handler_1 = require("../../../utils/handlers/http/http-request-handler");
function makeHttpRequest(requestBody) {
    const http = new http_request_handler_1.HttpRequestHandler(requestBody);
    return http.request();
}
exports.makeHttpRequest = makeHttpRequest;
//# sourceMappingURL=make-http-request.js.map
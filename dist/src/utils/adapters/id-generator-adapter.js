"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGeneratorAdapter = void 0;
const uuid_1 = require("uuid");
class IdGeneratorAdapter {
    generateId() {
        return (0, uuid_1.v4)();
    }
}
exports.IdGeneratorAdapter = IdGeneratorAdapter;
//# sourceMappingURL=id-generator-adapter.js.map
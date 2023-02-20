"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasherAdapter = void 0;
const bcrypt_1 = require("bcrypt");
class HasherAdapter {
    hash(password, saltRounds) {
        return (0, bcrypt_1.hashSync)(password, saltRounds);
    }
    compare(password, hashedPassword) {
        return (0, bcrypt_1.compareSync)(password, hashedPassword);
    }
}
exports.HasherAdapter = HasherAdapter;
//# sourceMappingURL=hasher-adapter.js.map
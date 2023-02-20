"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvVarsAdapter = void 0;
class EnvVarsAdapter {
    constructor() {
        this.adminPassword = process.env.ADMPASSWORD;
        this.port = process.env.PORT;
        this.secret = process.env.SECRET;
    }
}
exports.EnvVarsAdapter = EnvVarsAdapter;
//# sourceMappingURL=env-vars-adapter.js.map
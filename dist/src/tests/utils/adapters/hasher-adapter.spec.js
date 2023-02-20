"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../test-utils/errors/make-error");
const hasher_adapter_1 = require("../../../utils/adapters/hasher-adapter");
function makeSut() {
    const hasherAdapter = new hasher_adapter_1.HasherAdapter();
    return { hasherAdapter };
}
let hashed_password = '';
describe('HasherAdapter', () => {
    test('Hash method should return a string.', () => {
        const { hasherAdapter } = makeSut();
        const hash = hasherAdapter.hash('any_password', 10);
        hashed_password = hash;
        expect(hash).toBeDefined();
        expect(typeof hash).toBe('string');
    });
    test('Should throw if Hash throws.', () => {
        const { hasherAdapter } = makeSut();
        jest.spyOn(hasherAdapter, 'hash').mockReturnValueOnce((0, make_error_1.makeError)());
        const hash = hasherAdapter.hash('any_password', 10);
        expect(hash).rejects.toThrow();
    });
    test('Compare should return true if password matches with hashed password.', () => {
        const { hasherAdapter } = makeSut();
        const compare = hasherAdapter.compare('any_password', hashed_password);
        expect(compare).toBe(true);
    });
    test('Compare should return false if password does not match with hashed password.', () => {
        const { hasherAdapter } = makeSut();
        const compare = hasherAdapter.compare('wrong_password', hashed_password);
        expect(compare).toBe(false);
    });
    test('Should throw if Compare throws.', () => {
        const { hasherAdapter } = makeSut();
        jest.spyOn(hasherAdapter, 'compare').mockReturnValueOnce((0, make_error_1.makeError)());
        const compare = hasherAdapter.compare('any_password', 'hashed_password');
        expect(compare).rejects.toThrow();
    });
});
//# sourceMappingURL=hasher-adapter.spec.js.map
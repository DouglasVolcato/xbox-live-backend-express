"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_error_1 = require("../../test-utils/errors/make-error");
const id_generator_adapter_1 = require("../../../utils/adapters/id-generator-adapter");
function makeSut() {
    const idGeneratorAdapter = new id_generator_adapter_1.IdGeneratorAdapter();
    return { idGeneratorAdapter };
}
describe('IdGeneratorAdapter', () => {
    test('GenerateId should return a string.', () => {
        const { idGeneratorAdapter } = makeSut();
        const id = idGeneratorAdapter.generateId();
        expect(typeof id).toBe('string');
    });
    test('Should throw if GenerateId throws.', () => {
        const { idGeneratorAdapter } = makeSut();
        jest
            .spyOn(idGeneratorAdapter, 'generateId')
            .mockReturnValueOnce((0, make_error_1.makeError)());
        const id = idGeneratorAdapter.generateId();
        expect(id).rejects.toThrow();
    });
});
//# sourceMappingURL=id-generator-adapter.spec.js.map
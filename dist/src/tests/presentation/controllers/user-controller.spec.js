"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_stub_1 = require("../../test-utils/stubs/middlewares/auth-middleware-stub");
const create_user_usecase_stub_1 = require("../../test-utils/stubs/useCases/user/create-user-usecase-stub");
const delete_user_usecase_stub_1 = require("../../test-utils/stubs/useCases/user/delete-user-usecase-stub");
const getAll_user_usecase_stub_1 = require("../../test-utils/stubs/useCases/user/getAll-user-usecase-stub");
const getOne_user_byEmail_usecase_stub_1 = require("../../test-utils/stubs/useCases/user/getOne-user-byEmail-usecase-stub");
const getOne_user_byId_usecase_stub_1 = require("../../test-utils/stubs/useCases/user/getOne-user-byId-usecase-stub");
const update_user_usecase_stub_1 = require("../../test-utils/stubs/useCases/user/update-user-usecase-stub");
const user_controller_1 = require("../../../presentation/controllers/user/user-controller");
const make_http_request_1 = require("../../test-utils/http/make-http-request");
const fake_user_1 = require("../../test-utils/fake-entities/fake-user");
function makeRequestBody(body) {
    return { body: body };
}
function makeRequestParams(param) {
    return { params: param };
}
function makeSut() {
    const authMiddlewareStub = new auth_middleware_stub_1.AuthMiddlewareStub();
    const createUserUseCaseStub = new create_user_usecase_stub_1.CreateUserUseCaseStub();
    const getOneUserByEmailUseCaseStub = new getOne_user_byEmail_usecase_stub_1.GetOneUserByEmailUseCaseStub();
    const getOneUserByIdUseCaseStub = new getOne_user_byId_usecase_stub_1.GetOneUserByIdUseCaseStub();
    const getAllUsersUseCaseStub = new getAll_user_usecase_stub_1.GetAllUsersUseCaseStub();
    const updateUserUseCaseStub = new update_user_usecase_stub_1.UpdateUserUseCaseStub();
    const deleteUserUseCaseStub = new delete_user_usecase_stub_1.DeleteUserUseCaseStub();
    const userController = new user_controller_1.UserController(authMiddlewareStub, createUserUseCaseStub, getOneUserByEmailUseCaseStub, getOneUserByIdUseCaseStub, getAllUsersUseCaseStub, updateUserUseCaseStub, deleteUserUseCaseStub);
    return {
        authMiddlewareStub,
        createUserUseCaseStub,
        getOneUserByEmailUseCaseStub,
        getOneUserByIdUseCaseStub,
        getAllUsersUseCaseStub,
        updateUserUseCaseStub,
        deleteUserUseCaseStub,
        userController,
    };
}
describe('UserController-Create', () => {
    test('Should call CreateUserUseCase with request body.', async () => {
        const { createUserUseCaseStub, userController } = makeSut();
        const createUseCaseSpy = jest.spyOn(createUserUseCaseStub, 'execute');
        await userController.create((0, make_http_request_1.makeHttpRequest)(makeRequestBody({ id: fake_user_1.fakeUser.id })));
        expect(createUseCaseSpy).toHaveBeenCalledWith({ id: fake_user_1.fakeUser.id });
    });
});
describe('UserController-GetOneByEmail', () => {
    test('Should call GetOneUserByEmailUseCase with the email.', async () => {
        const { getOneUserByEmailUseCaseStub, userController } = makeSut();
        const getOneUseCaseSpy = jest.spyOn(getOneUserByEmailUseCaseStub, 'execute');
        await userController.getOneByEmail((0, make_http_request_1.makeHttpRequest)(makeRequestBody({ email: fake_user_1.fakeUser.email })));
        expect(getOneUseCaseSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.email);
    });
});
describe('UserController-GetOneById', () => {
    test('Should call GetOneUserByIdUseCase with the ID.', async () => {
        const { getOneUserByIdUseCaseStub, userController } = makeSut();
        const getOneUseCaseSpy = jest.spyOn(getOneUserByIdUseCaseStub, 'execute');
        await userController.getOneById((0, make_http_request_1.makeHttpRequest)(makeRequestParams({ id: fake_user_1.fakeUser.id })));
        expect(getOneUseCaseSpy).toHaveBeenCalledWith(fake_user_1.fakeUser.id);
    });
});
describe('UserController-GetAllUsersUseCase', () => {
    test('Should call GetAllUsersUseCaseStub.', async () => {
        const { authMiddlewareStub, getAllUsersUseCaseStub, userController } = makeSut();
        const getAllUseCaseSpy = jest.spyOn(getAllUsersUseCaseStub, 'execute');
        jest
            .spyOn(authMiddlewareStub, 'auth')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_user_1.fakeUser), { isAdmin: true }))));
        await userController.getAll((0, make_http_request_1.makeHttpRequest)(makeRequestParams({})));
        expect(getAllUseCaseSpy).toHaveBeenCalled();
    });
});
describe('UserController-Update', () => {
    test('Should call UpdateUserUseCase with correct values.', async () => {
        const { authMiddlewareStub, updateUserUseCaseStub, userController } = makeSut();
        const updateUseCaseSpy = jest.spyOn(updateUserUseCaseStub, 'execute');
        jest
            .spyOn(authMiddlewareStub, 'auth')
            .mockReturnValueOnce(new Promise((resolve) => resolve(Object.assign(Object.assign({}, fake_user_1.fakeUser), { isAdmin: true }))));
        await userController.update((0, make_http_request_1.makeHttpRequest)({ params: { id: fake_user_1.fakeUser.id }, body: fake_user_1.fakeUser }));
        expect(updateUseCaseSpy).toHaveBeenCalledWith(fake_user_1.fakeUser, fake_user_1.fakeUser.id);
    });
});
//# sourceMappingURL=user-controller.spec.js.map
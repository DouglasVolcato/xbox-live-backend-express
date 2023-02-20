"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProfileControllerFactory = void 0;
const addGames_profile_usecase_1 = require("src/data/useCases/profile/addGames-profile-usecase");
const create_profile_usecase_1 = require("src/data/useCases/profile/create-profile-usecase");
const delete_profile_usecase_1 = require("src/data/useCases/profile/delete-profile-usecase");
const getAll_profile_usecase_1 = require("src/data/useCases/profile/getAll-profile-usecase");
const getOne_profile_usecase_1 = require("src/data/useCases/profile/getOne-profile-usecase");
const removeGames_profile_usecase_1 = require("src/data/useCases/profile/removeGames-profile-usecase");
const update_profile_usecase_1 = require("src/data/useCases/profile/update-profile-usecase");
const profile_repository_1 = require("src/infra/repositories/profile-repository");
const profile_controller_1 = require("src/presentation/controllers/profile/profile-controller");
const auth_middleware_1 = require("src/presentation/middlewares/auth-middleware");
const token_handler_factory_1 = require("./token-handler-factory");
function makeProfileControllerFactory() {
    const repository = new profile_repository_1.ProfileRepository();
    const authMiddleware = new auth_middleware_1.AuthMiddleware((0, token_handler_factory_1.makeTokenHandler)());
    const createProfileUseCase = new create_profile_usecase_1.CreateProfileUseCase(repository);
    const getOneProfileUseCase = new getOne_profile_usecase_1.GetOneProfileUseCase(repository);
    const getAllProfilesUseCase = new getAll_profile_usecase_1.GetAllProfilesUseCase(repository);
    const updateProfileUseCase = new update_profile_usecase_1.UpdateProfileUseCase(repository);
    const deleteProfileUseCase = new delete_profile_usecase_1.DeleteProfileUseCase(repository);
    const addGamesProfileUseCase = new addGames_profile_usecase_1.AddGamesProfileUseCase(repository);
    const removeGamesProfileUseCase = new removeGames_profile_usecase_1.RemoveGamesProfileUseCase(repository);
    return new profile_controller_1.ProfileController(authMiddleware, createProfileUseCase, getOneProfileUseCase, getAllProfilesUseCase, updateProfileUseCase, deleteProfileUseCase, addGamesProfileUseCase, removeGamesProfileUseCase);
}
exports.makeProfileControllerFactory = makeProfileControllerFactory;
//# sourceMappingURL=profile-controller-factory.js.map
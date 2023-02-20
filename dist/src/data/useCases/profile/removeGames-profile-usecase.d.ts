import { RemoveGamesProfileUseCaseInterface } from '../../../data/abstract/profile/removeGames-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
export declare class RemoveGamesProfileUseCase implements RemoveGamesProfileUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(profileId: string, gameIds: string[], userId: string): Promise<boolean>;
}

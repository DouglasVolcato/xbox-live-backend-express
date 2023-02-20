import { AddGamesProfileUseCaseInterface } from '../../../data/abstract/profile/addGames-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
export declare class AddGamesProfileUseCase implements AddGamesProfileUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(profileId: string, gameIds: string[], userId: string): Promise<boolean>;
}

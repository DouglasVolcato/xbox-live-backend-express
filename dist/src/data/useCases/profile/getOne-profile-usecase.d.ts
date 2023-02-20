import { GetOneProfileUseCaseInterface } from '../../abstract/profile/getOne-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
import { ProfileEntityInterface } from '../../../domain/entities/profile-entity-interface';
export declare class GetOneProfileUseCase implements GetOneProfileUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(profileId: string, userId: string): Promise<ProfileEntityInterface | void>;
}

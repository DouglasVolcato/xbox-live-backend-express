import { GetAllProfilesUseCaseInterface } from '../../abstract/profile/getAll-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
import { ProfileEntityInterface } from '../../../domain/entities/profile-entity-interface';
export declare class GetAllProfilesUseCase implements GetAllProfilesUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(userId: string): Promise<ProfileEntityInterface[]>;
}

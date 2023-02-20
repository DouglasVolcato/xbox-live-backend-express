import { DeleteProfileUseCaseInterface } from '../../abstract/profile/delete-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
export declare class DeleteProfileUseCase implements DeleteProfileUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(profileId: string, userId: string): Promise<boolean>;
}

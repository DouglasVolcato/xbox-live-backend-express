import { UpdateProfileUseCaseInterface } from '../../abstract/profile/update-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
import { ProfileDto } from '../../../domain/dtos/profile-dto';
export declare class UpdateProfileUseCase implements UpdateProfileUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(body: ProfileDto, profileId: string, userId: string): Promise<boolean>;
}

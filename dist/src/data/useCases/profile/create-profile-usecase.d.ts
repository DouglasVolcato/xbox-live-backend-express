import { CreateProfileUseCaseInterface } from '../../abstract/profile/create-profile-interface';
import { ProfileDto } from '../../../domain/dtos/profile-dto';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
export declare class CreateProfileUseCase implements CreateProfileUseCaseInterface {
    private readonly repository;
    constructor(repository: ProfileRepositoryInterface);
    execute(body: ProfileDto): Promise<boolean>;
}

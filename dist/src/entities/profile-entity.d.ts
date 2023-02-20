import { ProfileDto } from 'src/domain/dtos/profile-dto';
import { ProfileEntityInterface } from '../domain/entities/profile-entity-interface';
import { ProfileValidatorInterface } from '../entities/abstract/profile-validator-interface';
export declare class ProfileEntity implements ProfileValidatorInterface {
    private readonly profile;
    constructor(profile: ProfileDto);
    validateBody(): void;
    getBody(): ProfileEntityInterface;
    updateBody(mainProfile: ProfileEntityInterface): ProfileEntityInterface;
}

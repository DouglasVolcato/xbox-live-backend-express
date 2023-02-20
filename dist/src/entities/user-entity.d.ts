import { UserDto } from '../domain/dtos/user-dto';
import { UserEntityInterface } from '../domain/entities/user-entity-interface';
import { UserValidatorInterface } from '../entities/abstract/user-validator-interface';
export declare class UserEntity implements UserValidatorInterface {
    private readonly user;
    constructor(user: UserDto);
    validateBody(): void;
    getBody(): UserEntityInterface;
    updateBody(mainUser: UserEntityInterface): {
        id: string;
        name: string;
        email: string;
        password: string;
        cpf: string;
        isAdmin: boolean;
        profiles: import("../domain/entities/profile-entity-interface").ProfileEntityInterface[];
        createdAt: string;
        updatedAt: string;
    };
}

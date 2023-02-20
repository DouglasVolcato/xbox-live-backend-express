import { GameEntityInterface } from '../../../../domain/entities/game-entity-interface';
import { ProfileEntityInterface } from '../../../../domain/entities/profile-entity-interface';
import { ProfileRepositoryInterface } from '../../../../infra/repositories/abstract/profile-repository-interface';
export declare class ProfileRepositoryStub implements ProfileRepositoryInterface {
    create(): Promise<ProfileEntityInterface>;
    getOne(): Promise<void | ProfileEntityInterface>;
    getAll(): Promise<ProfileEntityInterface[]>;
    update(): Promise<void | ProfileEntityInterface>;
    delete(): Promise<void | ProfileEntityInterface>;
    updateFavoriteGames(): Promise<void | ProfileEntityInterface>;
    getAllGames(): Promise<GameEntityInterface[]>;
}

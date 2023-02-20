import { GameEntityInterface } from 'src/domain/entities/game-entity-interface';
import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
export declare class ProfileRepository implements ProfileRepositoryInterface {
    create(body: ProfileEntityInterface): Promise<ProfileEntityInterface>;
    getOne(id: string): Promise<ProfileEntityInterface>;
    getAll(): Promise<ProfileEntityInterface[]>;
    update(body: ProfileEntityInterface, id: string): Promise<ProfileEntityInterface>;
    delete(id: string): Promise<void | ProfileEntityInterface>;
    updateFavoriteGames(id: string, favoriteGames: string[]): Promise<void | ProfileEntityInterface>;
    getAllGames(): Promise<GameEntityInterface[]>;
}

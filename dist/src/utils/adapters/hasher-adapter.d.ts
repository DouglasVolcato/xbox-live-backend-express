import { HasherInterface } from '../abstract/adapters/hasher-interface';
export declare class HasherAdapter implements HasherInterface {
    hash(password: string, saltRounds: number): string;
    compare(password: string, hashedPassword: string): boolean;
}

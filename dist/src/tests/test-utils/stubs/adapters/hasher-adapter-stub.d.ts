import { HasherInterface } from '../../../../utils/abstract/adapters/hasher-interface';
export declare class HasherAdapterStub implements HasherInterface {
    hash(): string;
    compare(): boolean;
}

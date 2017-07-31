import { BaseEntity } from './../../shared';

export class Server implements BaseEntity {
    constructor(
        public id?: string,
        public serverName?: string,
        public uri?: string,
        public certificateHash?: string,
    ) {
    }
}

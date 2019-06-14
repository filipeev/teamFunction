import { Usuario } from "./usuario.model";

export class Room {
    constructor(
        public creator: string,
        public description: string,
        public imgSrc: string,
        public key: string,
        public level: number,
        public members: Usuario[],
        public name: string
    ){}
}

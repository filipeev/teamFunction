export class Room {
    constructor(
        public creator: string,
        public description: string,
        public imgSrc: string,
        public key: string,
        public level: number,
        public members: number,
        public name: string
    ){}
}

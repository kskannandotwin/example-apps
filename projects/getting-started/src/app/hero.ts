let nextId = 1;

export class Hero {
    id!: number;
    constructor(
        public name: string,
        public power?: string
    ) {
        this.id = nextId++;
    }
}

export class Villain {
    id!: number;
    constructor(
        public name: string,
        public power?: string
    ) {
        this.id = nextId++;
    }
}
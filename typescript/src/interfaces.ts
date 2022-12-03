//Interfaces (type x interface)
type robot = {
    id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: 'megaman',
}

const bot2: robot2 = {
    id: 1,
    name: 'megaman',
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot);
console.log(bot2);

class Pessoa implements robot2 {
    id: number | string;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello I'm ${this.name}!`;
    }
}
const p = new Pessoa(1, "JudRobot");
console.log(p.sayHello());
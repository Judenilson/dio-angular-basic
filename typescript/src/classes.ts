/*
Data modifiers
public - todos tem acesso
private - apenas a classe tem acesso
protected - os herdeiros tb conseguem acessar
*/

class Character {
    protected name?: string; // A interrogação deixa o dado opcional.
    readonly stregth: number;
    skill: number;

    constructor(name: string, streght: number, skill: number) {
        this.name = name;
        this.stregth = streght;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character{
    magicPoints: number;

    constructor(name: string, streght: number, skill: number, magicPoints: number){
        super(name, streght, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("robot", 10, 98);
const p2 = new Magician("Mago", 100, 99, 100);
p1.attack();
p2.attack();
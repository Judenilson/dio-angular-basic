//Funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addHello(name: string): string {
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

// Função assíncrona sempre retorna uma Promisse!
async function getDatabase(id: number): Promise<number | string> {
    return "Judenilson";
}

let soma: number = addNumber(4, 7);
console.log(soma);
console.log(addHello("Judenilson"));
console.log(callToPhone("Judenilson"));
console.log(callToPhone(988753656));

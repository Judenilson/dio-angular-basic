type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi) {
    console.log(pessoa);
}

printaObjetos({
    name: "Judenilson",
    vulgo: "Nilsinho",
});

// Variáveis

//Tipos Primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Judenilson";
let idade: number = 40;
let altura: number = 1.75;

//Tipos Especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos abrangentes: any, void
let qualquerCoisa: any = 234;
let vazio: void;

//Objeto - SEM previsibilidade
let produto: object = {
    name: "judenilson",
    cidade: "Campina Grande",
    idade: 40,
};

//Objeto Tipado - COM previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.90,
    unidades: 5,
}

//Arrays
let dados: string[] = ["Judenilson", "Felipe", "Bruna"];
let dados2: Array<string> = ["Judenilson", "Felipe", "Bruna"];

let infos: (string | number)[] = ["Judenilson", 1982];

//Tuplas - Tem q respeitar a ordem das informações
let boleto: [string, number, number] = ["agua conta", 122, 134.45];

//Datas
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());



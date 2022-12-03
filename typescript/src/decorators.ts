//decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario { }

@ExibirNome
class Quincas { }

function apiVersion(version: string){
    return(target: any) => {
        Object.assign(target.prototype, {__version:version});
    };
}

function miniLenght(lenght: number) {
    return(target:any, key:string) => {
        let _value = target[key];

        const getter = () => "[PLAY]" + _value;
        const setter = (value: string) => {
            if (value.length < lenght){
                throw new Error(`Tamanho menor do que ${lenght}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, { 
            get: getter,
            set: setter,
        });
    };
}


@apiVersion("1.10")
class Api{
    @miniLenght(10)
    name:string;

    constructor(name:string){
        this.name = name;
    }
}

const api = new Api("Produtos asdasdas");

console.log(api.name);
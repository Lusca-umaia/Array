//Pegando os Valores do Formulário
const Marca = document.getElementById('marca')
const Modelo = document.getElementById('modelo')
const Valor = document.getElementById('valor')
const Cor = document.getElementById('cor')
function trueAndFalse(auto) {
    if (document.getElementById('true').checked) {
        return auto = "true"
    }

    else if (document.getElementById('false').checked) {
        return auto = "false"
    }
}

// -- 

const Capturar = document.getElementById('capturar')

//Inicialização  

if (localStorage.getItem('controle') != 0) {
    let init = 1
    localStorage.setItem('Init', init)
}

// --

// Inicialização com atribuições de valores - o usuário preenche os campos e enviou

else {
    console.log(JSON.parse(localStorage.getItem('array')))
}

// --

// Função para retornar os valores do array para a manipulação
function LocalArray(array) {

    if (localStorage.getItem('Init') == 1) {
        return array = []
    }

    else {
        return array = JSON.parse(localStorage.getItem('array'))
    }
}

// --

//Manipulação do Array

capturar.addEventListener('click', function (e) {
    if (Marca.value != "" && Modelo.value != "" && Valor.value != "" && Cor.value != "" && trueAndFalse() != undefined) {
        let array = LocalArray()

        //Controle de inicialização 

        let controle = 0
        localStorage.setItem('controle', controle)
        localStorage.setItem('Init', controle)

        // --

        let obj = {
            'marca': Marca.value,
            'modelo': Modelo.value,
            'valor': Valor.value,
            'cor': Cor.value,
            'auto': trueAndFalse()
        }

        array.push(obj)

        localStorage.setItem('array', JSON.stringify(array))
    }

    //Alerta para quando o usuário não preenche todos os valores

    else {
        alert('Preencha todos os campos')
    }

    // -- 
})

// --

// Condicional para execução das funções

if (localStorage.getItem('Init') == 0) {
    function marcaCarro(marcaCarro) {
        let arrayMarca = JSON.parse(localStorage.getItem('array'))
        console.log(arrayMarca.filter(x => x.marca == marcaCarro))
    }

    function Marcas(array) {
        let arrayMarca = array
        let bruto = []
        arrayMarca.forEach(element => {
            bruto.push(element.marca)
        });

        let ValoresSemRepeticao = [...new Set(bruto)];

        console.log(ValoresSemRepeticao)
    }

    function BuscaObjetos(array, propriedades) {
        let ArrayFinal = []

        array.forEach(element => {
            let obj = {}

            for (c = 0; c < propriedades.length; c++) {
                obj[propriedades[c]] = element[propriedades[c]];
            }

            ArrayFinal.push(obj)

        });

        console.log(ArrayFinal)

    }

    //Função que procura Objetos a partir da marca do Carro

    marcaCarro("carroQualquer")

    // -- 

    //Função que retorna todos os valores presentes na propriedade "Marcas" - sem repetição

    Marcas(JSON.parse(localStorage.getItem('array')))

    // --

    //Função que retorna objetos do array com apenas as propriedades escolhidas

    BuscaObjetos(JSON.parse(localStorage.getItem('array')), ['modelo', 'marca', 'valor'])

    // --
}

 // -- 
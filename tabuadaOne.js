function tabuada(num) {
    let array = []
    let arrayTwo = []

    for (i = 1; i < 11; i++) {
        let calculo = num * i
        array.push(calculo)
    }

    for (i = 1; i < 11; i++) {
        let calculoTwo = (num + 1) * i
        arrayTwo.push(calculoTwo)

        calculoTwo = (num + 2) * i
        arrayTwo.push(calculoTwo)
    }

    return console.log(array, arrayTwo)
}

tabuada(5)

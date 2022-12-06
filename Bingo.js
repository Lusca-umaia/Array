function bingo(array) {
    let b = array.some(x => x == 2)
    let i = array.some(x => x == 9)
    let n = array.some(x => x == 14)
    let g = array.some(x => x == 7)
    let o = array.some(x => x == 15)

    if (b == true && i == true && n == true && g == true && o == true) {
        return console.log("Ganhou")
    }
    else {
        console.log("Perdeu")
    }
}

bingo([2, 9, 14, 7]) 
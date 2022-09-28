let noaleatorio = 0
basic.forever(function () {
    noaleatorio = randint(0, 10)
    basic.showNumber(noaleatorio)
    for (let index = 0; index <= noaleatorio; index++) {
        basic.showNumber(index)
        basic.pause(100)
        for (let index2 = 0; index2 < index; index2++) {
            music.playTone(494, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
    }
    basic.showString("¡A BUSCAR!")
    music.playMelody("E G B E A B F C ", 120)
})

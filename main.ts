input.onButtonPressed(Button.A, function () {
    for (let Contador = 0; Contador <= 10; Contador++) {
        basic.showNumber(Contador)
    }
    Cara()
})
function Cara () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.AB, function () {
    Contador = 1
    while (Contador <= 10) {
        basic.showNumber(Contador)
        Contador += 2
    }
})
input.onButtonPressed(Button.B, function () {
    Contador = 2
    while (Contador <= 10) {
        basic.showNumber(Contador)
        Contador += 2
    }
})
let Contador = 0
let N = randint(5, 10)
basic.showNumber(N)
for (let Contador = 0; Contador <= N; Contador++) {
    basic.showNumber(Contador)
    for (let index = 0; index < Contador; index++) {
        music.playTone(880, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}

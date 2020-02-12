let weather_prediction = 0
let set_weather_prediction = game.askForString("what is your weather prediction?")
game.splash("it is going to" + weather_prediction)
let weather_dude = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
5 5 5 5 5 e e e e e e 5 5 5 5 5 
. . . . . e f e f e e . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . e f e e f e . . . . . 
. . . . . e e f f f e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let set_weather_effects = Math.randomRange(0, 6)
if (0 == 0) {
    effects.confetti.startScreenEffect()
    weather_dude.say("CONFETTI")
} else if (false) {
    weather_dude.say("HEARTS")
} else if (false) {
    weather_dude.say("SMILES")
} else if (false) {
    weather_dude.say("BLIZZARD")
} else if (false) {
    weather_dude.say("BUBBLES")
} else {
    weather_dude.say("CLOUDS")
}

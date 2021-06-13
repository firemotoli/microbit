input.onButtonPressed(Button.A, function () {
    step = 0
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    step += 1
    basic.showNumber(step)
})
let step = 0
step = 0
basic.forever(function () {
	
})

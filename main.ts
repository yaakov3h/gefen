input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        . # # # .
        . . . # .
        . . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . . . # .
        . # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . # . # .
        . # . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # . . .
        # . . . .
        # # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        . # # # .
        . . . # .
        . . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # .
        . . . # .
        # # . # .
        # . . # .
        # # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # # . .
        # . # . #
        . . # . .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # # . #
        . . # # .
        . . # . .
        # # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . . # # .
        # . # . #
        . . # . .
        . # . # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # # . .
        # . # . #
        . . # . .
        . # . # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
basic.forever(function () {
	
})

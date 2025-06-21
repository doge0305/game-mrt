/**
 * text
 */
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 40, function (status) {
    i.setColor(5, 12, 2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (scene2 == 2) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        sprites.destroy(sprite)
        pause(1000)
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    }
    if (scene2 == 3) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . b b b b b b . . . . . 
            . . . b b a a a a a a b b . . . 
            . . b b a a a a a a a a b b . . 
            . b b a d a a a a a a a a b b . 
            . b a d a a a a a 1 1 1 a a b . 
            b a d d a a a a a 1 1 1 a a a b 
            b a d a a a a a a 1 1 1 a a a b 
            b a b a a a a a a a a a 1 a a b 
            b c b d a a a a a a a a a a a b 
            b c b b a a a a a a a a a d a b 
            b c d b b a a a a a a a d d a b 
            . b c b b b d a a a a d d c b . 
            . b d c b b b b b b b d c b b . 
            . . b d c d b b b b c c b b . . 
            . . . b b c c c c c c b b . . . 
            . . . . . b b b b b b . . . . . 
            `,img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . b a 1 b . . . . . 
            . . b b . . . b a a b . . . . . 
            . b a 1 b . . b b b . . b b b . 
            . b b a b . b b b b . b a a 1 b 
            . b b b b b a a 1 1 b b b a a b 
            . . . . b a d a 1 1 b b b b b . 
            . . . . b c b a a a b . . . . . 
            . . b b b c b b d a b . . . . . 
            . b c 1 b b c c a b b b b . . . 
            . b c c b b b b b b b a a b . . 
            . b b b b b b b . b a 1 1 a b . 
            . . . b c c 1 b . b a 1 1 a b . 
            . . . b c c c b . b b a a b b . 
            . . . . b b b . . . b b b b . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b b . . . . . 
            . . . . . . . . b a 1 b . . . . 
            . . . b b b b b b a a b . . . . 
            . . b a a d a a 1 1 d b b b b . 
            . . . b d a a a 1 1 a a d a 1 b 
            . . b a d a a a a a a a d a a b 
            . . b a b b a a a a a d b b b . 
            . b c d a b b b d d b b b b . . 
            b c c c b b b b b b b a a 1 b . 
            b c c b . . . . . . b b a a b . 
            . b b . . . . . . . . b b b . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . c c c . . . 
            . . . c c . . . . . c c c . . . 
            . . . c c . . c c . c c c . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c . . . . 
            . . . . c . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        sprites.destroy(sprite)
        pause(1000)
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    }
})
function tutorialopening () {
    camera = 0
    i = statusbars.create(40, 5, StatusBarKind.Energy)
    destoryer = sprites.create(assets.image`gg`, SpriteKind.Player)
    destoryer.setStayInScreen(true)
    destoryer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    info.setScore(0)
    i.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    i.setColor(5, 12, 2)
    i.setLabel("electricity", 15)
    i.setPosition(80, 15)
    scene.setBackgroundImage(img`
        ........................................................................................................................ffffffffffffffffffffffffffffffffffffffff
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ...............................................................................................................................................................f
        ....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f
        ....................fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf...................
        ....................fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf...................
        ....................fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf...................
        ....................fcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff666666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff666666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff666666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffccccccccccccccccccccccccccccccccccccccff6666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffccccccccccccccccccccccccccccccccccccccff6666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffccccffffffffffffffffffffffffffffffccccff6666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffccccffffffffffffffffffffffffffffffccccff6666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffccccffccfbbbbbbbbbbfccccfccfccfccfccccff6666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666fffccccffccfbbbbbbfbbbffcfffccccffcffccccff6666666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666666ffccccfffbbbbfbbfbbffffffffffffffcffccccff66666666666666666fcccf...................
        ....................fcccf6666666666666666666666666666666666666666666666666666ffccccfffbbbffbfffbfcccccffcccccfcffccccff66666666666666666fcccf...................
        ....................fcccf6666666666666666666ffff66666666666666666666666666666ffccccfffbbbbfbbbbbfccfccccccfccfcffccccff66666666666666666fcccf...................
        ....................fcccf666666666666666666f2222f6666666666666666666666666666ffccccfffbbbbfbbbbbfcffffccffffcfcffccccff66666666666666666fcccf...................
        ....................fcccf66666666666666666f222222f666666666666666666666666666ffccccfffbbfffffbbbfccfccccccfccfcffccccff66666666666666666fcccf...................
        ....................fcccffffffffffffffffff22111122fffffffffffffffffffffffffffffccccfffbbbbbbbbbbfccccccccccccfcffccccffffffffffffffffffffcccf...................
        ....................fcccccccccccccccccccf221f11f122fcccccccccccccccccccccccccccffccccffffffffffffffffffffffffffffccccccffcccccccccccccccccccf...................
        ....................fcccccccccccccccccccf2211111122fcccccccccccccccccccccccccccffccccffffffffffffffffffffffffffffccccccffcccccccccccccccccccf...................
        ....................fcccccccccccccccccccf2221111222fcccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccf...................
        f...................fffffffffffffffffffff2222112222ffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffffffffff...................
        f....................fffcccccccccccccccccf22211222fccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffccccccccccccccccfff....................
        f....................fffffccccccccccccccccf222222fcccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffff....................
        f....................ffcffffccccccccccccccbf2222fbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccfffccff....................
        f....................ffcccffffccccccccccccbbffffbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccfffccccff....................
        f....................ffcccccffffccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccffffccccccff....................
        f....................ffcccccccffffccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccffffccccccccff....................
        f....................ffcccccccccffffcccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccffffccccccccccff....................
        f....................ffcccccccccccffffccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccffffccccccccccccff....................
        f....................ffcccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccff....................
        f....................ffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
        ffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff
        `)
    story.showPlayerChoices("see tutorial@story", "do not see tutorial")
    if (story.checkLastAnswer("see tutorial@story")) {
        story.setSoundEnabled(true)
        story.printCharacterText("you are a robot that the united earth government sent.", "united earth government")
        story.printCharacterText("your mission is to save earth ", "united earth government")
        story.printCharacterText("bob will tell you how RX-17", "united earth government")
        story.printCharacterText("hi im bob RX-17.", "bob")
        story.printCharacterText("i'l help you save the earth", "bob")
        story.printCharacterText("first. . .", "bob")
        story.printCharacterText("controls.", "bob")
        story.printCharacterText("press button \"B\" to change the camera that you are looking at", "bob")
        story.printCharacterText("in camera 1", "bob")
        story.printCharacterText("you can change the co2 to air", "bob")
        story.printCharacterText("and in camera 2", "bob")
        story.printCharacterText("you have to destoy the meteorites before they destroy the earth", "bob")
        story.printCharacterText("and you have to recharge the energy in the base so you can survive", "bob")
        story.printCharacterText("the yellow bar is the electricity bar.", "bob")
        story.printCharacterText("and the green bar is the earth HP bar.", "bob")
        story.printCharacterText("if one of this bar is at 0. . .", "bob")
        story.printCharacterText("game over. . .", "bob")
        story.printCharacterText("good luck model 045632...", "bob")
    }
}
function meteoriteco2 () {
    if (scene2 == 2) {
        meteorite = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Enemy)
        meteorite.setPosition(randint(10, 150), 0)
        meteorite.setVelocity(0, randint(50, 150))
    }
    if (scene2 == 3) {
        co_2 = sprites.create(img`
            . . . . . b b b b b b . . . . . 
            . . . b b a a a a a a b b . . . 
            . . b b a a a a a a a a b b . . 
            . b b a d a a a a a a a a b b . 
            . b a d a a a a a 1 1 1 a a b . 
            b a d d f f a a f 1 1 f f f a b 
            b a d f a a a f a f 1 1 a f a b 
            b a b f a a a f a f a f f f a b 
            b c b f a a a f a f a f a a a b 
            b c b b f f a a f a a f f f a b 
            b c d b b a a a a a a a d d a b 
            . b c b b b d a a a a d d c b . 
            . b d c b b b b b b b d c b b . 
            . . b d c d b b b b c c b b . . 
            . . . b b c c c c c c b b . . . 
            . . . . . b b b b b b . . . . . 
            `, SpriteKind.Enemy)
        co_2.setPosition(randint(10, 150), 0)
        co_2.setVelocity(0, randint(50, 150))
    }
}
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 40, function (status2) {
    i.setColor(2, 12, 5)
})
let projectile: Sprite = null
let ending = 0
let co_2: Sprite = null
let meteorite: Sprite = null
let destoryer: Sprite = null
let camera = 0
let scene2 = 0
let i: StatusBarSprite = null
game.setGameOverEffect(true, effects.confetti)
tutorialopening()
timer.after(52000, function () {
    game.gameOver(true)
})
game.onUpdateInterval(1000, function () {
    meteoriteco2()
})
forever(function () {
    if (scene2 == 0) {
        if (controller.right.isPressed()) {
            scene2 = 1
        }
    } else if (scene2 == 1) {
        if (controller.left.isPressed()) {
            scene2 = 0
        }
        if (controller.A.isPressed()) {
            i.value += 1
        }
    }
    if (controller.B.isPressed()) {
        if (scene2 == 0) {
            scene2 = 2
            pause(500)
        } else if (scene2 == 2) {
            scene2 = 3
            pause(500)
        } else if (scene2 == 3) {
            scene2 = 0
            pause(500)
        }
    }
})
forever(function () {
    if (i.value <= 0 && ending == 0) {
        color.startFade(color.originalPalette, color.Black, 2000)
        pause(2000)
        color.setPalette(
        color.originalPalette
        )
        game.splash("you ran out of electricity. . .")
        game.setGameOverMessage(false, "GAME OVER")
        game.setGameOverEffect(false, effects.dissolve)
        game.setGameOverScoringType(game.ScoringType.HighScore)
        ending = 1
        game.gameOver(false)
    }
})
forever(function () {
    if (scene2 != 1) {
        i.value += randint(0, -6)
        pause(randint(300, 600))
    }
})
forever(function () {
	
})
forever(function () {
    if (scene2 == 1) {
        scene.setBackgroundImage(assets.image`air ddd`)
        destoryer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        controller.moveSprite(destoryer, 0, 0)
        sprites.destroy(co_2)
        sprites.destroy(meteorite)
    } else if (scene2 == 0) {
        scene.setBackgroundImage(img`
            ........................................................................................................................ffffffffffffffffffffffffffffffffffffffff
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ...............................................................................................................................................................f
            ....................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..................f
            ....................fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf...................
            ....................fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf...................
            ....................fcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf...................
            ....................fcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff666666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff666666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffff666666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffccccccccccccccccccccccccccccccccccccccff6666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffccccccccccccccccccccccccccccccccccccccff6666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffccccffffffffffffffffffffffffffffffccccff6666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffccccffffffffffffffffffffffffffffffccccff6666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffccccffccfbbbbbbbbbbfccccfccfccfccfccccff6666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666fffccccffccfbbbbbbfbbbffcfffccccffcffccccff6666666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666666ffccccfffbbbbfbbfbbffffffffffffffcffccccff66666666666666666fcccf...................
            ....................fcccf6666666666666666666666666666666666666666666666666666ffccccfffbbbffbfffbfcccccffcccccfcffccccff66666666666666666fcccf...................
            ....................fcccf6666666666666666666ffff66666666666666666666666666666ffccccfffbbbbfbbbbbfccfccccccfccfcffccccff66666666666666666fcccf...................
            ....................fcccf666666666666666666f2222f6666666666666666666666666666ffccccfffbbbbfbbbbbfcffffccffffcfcffccccff66666666666666666fcccf...................
            ....................fcccf66666666666666666f222222f666666666666666666666666666ffccccfffbbfffffbbbfccfccccccfccfcffccccff66666666666666666fcccf...................
            ....................fcccffffffffffffffffff22111122fffffffffffffffffffffffffffffccccfffbbbbbbbbbbfccccccccccccfcffccccffffffffffffffffffffcccf...................
            ....................fcccccccccccccccccccf221f11f122fcccccccccccccccccccccccccccffccccffffffffffffffffffffffffffffccccccffcccccccccccccccccccf...................
            ....................fcccccccccccccccccccf2211111122fcccccccccccccccccccccccccccffccccffffffffffffffffffffffffffffccccccffcccccccccccccccccccf...................
            ....................fcccccccccccccccccccf2221111222fcccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccf...................
            f...................fffffffffffffffffffff2222112222ffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffffffffffffffffff...................
            f....................fffcccccccccccccccccf22211222fccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffccccccccccccccccfff....................
            f....................fffffccccccccccccccccf222222fcccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffff....................
            f....................ffcffffccccccccccccccbf2222fbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccfffccff....................
            f....................ffcccffffccccccccccccbbffffbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccfffccccff....................
            f....................ffcccccffffccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccffffccccccff....................
            f....................ffcccccccffffccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccffffccccccccff....................
            f....................ffcccccccccffffcccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccffffccccccccccff....................
            f....................ffcccccccccccffffccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccffffccccccccccccff....................
            f....................ffcccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccff....................
            f....................ffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            f....................ffcccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccff....................
            ffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffff
            `)
        destoryer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        controller.moveSprite(destoryer, 0, 0)
        sprites.destroy(co_2)
        sprites.destroy(meteorite)
    } else if (scene2 == 2) {
        scene.setBackgroundImage(assets.image`space`)
        destoryer.setImage(assets.image`gg`)
        sprites.destroy(co_2)
        controller.moveSprite(destoryer, 150, 150)
    } else if (scene2 == 3) {
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
            9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
            9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
            9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
            9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
            9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
            9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
            9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
            9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
            9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
            9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
            9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
            9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
            9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
            9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
            9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
            9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
            9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
            1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
            1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
            1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
            11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
            11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
            11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
            1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
            111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
            11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
            11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
            11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
            11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
            d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
            dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
            dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
            dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
            dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
            ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
            ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
            ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
            ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
            dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
            dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
            dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
            dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
            dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
            dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
            dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
            dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
            dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
            dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
            bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
            bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
            bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        controller.moveSprite(destoryer, 100, 100)
        sprites.destroy(meteorite)
        destoryer.setImage(assets.image`gg`)
    }
})
forever(function () {
    if (scene2 == 2) {
        if (controller.A.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`missile`, destoryer, 0, -200)
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
            pause(300)
        }
    }
    if (scene2 == 3) {
        if (controller.A.isPressed()) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . b b b b b b . . . . . 
                . . . b b 9 9 9 9 9 9 b b . . . 
                . . b b 9 9 9 9 9 9 9 9 b b . . 
                . b b 9 d 9 9 9 9 9 9 9 9 b b . 
                . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
                b 9 d d f 9 9 f f f 1 f f f 9 b 
                b 9 d f 9 f 9 9 f 1 1 f 9 f 9 b 
                b 9 3 f f f 9 9 f 9 9 f f 9 9 b 
                b 5 3 f 9 f 9 f f f 9 f 9 f 9 b 
                b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
                b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
                . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
                . b d 5 3 3 3 3 3 3 3 d 5 b b . 
                . . b d 5 d 3 3 3 3 5 5 b b . . 
                . . . b b 5 5 5 5 5 5 b b . . . 
                . . . . . b b b b b b . . . . . 
                `, destoryer, 0, -200)
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
            pause(300)
        }
    }
})

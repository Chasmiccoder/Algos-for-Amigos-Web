const anime = require('animejs');

var playPause = anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 500}, // duration is in milliseconds
        {value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    // backgroundColor: '#505050', // can use normal css stuff here as well
    opacity: '0.3',
    delay: function(element, iteration, time) {
        return iteration * 1000;
    },
    autoplay: false,
    loop: true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;

document.querySelector('#swapBox').onclick = swap;

// prints the coordinates of the red box
function getRedBoxPos() {
    var rect = document.getElementById('redBox').getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
}

function swap() {
    var rect1 = document.getElementById('redBox').getBoundingClientRect();
    var rect2 = document.getElementById('blueBox').getBoundingClientRect();
    
    console.log("RB:", rect1.top, rect1.right, rect1.bottom, rect1.left);
    console.log("BB:", rect2.top, rect2.right, rect2.bottom, rect2.left);

    //Output
    //RB: 104.66667175292969 498 204.6666717529297 398
    //BB: 104.66667175292969 610 204.6666717529297 510
    
    let x = rect2.right - rect1.right;

    var swapAnim1 = anime({
        targets: '#redBox',
        translateY: [
            {value: 100, duration: 1000}, // duration is in milliseconds
            {value: 0, duration: 1000}
        ],
        translateX: [
            {value: x, duration: 1000}
        ],
    });

    var swapAnim2 = anime({
        targets: '#blueBox',
        translateY: [
            {value: 100, duration: 1000}, // duration is in milliseconds
            {value: 0, duration: 1000}
        ],
        translateX: [
            {value: -x, duration: 500}
        ],
    });

    // swapAnim1.play();
    // swapAnim2.play();
}



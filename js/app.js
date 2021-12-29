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

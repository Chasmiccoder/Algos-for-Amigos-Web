import 'regenerator-runtime/runtime';
import { main_array } from './app';
const anime = require('animejs');

// swaps ith and jth blocks
export function swap(i = 0, j = 1) {
    let e1 = 'mainArrayElement_' + i.toString();
    let e2 = 'mainArrayElement_' + j.toString();

    let rect1 = document.getElementById(e1).getBoundingClientRect();
    let rect2 = document.getElementById(e2).getBoundingClientRect();

    // when j's x value is lesser than i's
    if(rect2.right - rect1.right < 0) {
        let tmp = i;
        i = j;
        j = tmp;
        
        let tmp2 = e1;
        e1 = e2;
        e2 = tmp2;

        let tmp3 = rect1;
        rect1 = rect2;
        rect2 = tmp3;
    }

    let distance = rect2.right - rect1.right;

    swapAnim(e1, e2, distance).then(() => {
        let tmp = main_array[i];
        main_array[i] = main_array[j];
        main_array[j] = tmp;
        updateArray();
        console.log("NOw", main_array);
    });
}

async function swapAnim(e1, e2, distance) {
    let a1 = anime({
        targets: '#' + e1,
        translateY: [
            {value: 100, duration: 1000}, // duration is in milliseconds
            {value: 0, duration: 1000}
        ],
        translateX: [
            {value: distance, duration: 1000}
        ],
        easing: 'easeInOutExpo'
    }).finished;

    let a2 = anime({
        targets: '#' + e2,
        translateY: [
            {value: 100, duration: 1000},
            {value: 0, duration: 1000}
        ],
        translateX: [
            {value: -distance, duration: 1000}
        ],
        easing: 'easeInOutExpo'
    }).finished;

    await Promise.all([a1,a2]);         
}

const anime = require('animejs');
var main_array = new Array();

document.getElementById('insertButton').onclick = insertElement;

// inserts a number into the array
function insertElement() {
    let num = document.getElementById('insertInput').value;
    document.getElementById('insertInput').value = "";  // clear the old value

    if(isNaN(parseInt(num))) {
        console.log("Input element is not a number!");
        return;
    }

    if(main_array.length == 5) {
        console.log("temporary array size limitation");
    } else {
        main_array.push(parseInt(num));
    }

    updateArray();
    
    // console.log(main_array);
}

// updates the array frontend
function updateArray() {
    let mainArray = document.getElementById('mainArray');

    // clear the array
    while(mainArray.firstChild) {
        mainArray.removeChild(mainArray.lastChild);
    }

    for(let i = 0; i < main_array.length; i++) {
    
        let array_element = document.createElement('div');
        array_element.setAttribute('id', 'mainArrayElement_' + i.toString());
        array_element.setAttribute('style', 'background-color: #CBC3E3; height: 50px; width: 50px; position: relative; margin: 5px; display: inline-block; text-align: center; vertical-align: middle; line-height: 50px;');
        array_element.innerHTML = main_array[i].toString();
        mainArray.appendChild(array_element);
        
    }

    console.log(main_array);

}

document.querySelector('#sortButton').onclick = swap;

// swaps ith and jth blocks
// later, use i and j as arguments for this func
function swap() {
    let i = 0;
    let j = 1;

    let e1 = 'mainArrayElement_' + i.toString();
    let e2 = 'mainArrayElement_' + j.toString()

    let rect1 = document.getElementById(e1).getBoundingClientRect();
    let rect2 = document.getElementById(e2).getBoundingClientRect();

    // quick fix for when j's x value is lesser than i's
    if(rect2.right - rect1.right < 0) {
        let tmp = i;
        i = j;
        j = tmp;
        
        let tmp2 = e2;
        e2 = e1;
        e1 = tmp2;

        let tmp3 = rect1;
        rect1 = rect2;
        rect2 = tmp3;
    }

    
    // rough implementation of changing the array after the animation has happened
    // FIXME
    doAnim(function() {
        doUpdate();
    });

    function doAnim(e1, e2, distance, callback) {
        let distance = rect2.right - rect1.right;
        moveElement(e1, distance);
        moveElement(e2, -distance);
        callback();
    }

    function doUpdate() {
        // let tmp = main_array[i];
        // main_array[i] = main_array[j];
        // main_array[j] = tmp;
        // updateArray();
    }
}

// moves the element along the x axis by the given distance
function moveElement(elementId, d) {

    console.log(elementId,d);

    let moveAnimation = anime({
        targets: '#' + elementId,
        translateY: [
            {value: 100, duration: 1000}, // duration is in milliseconds
            {value: 0, duration: 1000}
        ],
        translateX: [
            {value: d, duration: 1000}
        ],
        easing: 'easeInOutExpo'
    });
}



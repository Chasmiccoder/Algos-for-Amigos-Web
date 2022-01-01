import { bubbleSort } from './sorting';
export var main_array = new Array();

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

export const updateArray = async () => {
    return new Promise(resolve => {
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
    });
    
}

// updates the array frontend
export function updateArray2() {
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

// document.querySelector('#sortButton').onclick = swap;
document.querySelector('#sortButton').onclick = bubbleSort;


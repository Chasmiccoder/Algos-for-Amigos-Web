// use class
import { main_array } from './app.js';
import { swap } from './animations.js';

export function bubbleSort() {
    
    // console.log("MA:",main_array);
    // swap(0,1);
    // return 0;

    let n = main_array.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(main_array[j] > main_array[j+1]) {
                swap(j,j+1);
                // need to take care of async here
            }
        }
    }

    console.log("Array has been sorted!");
    console.log(main_array);
}

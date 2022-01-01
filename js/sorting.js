// use class
import { main_array, updateArray } from './app.js';
import { swap } from './animations.js';

export async function bubbleSort() {
    
    // console.log("MA:",main_array);
    // swap(0,1);
    // return 0;
    // introduce the concept of duration
    await swap(0,1);
    await updateArray();
    await swap(1,2);
    await updateArray();
    await swap(0,1);
    await updateArray();

    return 0;

    let n = main_array.length;
    console.log(n);

    for(let i = 0; i < n-1; i++) {
        const processing = async _ => {
        // for(let i = 0; i < n-1; i++) {
            console.log(i);
            for(let j = 0; j < n - i - 1; j++) {
                if(main_array[j] > main_array[j+1]) {
                    // setTimeout(() => {
                    //     swap(j,j+1);
                    // }, 1000);


                    // swap(j,j+1).then(() => {
                    // });
                    
                    console.log("Reaced");
                    // const fruit = await swap(j,j+1);
                    await swap(j,j+1);
                    // swap(j,j+1).then()
                    await updateArray();
                    // swap(j,j+1);

                    // need to take care of async here
                }
            }
        }
        processing();
        // console.log("Array has been sorted!");
        // console.log(main_array);

    }
    // processing();
    console.log("Array has been sorted!");
    console.log(main_array);
}
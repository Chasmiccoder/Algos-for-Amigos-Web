/* 
Short script to make git easy

To use -
node gitez.js IFINIRW

Or, create an npm script using package.json and run it
npm run gitez -- my commit message

*/

const{exec} = require('child_process');

let args = process.argv; 
// collects the command along with the arguments passed. For example,
// node gitez.js commit message goes here

args.splice(0,2); // remove node 
let str = args.join(' ');

console.log(str);
exec("git add .", callback_add);  

// creating separate callback functions for add, commit and push since exec is async
function callback_add(err, stdout, stdin) {
    if(err) {
        console.log("Error during gitez 'git add': ", err);
        return;
    } else {
        exec(`git commit -m "${str}"`, callback_commit);   
    }
}

function callback_commit(err, stdout, stdin) {
    if(err) {
        console.log("Error during gitez 'git commit': ", err);
        return;
    } else {
        exec("git push", callback_push); // pushes changes to active branch
    }
}

function callback_push(err, stdout, stdin) {
    if(err) {
        console.log("Error during gitez 'git push': ", err);
        return;
    } else {
        console.log("gitez complete!");
    }
}

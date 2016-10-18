'use strict';
process.stdin.setEncoding('utf8');

const readline = require('readline'),
      rl = readline.createInterface({
        input: process.stdin,
        terminal: false
      });

let input = [];

const maximumPairWiseProduct = (sequence) => {
    let aMax = -1,
        aIndex = -1,
        bMax = -1,
        bIndex = -1;

    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] > aMax){
            aMax = sequence[i];
            aIndex = i;
        }
    }
    for(let j = 0; j < sequence.length; j++){
        if(sequence[j] > bMax && j !== aIndex){
            bMax = sequence[j];
            bIndex = j;
        }
    }
    
    return aMax*bMax;
};


rl.prompt();
rl.on('line', (cmd) => {
    input.push(cmd);

    if(input.length === 2){
        let integer = parseInt(input[0]);
        let sequence = input[1].trim().split(' ').map(i => parseInt(i));
        console.log(maximumPairWiseProduct(sequence));
        process.exit(0);
    }
});

module.exports = maximumPairWiseProduct;

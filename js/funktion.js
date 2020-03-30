"use strict";

let procent = document.querySelector('.loader');
let button = document.getElementById("clickme")

let count = 0;
//nr1
button.onclick = function() {
    count += 1;
    button.innerHTML = " Click on: " + count;
    procent.innerHTML =  count + "% ";
    console.log('btn');
};
//nr2
/*button.addEventListener('click', function() {
        count += 1;
        button.innerHTML = " Click on: " + count;
        procent.innerHTML =  count + "% ";
        console.log('btn');
});*/
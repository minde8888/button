"use strict";


/*let procent = document.querySelector('.loader');*/
let button = document.getElementById("clickme")

count = 0;

button.onclick = function() {
    count += 1;
    button.innerHTML = " Click on: " + count;
};
procent.addEventListener('click', funktion() {
    count += 1;
    procent.innerHTML =  count + "% ";
});





  /*  const readMores = document.querySelectorAll('div > .button');

    for ( let i=0; i<readMores.length; i++ ) {
        const readMore = readMores[i];
        readMore.addEventListener('click', readMoreClick );
    }

    function readMoreClick( event ) {
        const p = event.target.closest('p');
        const fullText = p.dataset.fulltext;
        return p.innerText = fullText;
    }*/
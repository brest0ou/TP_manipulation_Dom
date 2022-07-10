"use strict"


// quand l'utilisateur tape un mot dans " votre texte ici"
// il doit se reproduire la même choses dans " La copie ici"

// 1 - récuperer les inputs du html

let inputText = document.querySelector('#text');

let inputCopie = document.querySelector('#copie');

console.log(inputText);

console.log(inputCopie);


// 2 - on va  dire que la copie est égale au texte du haut

inputText.addEventListener('input',sameValue)


function sameValue()
{
     inputCopie.value = inputText.value
  
    
}
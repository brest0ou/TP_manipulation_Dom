"use strict"

let nombreSaisi = document.querySelector('#nombre-saisie');
let nombre = document.querySelector('#nombre');
let carre = document.querySelector('#carre');
let cube = document.querySelector('#cube');

console.log(nombre);
nombreSaisi.addEventListener('input',valeurCubeCarre);

function valeurCubeCarre()
{
    nombre.value = nombreSaisi.value;

    carre.value = nombre.value * 10;

    cube.value = carre.value * 10;
};
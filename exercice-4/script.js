// objectif faire bouger mon carrer dans la page

// quand je clique sur le bouton le carrer qui est bleu devient presque transparant 
// et c'est le prochain qui devien visible

let button = document.querySelector('#btn')

let carrer = document.querySelectorAll('p')





button.addEventListener('click',bougeLeCarre)

    

//je vais lui ajouter un evénement click
// faire des conditions pour chaque click

function bougeLeCarre()
{
    console.log('click');
    
 
    if (carrer[0].classList.contains('opacity-1')){

        carrer[0].classList.remove('opacity-1')
        
        carrer[2].classList.add('opacity-1')
        
    }
    else if (carrer[2].classList.contains('opacity-1')){

        carrer[2].classList.remove('opacity-1')
        
        carrer[3].classList.add('opacity-1')
        
    }
    else if (carrer[3].classList.contains('opacity-1')){

        carrer[3].classList.remove('opacity-1')
        
        carrer[1].classList.add('opacity-1')
        
    }
    else if (carrer[3].classList.contains('opacity-1')){

        carrer[3].classList.remove('opacity-1')
        
        carrer[1].classList.add('opacity-1')
        
    }
    else if (carrer[1].classList.contains('opacity-1')){

        carrer[1].classList.remove('opacity-1')
        
        carrer[0].classList.add('opacity-1')
        
    }
}
    
    
    

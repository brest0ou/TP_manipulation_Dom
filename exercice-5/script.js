"use strict"


let grid = document.querySelectorAll('p')


grid.forEach(grille =>{
    
    console.log(grille)
    grille.addEventListener('wheel',scrollRightLeft)
})


function scrollRightLeft()
{
    console.log("je scrollLeft")
    const delta =  Math.sign(event.deltaY);
    
    if(delta == 1)
    {
        if(grid[0].classList.contains('opacity-1'))
        {
            grid[0].classList.remove('opacity-1')
            grid[1].classList.add('opacity-1')
        }
        else if(grid[1].classList.contains('opacity-1'))
        {
            grid[1].classList.remove('opacity-1')
            grid[2].classList.add('opacity-1')
        }
        else if(grid[2].classList.contains('opacity-1'))
        {
            grid[2].classList.remove('opacity-1')
            grid[3].classList.add('opacity-1')
        }
        else if(grid[3].classList.contains('opacity-1'))
        {
            grid[3].classList.remove('opacity-1')
            grid[4].classList.add('opacity-1')
        }
        else if(grid[4].classList.contains('opacity-1'))
        {
            grid[4].classList.remove('opacity-1')
            grid[5].classList.add('opacity-1')
        }
    }
    if(delta == -1)
    {
        if(grid[5].classList.contains('opacity-1'))
        {
            grid[5].classList.remove('opacity-1')
            grid[4].classList.add('opacity-1')
        }
        else if(grid[4].classList.contains('opacity-1'))
        {
            grid[4].classList.remove('opacity-1')
            grid[3].classList.add('opacity-1')
        }
        else if(grid[3].classList.contains('opacity-1'))
        {
            grid[3].classList.remove('opacity-1')
            grid[2].classList.add('opacity-1')
        }
        else if(grid[2].classList.contains('opacity-1'))
        {
            grid[2].classList.remove('opacity-1')
            grid[1].classList.add('opacity-1')
        }
        else if(grid[1].classList.contains('opacity-1'))
        {
            grid[1].classList.remove('opacity-1')
            grid[0].classList.add('opacity-1')
        }
    }

}

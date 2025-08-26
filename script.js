const container = document.querySelector('.container');
const button = document.querySelector('button');
button.textContent = "Change Grid Size";

function makeGrid(size) {
    container.innerHTML = '';
    
    for(let i = 0; i<size * size; i++){
    
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.flex = `0 0 calc(100%/${size})`;    
        div.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random()*255);
            const g = Math.floor(Math.random()*255);
            const b = Math.floor(Math.random()*255);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            
        });
        container.appendChild(div);
    }
   
}
makeGrid(16);

button.addEventListener('click', () => {
    
    let size = parseInt(prompt('Enter the number of aquares per side (max 100):',));
    if(size > 100) size = 100;
    if( size && size > 0) {
        makeGrid(size);
    }
});

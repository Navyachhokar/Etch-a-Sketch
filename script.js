const container = document.querySelector('.container');
const button = document.querySelector('button');
const resetButton = document.querySelector('.reset');

function makeGrid(size) {
    container.innerHTML = '';
    
    for(let i = 0; i<size * size; i++){
    
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.flex = `0 0 calc(100%/${size})`; 

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        div.dataset.opacity = 0;
          
        div.addEventListener('mouseenter', () => {
            let currentOpacity = parseFloat(div.dataset.opacity);
            if(currentOpacity < 1){
                currentOpacity += 0.1 ;
                if(currentOpacity > 1) currentOpacity = 1;
                div.dataset.opacity = currentOpacity;
            }
            
            div.style.backgroundColor = `rgba(${r},${g},${b},${currentOpacity})`;
            
        });
        resetButton.addEventListener('click', () => {
            div.style.backgroundColor = `rgba(255,255,255,1)`;
            div.dataset.opacity = 0;
        })
        container.appendChild(div);
    }
   
}
makeGrid(16);

button.addEventListener('click', () => {
    
    let size = parseInt(prompt('Enter the number of squares per side (max 100):',));
    if(size > 100) size = 100;
    if( size && size > 0) {
        makeGrid(size);
    }
});

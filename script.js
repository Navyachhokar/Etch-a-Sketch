const container = document.querySelector('.container');
function grid() {
    for(let i = 0; i< 16*16; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
}
grid();
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        const random = Math.random();
        box.style.backgroundColor = `rgb(${random * 255}, ${random * 255}, ${random * 255})`
        
    })
})
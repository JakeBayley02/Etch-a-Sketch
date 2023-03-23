let colour = 'black'
let click = true;
function createGrid(size){
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => (div.remove()));
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    
    amount = size * size;
    for (let i=0; i < amount; i ++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', changeColour)
        square.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', square);
   
};
};


function newGrid(){
     input = prompt('Please provide the number of squares you want for the new grid. Has to be within 2 and 100.');
     
    if (input <=2 || input >100){
        newGrid();
    };
    createGrid(input);
};

function StartGame(){
    
    createGrid(16);
    
};

function changeColour(){
    if(click){
    if ((colour === 'random')){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }
    else{
    this.style.backgroundColor = colour;}
};
}
function colourChoice(choice){
    colour = choice;
};

document.addEventListener('click', () => {
    click = !click;
    if (click){
        document.querySelector('.mode').textContent = 'Colouring';
    }
    else{
        document.querySelector('.mode').textContent = 'Not colouring';
    }
})


StartGame();


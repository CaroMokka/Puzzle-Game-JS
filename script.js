let rows = 5;
let columns = 5;

let pieceUp;
let pieceDown;

let turns = 0;

window.onload = function(){
    //inicializar el tablero aqui
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            let tile = document.createElement('img')
            tile.src = './assets/blank.jpg'
            document.querySelector('#board').appendChild(tile);
        }
    }
    //pieces
    let pieces = [];
    for(let i = 1; i <= rows*columns; i++){
        pieces.push(i.toString());
    }
    console.log(pieces)
    //add images into pieces
    for(let i = 0; i < pieces.length; i++){
        let mosaic = document.createElement('img');
        mosaic.src = `assets/${pieces[i]}.jpg`;
        document.querySelector('#pieces').appendChild(mosaic)
    }
    
}

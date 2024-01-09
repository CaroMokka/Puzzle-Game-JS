let rows = 5;
let columns = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function () {
  //Construye el tablero
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "./assets/blank.jpg";
      //drag functionality
      tile.addEventListener("dragstart", dragStart); //click en una img para arrastarla
      tile.addEventListener("dragover", dragOver); //cuando click en la img y la mueves con el mouse es dragOver
      tile.addEventListener("dragenter", dragEnter); //arrastras una imagenndenntro de otra
      tile.addEventListener("dragleave", dragLeave); //arrastras una imagen lejos de otra
      tile.addEventListener("drop", dragDrop); // es cuando sueltas unna imagen que estas arrastarndo sobre otra
      tile.addEventListener("dragend", dragEnd); // despues de completar el dragDrop

      document.querySelector("#board").appendChild(tile);
    }
  }
  //Built box Pieces
  let piecesBox = [];
  for (let i = 1; i <= rows * columns; i++) {
    piecesBox.push(i.toString());
  }

  //Barajar piezas
  piecesBox.reverse();
  for (let i = 0; i < piecesBox.length; i++) {
    let j = Math.floor(Math.random() * piecesBox.length);
    console.log(j);
    //swap o intercambio tombola
    let tmp = piecesBox[i];
    piecesBox[i] = piecesBox[j];
    piecesBox[j] = tmp;
  }

  //add images into Box pieces
  for (let i = 0; i < piecesBox.length; i++) {
    let tile = document.createElement("img");
    tile.src = `assets/${piecesBox[i]}.jpg`;

    //drag functionality
    tile.addEventListener("dragstart", dragStart); //click en una img para arrastarla
    tile.addEventListener("dragover", dragOver); //cuando click en la img y la mueves con el mouse es dragOver
    tile.addEventListener("dragenter", dragEnter); //arrastras una imagenndenntro de otra
    tile.addEventListener("dragleave", dragLeave); //arrastras una imagen lejos de otra
    tile.addEventListener("drop", dragDrop); // es cuando sueltas unna imagen que estas arrastarndo sobre otra
    tile.addEventListener("dragend", dragEnd); // despues de completar el dragDrop

    document.querySelector("#pieces").appendChild(tile);
  }
};

//DRag Tiles
function dragStart() {
  currTile = this; //this se refiere a la imagen que fue clickeada para ser arrastrada
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
function dragDrop() {
  otherTile = this;// this se refiere a la imgane que se esta soltando
}
function dragEnd(){
    if(currTile.src.includes("blank")){
        return;
    }
    let currImg = currTile.src;
    let otherImg =  otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.querySelector("#amount-turns").innerText = turns;
   
}
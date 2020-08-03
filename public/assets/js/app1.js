
//Make comments then push...
function randomPieces(){
    let piecesObject = {king: "../public/assets/images/king.jpg",
    queen: "../public/assets/images/queen.jpg",
    rook: "../public/assets/images/rook.jpg",
    pawn: "../public/assets/images/pawn.jpg",
    bishop: "../public/assets/images/bishop.jpg",
    knight: "../public/assets/images/knight.jpg"};
    let val = [];
    val.push(...Object.values(piecesObject));
    //console.log(val);
    let selectPiece = [];
    let randPiece = -1;
    for(let i = 0; i < 4; i++){
        let num = Math.floor(Math.random() * (val.length));
        if (i <= num & (randPiece === -1 & num < 5)) {
            randPiece = num;
        }

        //console.log(num);
        selectPiece.push(val.splice(num, 1)[0]);
        console.log(selectPiece);

    }
    let pickedCard = selectPiece[randPiece];
    console.log('The picked card is '+pickedCard);
    //console.log({pieces: select_piece, correctPiece: randPiece});
    return {pieces: selectPiece, correctPiece: randPiece, piecesObject: piecesObject};
};

function progressBar(progress){
    //update = progress.getAttribute("style");
    update = parseInt(progress.style.width);
    update += 2;
    progress.style.width = JSON.stringify(update)+'%';
}


function showPieces(){
    let display = document.querySelectorAll(".card1 img");
    let setPieces = randomPieces();
    let progress = document.querySelector(".progress-bar");
    let question = document.querySelector("#question");
    let update = 0;
    console.log(setPieces);
    let pickedCard = setPieces.pieces[setPieces.correctPiece];
    question.textContent = (pickedCard.split('/'))[4].split('.')[0];
    for(let i = 0; i < display.length; i++){
        
        display[i].setAttribute("src", setPieces.pieces[i]);
        display[i].addEventListener("click", function(){

            if (pickedCard === display[i].getAttribute("src")){
                
                progressBar(progress);
            }
            
        });
    }
    
    return {display: display, randPiece: setPieces.correctPiece, pieces: setPieces.pieces}
};
showPieces();



function randomPieces(){
    let piecesObject = {king: "../static/images/king.jpg",
    queen: "../static/images/queen.jpg",
    rook: "../static/images/rook.jpg",
    pawn: "../static/images/pawn.jpg",
    bishop: "../static/images/bishop.jpg",
    knight: "../static/images/knight.jpg"};
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

window.addEventListener('load', function(){
    function showPieces(){
        let display = document.querySelectorAll("#card1");
        let setPieces = randomPieces();
        console.log(setPieces);
        for(let i = 0; i < display.length; i++){
            display[i].setAttribute("src", setPieces.pieces[i]);
            display[i].addEventListener("click", function(){
                //alert("clicked");
                let pickedCard = setPieces.pieces[setPieces.correctPiece];
                console.log(pickedCard);
                if (pickedCard === display[i].getAttribute("src")){
                    alert("true");
                }
                
            });
        }
        
        return {display: display, randPiece: setPieces.correctPiece, pieces: setPieces.pieces}
    };
    let cardClick = showPieces();
    
    

});



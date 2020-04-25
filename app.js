

function randomPieces(){
    let pieces = ["../static/images/king.jpg", "../static/images/queen.jpg", "../static/images/rook.jpg", "../static/images/pawn.jpg", "../static/images/bishop.jpg", "../static/images/knight.jpg"];
    let select_piece = [];
    let randPiece = -1;
    for(let i = 0; i < 4; i++){
        let num = Math.floor(Math.random() * (pieces.length));
        if (i <= num & randPiece === -1 & num < 5) {
            randPiece = num;
        }

        //console.log(num);
        select_piece.push(pieces.splice(num, 1)[0]);
        //console.log(select_piece);
    }
    //console.log({pieces: select_piece, correctPiece: randPiece});
    return {pieces: select_piece, correctPiece: randPiece};
};

window.addEventListener('load', function(){
    function showPieces(){
        let display = document.querySelectorAll("#card1");
        let setPieces = randomPieces();
        console.log(setPieces);
        for(let i = 0; i < display.length; i++){
            display[i].setAttribute("src", setPieces.pieces[i]);
            display[i].addEventListener("click", function(){
                let pickedCard = setPieces.pieces[setPieces.correctPiece];
                console.log('typeof: '+ typeof pickedCard);

                
            });
        }
        
        return {display: display, randPiece: setPieces.correctPiece, pieces: setPieces.pieces}
    };
    let cardClick = showPieces();
    //console.log('here it is '+cardClick.randPiece)


});



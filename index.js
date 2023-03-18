let cellBoard = [
    ["","",""],
    ["","",""],
    ["","",""],
]
let currentPlayer = 'X';
let count = 0;

function playerTurn(cell){
    // console.log("hello")
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if(cellBoard[row][col] === ""){
        cellBoard[row][col] = currentPlayer;
        cell.innerHTML = currentPlayer;
        count++;
    }
    if(checkWinner()){
        document.getElementById('result').innerHTML = `'${currentPlayer}' Won!`;
    }else if(checkTie()){
        document.getElementById('result').innerHTML = `Its Tie`;
    }else{
        if(currentPlayer === 'X'){
            currentPlayer='O'
            cell.style.backgroundColor="pink";
        }
        else{
            currentPlayer='X';
            cell.style.backgroundColor='darksalmon';
        }
        document.getElementById('playerturn').innerHTML=`Turn '${currentPlayer}'`
    }
}

function checkWinner(){
    for(let i = 0;i < 3;i++){
        if(cellBoard[i][0] === currentPlayer && cellBoard[i][1] === currentPlayer && cellBoard[i][2] === currentPlayer){
            return true;
        }
    }
    for(let i = 0;i < 3;i++){
        if(cellBoard[0][i] === currentPlayer && cellBoard[1][i] === currentPlayer && cellBoard[2][i] === currentPlayer){
            return true;
        }
    }
    if(cellBoard[0][0] === currentPlayer && cellBoard[1][1] === currentPlayer && cellBoard[2][2] === currentPlayer){
        return true;
    }
    if(cellBoard[2][0] === currentPlayer && cellBoard[1][1] === currentPlayer && cellBoard[0][2] === currentPlayer){
        return true;
    }
}

function checkTie(){
    if(count === 9){
        return true;
    }
    return false
}

function restartGame(){

    cellBoard = [
        ["","",""],
        ["","",""],
        ["","",""],
    ]
    currentPlayer='X';
    count=0;
    let cells = document.getElementsByClassName("cell");
    for(let cell of cells){
        cell.innerHTML="";
        cell.style.backgroundColor="";
    }
}
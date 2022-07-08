let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
];
let player = "x";
let counter = 0;//Counter helps to know how many times worked my loop
while (true) {
    counter++;
    let boardStr = board[0].join("  ") + "\n" + board[1].join("  ") + "\n" + board[2].join("  ") + "\n";

    let row = +prompt("Now you player  " + player + "\nPlease, text your wanted row number" + "\n\n" + boardStr);
    let column = +prompt("Now you player  " + player + "\nPlease, text your wanted column number" + "\n\n" + boardStr);


    if (board[row][column] === "_") {
        board[row][column] = player;

    } else {
        break;
    }

    if (player === "x") {//change the player
        player = "o";

    }
    else {
        player = "x";
    }

    function equal(array) {
        let k = 0;
        let x = [];
        while (k < array.length) {
            if (array[k] === array[0]) {
                x.push(array[k]);
            }
            k++;
        }
        if (x.length === array.length) {
            return true;
        }
        else {
            return false;
        }
    }

    let result; 
    if (counter > 4) {//we are checking if the loop has worked 5 or more times and starting to check results

        let arr1 = [];
        let arr2 = [];
        
        for (d = 0; d < board[0].length; d++) {
            for (j = 0; j < board[0].length; j++) {
        
        arr2.push(board[d][j]);

                if (equal(board[d]) === true && board[d] !== ["_", "_", "_"]) {//check rows
                     alert("You win");
                     result = 1; //to break in out
                     break;
                }

                    if (d === j) {
                    arr1.push(board[j][j]);   
                    
                    if (equal(arr1) === true && arr1 !== ["_", "_", "_"]) {//check columns
                        alert("You win");
                         result = 1;
                        break;
                    }

                }

                
                if(arr2.length === 3){//check diogonals
                    if(equal(arr2) === true){
                        alert("You win");
                        arr2 = [];
                        z = 1;
                        break;
                    }
                    else{
                        arr2 = [];
                        continue;
                    }
                }


            }
        }
        if(result===1){
            break;
        }

    }

    

}


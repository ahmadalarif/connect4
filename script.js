// var turn = 0;
// var counter1 = 3;
// var counter2 = 8;
// var counter3 = 12;
// var counter4 = 16;



// //when the column1 is clicked will check if the turn 0 will change the color of spans and decrease the counter fo fill from bottom to top then give the turn to P1
// $(".column1").click(function(){ 
 
// if (turn == 0){

// $("#c"+counter1).css('background-color','rgb(245,245,11)');
// $("#c"+counter1).addClass("player1");

// turn++;

// }
// else if (turn == 1){
// $("#c"+counter1).css('background-color','rgb(236, 11, 11)');
// $("#c"+counter1).addClass("player2");

// turn--;


// }
// counter1--;
// console.log(counter1)
// checkWin();

// } );
// //when the column2 is clicked will check if the turn 0 will change the color of spans and decrease the counter fo fill from bottom to top then give the turn to P1

// $(".column2").click(function(){
   
// if (turn == 0){

// $("#c"+counter2).css('background-color',' rgb(245,245,11)');
// $("#c"+counter2).addClass('player1');

//  turn++

// }
//     else if (turn == 1){
// $("#c"+counter2).css('background-color','rgb(236, 11, 11)');
// $("#c"+counter2).addClass('player2');

// turn--;
//     }
// counter2--;
// console.log(counter2)
// checkWin();
// });
// //when the column3 is clicked will check if the turn 0 will change the color of spans and decrease the counter to fill from bottom to top then give the turn to p1
// $(".column3").click(function(){

//     if (turn == 0){

//         $("#c"+counter3).css('background-color','rgb(245,245,11)');
//         $("#c"+counter3).addClass('player1');

//         turn++

//     }
// else if (turn == 1){
//     $("#c"+counter3).css('background-color','rgb(236, 11, 11)');
//     $("#c"+counter3).addClass('player2');

//     turn--;
// }
// counter3--;
// console.log(counter3)
// checkWin();
// }) 

// //when the column4 is clicked will check if the turn 0 will change the color of spans and decrease the counter to fill from bottom to top then give the turn to p1
// $(".column4").click(function(){

//     if (turn == 0){
//         $("#c"+counter4).css('background-color',' rgb(245,245,11)');
//         $("#c"+counter4).addClass('player1');

//         turn++
//     }
//   else if (turn == 1){
//       $("#c"+counter4).css('background-color','rgb(236, 11, 11)');
//       $("#c"+counter4).addClass('player2');

//       turn--;
//   }
//   counter4--;
//   console.log(counter4)
//   checkWin();
// })

// let checkWin = function(){
// //check rows
//     for (i = 0; i <= 3; i++ ){

//            if ($("#c"+i).hasClass("player1") && $("#c"+(i+5)).hasClass('player1') &&
//            $("#c"+(i+9)).hasClass('player1') && $("#c"+(i+13)).hasClass('player1') )
           
// {             alert("player1 wins")
// location.reload();

// }

//            if ($("#c"+i).hasClass("player2") && $("#c"+(i+5)).hasClass('player2') &&
//            $("#c"+(i+9)).hasClass("player2") && $("#c"+(i+13)).hasClass('player2') )
           
//              alert("player2 wins")
//     }

// //check columns
//     for (i = 5; i <= 13; i=i+4 ) {

//         if ($("#c"+i).hasClass('player1') && $("#c"+(i+1)).hasClass('player1') &&
//         $("#c"+(i+2)).hasClass('player1') && $("#c"+(i+3)).hasClass('player1') )
        
// {          alert("player1 wins")
// location.reload();

// }

//         if ($("#c"+i).hasClass("player2") && $("#c"+(i+1)).hasClass('player2') &&
//         $("#c"+(i+2)).hasClass("player2") && $("#c"+(i+3)).hasClass('player2') )
        
// {          alert("player2 wins")
// location.reload();

// } }


//  if ($("#c0"+0).hasClass('player1') && $("#c"+(0+1)).hasClass('player1') &&
//  $("#c"+(0+2)).hasClass('player1') && $("#c"+(0+3)).hasClass('player1') )
 
// {   alert("player1 wins")
// location.reload();

// }
// if ($("#c"+3).hasClass('player1') && $("#c"+(0+2)).hasClass('player1') &&
//  $("#c"+(0+1)).hasClass('player1') && $("#c"+0).hasClass('player1') )
 
// {   alert("player1 wins")
// location.reload();

// }

//  if ($("#c"+0).hasClass("player2") && $("#c"+(0+1)).hasClass('player2') &&
//  $("#c"+(0+2)).hasClass("player2") && $("#c"+(0+3)).hasClass('player2') )
 
// {   alert("player2 wins")
// location.reload();

// }
//  if ($("#c"+0).hasClass('player1')&& $("#c"+(0+6)).hasClass('player1') && 
// $("#c"+(0+11)).hasClass('player1')&& $("#c"+(0+16)).hasClass('player1'))

// {    alert("player1 wins")
// location.reload();

// }
//  if ($("#c"+13).hasClass('player1')&& $("#c"+(0+10)).hasClass('player1') && 
// $("#c"+(0+7)).hasClass('player1')&& $("#c"+(0+3)).hasClass('player1'))

// {   alert("player1 wins")
// location.reload();

// }
//    if ($("#c"+3).hasClass('player1')&& $("#c"+(0+7)).hasClass('player1') && 
//    $("#c"+(0+10)).hasClass('player1')&& $("#c"+(0+13)).hasClass('player1'))
   
// {      alert("player1 wins")
// location.reload();

// }

//       if ($("#c"+13).hasClass('player2')&& $("#c"+(0+10)).hasClass('player2') && 
//       $("#c"+(0+7)).hasClass('player2')&& $("#c"+(0+3)).hasClass('player2'))
      
//          alert("player2 wins")
      
//          if ($("#c"+3).hasClass('player2')&& $("#c"+(0+7)).hasClass('player2') && 
//          $("#c"+(0+10)).hasClass('player2')&& $("#c"+(0+13)).hasClass('player2'))
         
// {            alert("player2 wins ")
// location.reload();

// }

//    if ($("#c"+0).hasClass('player2')&& $("#c"+(0+6)).hasClass('player2') && 
// $("#c"+(0+11)).hasClass('player2')&& $("#c"+(0+16)).hasClass('player2'))

// { alert("player2 wins")
// location.reload();

// }

//  if ($("#c"+16).hasClass('player2')&& $("#c"+(0+11)).hasClass('player2') && 
//  $("#c"+(0+ 6)).hasClass('player2')&& $("#c"+0).hasClass('player2'))
 
// {alert("player 2 wins")
// location.reload();

// }
// if((counter1==-1)&&(counter2==4)&&(counter3==8)&&(counter4==12)){
//   alert("Tie");
//   location.reload();  
 
// }

// }



// $(".btn").click(function(){

//   location.reload();


// });
var game_active = false; // this is a boolean (true/false values only).  This will be used to prevent being able to drop pieces once the game is over
var active_player = 0; // the # of the active player - 1 or 2.  Default is 0, meaning no active player
var gameboard = []; // define the gameboard as an array.  We will later set it up as a multi-dimensional array, to represent the col/row value for the game board
var player_color = []; //define player_color as an array
player_color[1] = "🔴"; //set the player_color for player 1 to "red" 
player_color[2] = "🟡"; // set the player_color for player 2 to "yellow"

function beginGame () {
    //don't reset the game until the last one is done.  So if the game is still active, return (don't continue with
    //the function)  When you return, the rest of the function is skipped, and the value you return will be
    //passed to the function that called the function.  Since beginGame is not called as a part of a different
    //function, it doesn't matter if you return true or false.
    if (game_active == true) return false;

    game_active = true;  //We're starting the game, so make game_active = true
    /* Reset the gameboard to be all 0.  We are going to use a multi-dimensional array - so every
    section of the board will be represented by a point on the grid - X and Y (col and row).  Top left will be 
    0,0 and as it moves to the right, that will be +x and down will be +y.
    For example, the values of the board will be: 
    | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
    | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 | 1,5 | 1,6 |
    | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
    | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
    | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
    | 5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |
	
    */
    for (row = 0; row <= 5; row++) {
        gameboard[row] = [];
        for (col = 0; col <= 6; col++) {
            gameboard[row][col] = 0;
        }
    }

    drawBoard(); // call the function to draw the board.				
    active_player = 1; //set the first player as their turn
    setUpTurn(); //get ready for the player's turn
}

/* drawBoard will draw the board - it will update each item to make sure it is the appropriate value */
function drawBoard () {
    checkForWin(); //check to see if any player has won.
    for (col = 0; col <= 6; col++) {
        for (row = 0; row <= 5; row++) {
            //Set the inner HTML of the square (a td) to be a span with the class of 'piece' and 'player' + the value of that 
            //gameboard piece.  Using CSS, you can style player0, player1 and player2 so that the square will appear correctly.
            document.getElementById('square_' + row + '_' + col).innerHTML = "<span class='piece player" + gameboard[row][col] + "'> </span>";
        }
    }
}

function checkForWin () {
    /* There are many ways this algorithm can be accomplished.  Basically you want to check all possibility for a win.
    Given the size of the board, checking all possibilities will not be a huge task for the computer, so I will go 
    with an easy to understand, straightforward algorithm */
    /* Ultimately there are 4 ways to win - left-to-right, diagnol up, diagnol down, and top to bottom.  This 
    function will check each of these situations twice - one for each player. */

    //check left-to-right
    //check for player 1 and 2
    for (i = 1; i <= 2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 5; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row][col + 1] == i) && (gameboard[row][col + 2] == i) && (gameboard[row][col + 3] == i)) {
                        endGame(i);//a match has been made, so run EndGame with the player that had the win
                        return true; //stop checking for a win - the game is over.
                    }
                }
            }
        }
    }

    //check top-to-bottom
    for (i = 1; i <= 2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <= 6; col++) {
            for (row = 0; row <= 2; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row + 1][col] == i) && (gameboard[row + 2][col] == i) && (gameboard[row + 3][col] == i)) {
                        endGame(i); //a match has been made - run endGame for the player who had the match.
                        return true; //stop checking for a win - the game is over.
                    }
                }
            }
        }
    }

    //check diagnol down
    for (i = 1; i <= 2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <= 3; col++) {
            //we also only need to check the bottom most columns - as the win must be upwards
            for (row = 0; row <= 2; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row + 1][col + 1] == i) && (gameboard[row + 2][col + 2] == i) && (gameboard[row + 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

    //check diagnol up
    for (i = 1; i <= 2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <= 3; col++) {
            //we also only need to check the bottom most columns - as the win must be upwards
            for (row = 3; row <= 5; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row - 1][col + 1] == i) && (gameboard[row - 2][col + 2] == i) && (gameboard[row - 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
}

/* endGame will end the game - any additional functions or things you want to happen when the game is over can go here */
function endGame (winningPlayer) {
    game_active = false; //set the "game_active" to false, so that it can be started again.
    document.getElementById('game_info').innerHTML = "<blink>Winner 🎉</blink>: Player " + active_player + " <blink ><span class='player" + active_player + "'>(" + player_color[active_player] + ")</span></blink >";
    setTimeout(function () {
        location.reload();
    }, 5000)
        ;//set the "game_info" to the winner and the winning player #
    // alert("Winner: " + winningPlayer) 
    console.count(winningPlayer + active_player)
}

var i = 0;
var txt =`   Enjoy playing connect four game`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter () {
    if (i < txt.length) {
        document.getElementById("begin_game").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

/* setUpTurn will display who is the active player */
function setUpTurn () {
    if (game_active) { //only run this is the game is active.
        //display the current player, and create a <span> with the class of the player# so that it will show the color.
        document.getElementById('game_info').innerHTML = "Current Player: Player " + active_player + " <blink ><span class='player" + active_player + "'>(" + player_color[active_player] + ")</span></blink >";
    }
} 
var table = document.getElementById("game_table");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        active_player[0].className = player_color[0].className.replace(" active", "");
        this.className += " active";
    });
}


/* drop will add a piece to the lowest available column */
function drop (col) {
    /* Look for the lowest point in this row that is open */
    //the opposite of our loop above - as we're going to start from the bottom looking for an open slot
    for (row = 5; row >= 0; row--) { //note: we are using row--, which will reduce the value of row by 1, the opposted of ++
        if (gameboard[row][col] == 0) {
            //set the empty row to the active player's number
            gameboard[row][col] = active_player;
            drawBoard(); // draw the board.
            //change the active players turn:
            if (active_player == 1) {
                active_player = 2;
            } else {
                active_player = 1;
            }
            //there is also a fancy way of doing this call a ternary assignment that looks like this: active_player = (active_player == 1) ? 2 : 1;

            setUpTurn(); //display who is the active player

            //stop looking for empty spaces
            return true;
        }
    }
}



  // how to add a function in javascript to count the nummber of wins?
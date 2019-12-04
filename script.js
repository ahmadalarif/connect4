var turn = 0;
var counter1 = 3;
var counter2 = 8;
var counter3 = 12;
var counter4 = 16;



//when the column1 is clicked will check if the turn 0 will change the color of spans and decrease the counter fo fill from bottom to top then give the turn to P1
$(".column1").click(function(){ 
 
if (turn == 0){

$("#c"+counter1).css('background-color','rgb(245,245,11)');
$("#c"+counter1).addClass("player1");

turn++;

}
else if (turn == 1){
$("#c"+counter1).css('background-color','rgb(236, 11, 11)');
$("#c"+counter1).addClass("player2");

turn--;


}
counter1--;
console.log(counter1)
checkWin();

} );
//when the column2 is clicked will check if the turn 0 will change the color of spans and decrease the counter fo fill from bottom to top then give the turn to P1

$(".column2").click(function(){
   
if (turn == 0){

$("#c"+counter2).css('background-color',' rgb(245,245,11)');
$("#c"+counter2).addClass('player1');

 turn++

}
    else if (turn == 1){
$("#c"+counter2).css('background-color','rgb(236, 11, 11)');
$("#c"+counter2).addClass('player2');

turn--;
    }
counter2--;
console.log(counter2)
checkWin();
});
//when the column3 is clicked will check if the turn 0 will change the color of spans and decrease the counter to fill from bottom to top then give the turn to p1
$(".column3").click(function(){

    if (turn == 0){

        $("#c"+counter3).css('background-color','rgb(245,245,11)');
        $("#c"+counter3).addClass('player1');

        turn++

    }
else if (turn == 1){
    $("#c"+counter3).css('background-color','rgb(236, 11, 11)');
    $("#c"+counter3).addClass('player2');

    turn--;
}
counter3--;
console.log(counter3)
checkWin();
}) 

//when the column4 is clicked will check if the turn 0 will change the color of spans and decrease the counter to fill from bottom to top then give the turn to p1
$(".column4").click(function(){

    if (turn == 0){
        $("#c"+counter4).css('background-color',' rgb(245,245,11)');
        $("#c"+counter4).addClass('player1');

        turn++
    }
  else if (turn == 1){
      $("#c"+counter4).css('background-color','rgb(236, 11, 11)');
      $("#c"+counter4).addClass('player2');

      turn--;
  }
  counter4--;
  console.log(counter4)
  checkWin();
})

let checkWin = function(){
//check rows
    for (i = 0; i <= 3; i++ ){

           if ($("#c"+i).hasClass("player1") && $("#c"+(i+5)).hasClass('player1') &&
           $("#c"+(i+9)).hasClass('player1') && $("#c"+(i+13)).hasClass('player1') )
           
{             alert("player1 wins")
location.reload();

}

           if ($("#c"+i).hasClass("player2") && $("#c"+(i+5)).hasClass('player2') &&
           $("#c"+(i+9)).hasClass("player2") && $("#c"+(i+13)).hasClass('player2') )
           
             alert("player2 wins")
    }

//check columns
    for (i = 5; i <= 13; i=i+4 ) {

        if ($("#c"+i).hasClass('player1') && $("#c"+(i+1)).hasClass('player1') &&
        $("#c"+(i+2)).hasClass('player1') && $("#c"+(i+3)).hasClass('player1') )
        
{          alert("player1 wins")
location.reload();

}

        if ($("#c"+i).hasClass("player2") && $("#c"+(i+1)).hasClass('player2') &&
        $("#c"+(i+2)).hasClass("player2") && $("#c"+(i+3)).hasClass('player2') )
        
{          alert("player2 wins")
location.reload();

} }


 if ($("#c0"+0).hasClass('player1') && $("#c"+(0+1)).hasClass('player1') &&
 $("#c"+(0+2)).hasClass('player1') && $("#c"+(0+3)).hasClass('player1') )
 
{   alert("player1 wins")
location.reload();

}
if ($("#c"+3).hasClass('player1') && $("#c"+(0+2)).hasClass('player1') &&
 $("#c"+(0+1)).hasClass('player1') && $("#c"+0).hasClass('player1') )
 
{   alert("player1 wins")
location.reload();

}

 if ($("#c"+0).hasClass("player2") && $("#c"+(0+1)).hasClass('player2') &&
 $("#c"+(0+2)).hasClass("player2") && $("#c"+(0+3)).hasClass('player2') )
 
{   alert("player2 wins")
location.reload();

}
 if ($("#c"+0).hasClass('player1')&& $("#c"+(0+6)).hasClass('player1') && 
$("#c"+(0+11)).hasClass('player1')&& $("#c"+(0+16)).hasClass('player1'))

{    alert("player1 wins")
location.reload();

}
 if ($("#c"+13).hasClass('player1')&& $("#c"+(0+10)).hasClass('player1') && 
$("#c"+(0+7)).hasClass('player1')&& $("#c"+(0+3)).hasClass('player1'))

{   alert("player1 wins")
location.reload();

}
   if ($("#c"+3).hasClass('player1')&& $("#c"+(0+7)).hasClass('player1') && 
   $("#c"+(0+10)).hasClass('player1')&& $("#c"+(0+13)).hasClass('player1'))
   
{      alert("player1 wins")
location.reload();

}

      if ($("#c"+13).hasClass('player2')&& $("#c"+(0+10)).hasClass('player2') && 
      $("#c"+(0+7)).hasClass('player2')&& $("#c"+(0+3)).hasClass('player2'))
      
         alert("player2 wins")
      
         if ($("#c"+3).hasClass('player2')&& $("#c"+(0+7)).hasClass('player2') && 
         $("#c"+(0+10)).hasClass('player2')&& $("#c"+(0+13)).hasClass('player2'))
         
{            alert("player2 wins ")
location.reload();

}

   if ($("#c"+0).hasClass('player2')&& $("#c"+(0+6)).hasClass('player2') && 
$("#c"+(0+11)).hasClass('player2')&& $("#c"+(0+16)).hasClass('player2'))

{ alert("player2 wins")
location.reload();

}

 if ($("#c"+16).hasClass('player2')&& $("#c"+(0+11)).hasClass('player2') && 
 $("#c"+(0+06)).hasClass('player2')&& $("#c"+0).hasClass('player2'))
 
{alert("player 2 wins")
location.reload();

}
if((counter1==-1)&&(counter2==4)&&(counter3==8)&&(counter4==12)){
  alert("Tie");
  location.reload();  
 
}

}



$(".btn").click(function(){

  location.reload();


});


  
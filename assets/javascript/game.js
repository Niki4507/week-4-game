//Global Variables


$(document).ready(function(){
var compNum = Math.floor(Math.random() * 102 + 19);
var totalScore = 0;
var winCount =  0;
var lossCount = 0;
var garnetNum = Math.floor(Math.random() * 12 + 1);
var sapphireNum = Math.floor(Math.random() * 12 + 1);
var diamondNum = Math.floor(Math.random() * 12 + 1);
var emeraldNum = Math.floor(Math.random() * 12 + 1);

 $("#compNum").text(compNum);

//Guess functions when buttons are clicked. Add the first total score plus the clicked variable and html output total score.
function winner(){
alert("Winner!");
  winCount++; 
  $("#win").html("Wins: " + winCount);
  //reset();
}
//addes the losses to the userTotal
function loser(){
alert ("Loser!");
  lossCount++;
  $("#loss").html("Losses: "+ lossCount);
  //reset()
}

$("#buttonGarnet").click(function() {
  totalScore=totalScore+garnetNum; 		
  $("#scoreNum").html(totalScore);
   if (totalScore == compNum){
          winner();
        }
    else if ( totalScore > compNum){
          loser();
        }
});


$("#buttonSapphire").click(function() {
  totalScore=totalScore+sapphireNum; 		
  $("#scoreNum").html(totalScore);
   if (totalScore == compNum){
          winner();
        }
    else if ( totalScore > compNum){
          loser();
        }
  }); 


$("#buttonDiamond").click(function() {
  totalScore=totalScore+diamondNum; 		
  $("#scoreNum").html(totalScore);
   if (totalScore == compNum){
          winner();
        }
    else if ( totalScore > compNum){
          loser();
        }
  }); 


$("#buttonEmerald").click(function() {
  totalScore=totalScore+emeraldNum; 		
  $("#scoreNum").html(totalScore);
   if (totalScore == compNum){
          winner();
        }
    else if ( totalScore > compNum){
          loser();
        }
  }); 
});










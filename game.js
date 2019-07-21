var started=!1;$(document).on("keypress",function(event){if(!started&&event.key==="a"||event.key==="A")
startTheGame()})
var buttonColours;var gamePattern;var userClickedPattern;var level;function startTheGame(){buttonColours=["red","blue","green","yellow"];gamePattern=[];userClickedPattern=[];level=0;started=!0;nextSequence()}
function nextSequence(){$("#level-title").text("Level "+(++level));var randomNumber=Math.floor(Math.random()*4);var randomChosenColour=buttonColours[randomNumber];gamePattern.push(randomChosenColour);$("#"+randomChosenColour).fadeOut(100).fadeIn(100);playAudio(randomChosenColour)}
function playAudio(audioName){var audio=new Audio('sounds/'+audioName+'.mp3');audio.play()}
$("div.btn").on("click",handler);function handler(event){if(!started)return!1;var userChosenColour=this.id;userClickedPattern.push(userChosenColour);playAudio(userChosenColour);animatePress(userChosenColour);checkSequence();if(userClickedPattern.length===gamePattern.length){setTimeout(nextSequence,500);userClickedPattern=[]}}
function animatePress(id){$("#"+id).addClass("pressed");setTimeout(function(){$("#"+id).removeClass("pressed")},100)}
function checkSequence(){for(var i=0;i<userClickedPattern.length;i++){if(gamePattern[i]!==userClickedPattern[i]){started=!1;incorrectSequenceMessage()}}}
function incorrectSequenceMessage(){$("body").addClass("game-over");setTimeout(function(){$("body").removeClass("game-over")},200);playAudio("wrong");$("#level-title").text("GAME OVER!! Press A to restart")}
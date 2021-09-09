

function newGame() {
    var in1 =document.getElementById("numGuesses").value;
    var numR = parseInt(in1);
    document.getElementById("numGuessesR").value=numR;
    document.getElementById("guessesR").innerHTML=numR;
    document.getElementById("answers").innerHTML="START!!!";
    in2 = document.getElementById("range").value;
    var range = parseInt(in2);
    document.getElementById("rand").value= randomNumGen(range);


}

function randomNumGen(input) {
    var range =parseInt(input);
    
    var num1= Math.round(Math.random()*range);
    return num1;
}



function checkGuess() {
    var in1 =document.getElementById("guess").value;
    var guess = parseInt(in1);
    var in2 = document.getElementById("rand").value;
    var answer =parseInt(in2);
    var in3 = document.getElementById("numGuessesR").value;
    var remaining =parseInt(in3);
    
    if(remaining ==0) {
        
        document.getElementById("answers").innerHTML="You Lose, No more Guesses";
        return;

    }
    
    
    if ((guess-answer) ==0) {
        document.getElementById("answers").innerHTML="You got it!!!";
        return;
    }else if((guess-answer) < -10) {
        document.getElementById("answers").innerHTML="You are Very Low";
    }else if((guess-answer) > 10) {
        document.getElementById("answers").innerHTML="You are Very High";
    } else if((guess-answer) <= -5) {
        document.getElementById("answers").innerHTML="You are Low";
    } else if((guess-answer) >= 5) {
        document.getElementById("answers").innerHTML="You are High";
    }else if((guess-answer) <= -2) {
        document.getElementById("answers").innerHTML="You are slightly low";
    }else if((guess-answer) >= 2) {
        document.getElementById("answers").innerHTML="You are slightly high";
    }else if((guess-answer) <= -1) {
        document.getElementById("answers").innerHTML="You are within 1 below";
    }else if((guess-answer) >= 1) {
        document.getElementById("answers").innerHTML="You are within 1 above";
    }else {
        document.getElementById("answers").innerHTML="Error";

    }
    remaining =remaining-1;
    document.getElementById("guessesR").innerHTML=(remaining);

    document.getElementById("numGuessesR").value =remaining;
    if(remaining ==0) {
        
        document.getElementById("answers").innerHTML="You Lose, No more Guesses, correct answer was " + answer;
        return;

    }
}

    
function frange10() {
    colorChangerT("1");
    document.getElementById("rand").value= randomNumGen(10);
    document.getElementById("range").value =10;

}
function frange100() {
    colorChangerT("2");
    document.getElementById("rand").value= randomNumGen(100);
    document.getElementById("range").value =100;

}
function frange1000() {
    colorChangerT("3");    
    document.getElementById("rand").value= randomNumGen(1000);
    document.getElementById("range").value =1000;

}



function guesses3() {
    colorChangerF("1");   
    document.getElementById("numGuesses").value =3;


}

function guesses5() {
    colorChangerF("2");
    document.getElementById("numGuesses").value =5;
}

function guesses7() {
    colorChangerF("3");
    document.getElementById("numGuesses").value =7;
}


        
function colorChangerF(buttonNum) {
        var button;
        var other1;
        var other2;
        if(buttonNum =="1") {
             button =document.getElementById("guess3");
            other1 =document.getElementById("guess5");
            other2 =document.getElementById("guess7");
        }else if(buttonNum=="2") {
              button =document.getElementById("guess5");
            other1 =document.getElementById("guess3");
            other2 =document.getElementById("guess7");

        }else if(buttonNum=="3") {
            button =document.getElementById("guess7");
            other1 =document.getElementById("guess3");
            other2 =document.getElementById("guess5");

        }
    
        
        other1.style.background="transparent";
        other1.style.color="black";
        other2.style.background="transparent";
        other2.style.color="black";
       
        
         button.style.backgroundColor= "black";
         button.style.color= "white";
       
          
}
function colorChangerT(buttonNum) {
        var button;
        var other1;
        var other2;
        if(buttonNum =="1") {
             button =document.getElementById("range10");
            other1 =document.getElementById("range100");
            other2 =document.getElementById("range1000");
        }else if(buttonNum=="2") {
              button =document.getElementById("range100");
            other1 =document.getElementById("range10");
            other2 =document.getElementById("range1000");

        }else if(buttonNum=="3") {
              button =document.getElementById("range1000");
            other1 =document.getElementById("range10");
            other2 =document.getElementById("range100");

        }
    
        
        other1.style.background="transparent";
        other1.style.color="black";
        other2.style.background="transparent";
        other2.style.color="black";
        
        
         button.style.backgroundColor= "black";
         button.style.color= "white";
       
          
}       
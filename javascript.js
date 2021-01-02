var score;
var playing = false;
var timeremaining;
var action;
var correctAns;
//if we click on start/reset
document.getElementById("startReset").onclick = function (){
    if(playing==true){    //if we're playing
        location.reload();        //reload page
    }else{         //if not playing
        score = 0;        //set score to zero
        document.getElementById("scoreValue").innerHTML=score;
        hide("gameover");
        show("timer");        //countdonw box
        timeremaining = 60;
        document.getElementById("timeRemaining").innerHTML = " "+ timeremaining;
        timerem(); //timer

        document.getElementById("startReset").innerHTML= "Reset Game";
        playing = true;

        generateQA();
        
    }
}

function timerem(){ 
    action = setInterval(function(){
        timeremaining -= 1;          //reduce time in loops
        document.getElementById("timeRemaining").innerHTML = " "+timeremaining;

        if(timeremaining==0){// time left?
            stopTimer();
                    // no-> gameover
            show("gameover");
            hide("timer");
            hide("errorMsg");
            hide("correctMsg");
            document.getElementById("gameover").innerHTML += score;
            playing = false;
            document.getElementById("startReset").innerHTML= "Start Game";
        } 

    }, 1000);
    
    
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id){
    document.getElementById(Id).style.display="block";
}
function stopTimer(){
    clearInterval(action);

}

function generateQA(){
    
    var i = Math.ceil(Math.random()*10);
    var j = Math.ceil(Math.random()*10);
    correctAns= i*j;

    
    document.getElementById("questionBox").innerHTML = i + "x" + j;
    document.getElementById("questionBox").style.textAlign="center";

    var ansPos = 1 + Math.floor(Math.random()*3);

    document.getElementById("box"+ ansPos).innerHTML=correctAns; // correct answer box

    var answers=[correctAns];
    for(i=1; i<5; i++){
        if(i!= ansPos){
            var wrongAns;
            do{                
            wrongAns = (Math.ceil(Math.random()*10)) * (Math.ceil(Math.random()*10));   
            document.getElementById("box"+i).innerHTML=wrongAns;}
            while(answers.indexOf(wrongAns)>-1);
            answers.push(wrongAns);   
     }

    }
}
for(i=1; i<5; i++){
    
document.getElementById("box"+i).onclick= function(){
    if (playing==true){
        if (this.innerHTML == correctAns){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            show("correctMsg");
            hide("errorMsg");
            setTimeout(function(){
                hide("correctMsg");
            },1000)
            generateQA();
        }
        else{
            show("errorMsg");
            hide("correctMsg");
            setTimeout(function(){
                hide("errorMsg");
            },1000)
        }
    }
}

}
                            
        //change button to reset
        //generate new ques ans


// answer box click
    //not playing 
        // nothing
    //playing
        //correct?
            // yes
                //increase score
                // show correct box
                // generate new qna
            // no
            //     show try again for 1s
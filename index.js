
document.addEventListener("keypress",function(event){
    switch(event.key){
        case "w":
            wdrum();
            break;
        case "a":
            adrum();
            break;
        case "s":
            sdrum();
            break;
        case "d":
            ddrum();
            break;
        case "j":
            jdrum();
            break;
        case "k":
            kdrum();
            break;
        case "l":
            ldrum();
            break;
        default:
            console.log(event.key);
            break;
    }
});

function wdrum(){
    document.getElementById("wdrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("wdrum").classList.remove("pressed"); 
    },100);

    var audio =new Audio("sounds/tom-1.mp3");
    audio.play();
}
function adrum(){
    document.getElementById("adrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("adrum").classList.remove("pressed"); 
    },100);
    var audio =new Audio("sounds/tom-2.mp3");
    audio.play();
}
function sdrum(){
    document.getElementById("sdrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("sdrum").classList.remove("pressed"); 
    },100);
    var audio =new Audio("sounds/tom-3.mp3");
    audio.play();
}
function ddrum(){
    document.getElementById("ddrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("ddrum").classList.remove("pressed"); 
    },100);
    var audio =new Audio("sounds/tom-4.mp3");
    audio.play();
}
function jdrum(){
    document.getElementById("jdrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("jdrum").classList.remove("pressed"); 
    },100);
    var audio =new Audio("sounds/snare.mp3");
    audio.play();
}
function kdrum(){
    document.getElementById("kdrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("kdrum").classList.remove("pressed"); 
    },100);
    var audio =new Audio("sounds/crash.mp3");
    audio.play();
}
function ldrum(){
    document.getElementById("ldrum").classList.add("pressed");
    setTimeout(function(){
        document.getElementById("ldrum").classList.remove("pressed"); 
    },100);
    var audio =new Audio("sounds/kick-bass.mp3");
    audio.play();
}
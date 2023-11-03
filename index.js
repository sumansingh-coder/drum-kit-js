for(var i=0; i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
       var btninnerHTML = this.innerHTML;
       playsounds(btninnerHTML);
       buttonAnimation(btninnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    playsounds(event.key);
    buttonAnimation(event.key);
});

function playsounds(key){
    switch (key) {
        case 'w':
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
        case 'a':
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
        case 's':
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
        case 'd':
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
        case 'j':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
        case 'k':
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;
        case 'l':
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
        default:
                console.log("Wrong Button");
            break;
       }
}

function buttonAnimation(key){
    var animate = document.querySelector("."+key);
    animate.classList.add("pressed");
    setTimeout(() => {
        animate.classList.remove("pressed");
    }, 100);
}
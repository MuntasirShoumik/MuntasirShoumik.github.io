var i = 0;
var txt = 'I am a Programmer'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */


function typeWriter(){
    
    if(i<txt.length){

        document.getElementById("pro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }      
}

typeWriter();



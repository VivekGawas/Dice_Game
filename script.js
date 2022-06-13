var button = document.querySelector(".btn");


button.addEventListener("click", start);

function start(){

    //for vutton click animation
    button.classList.add("clicked");
    setTimeout(function(){
        button.classList.remove("clicked");
    }, 100);

//player 1
var randomNumber1;
randomNumber1 = (Math.floor(Math.random()*6+1));

var randomImage1 = "dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


//player 2
var randomNumber2;
randomNumber2 = (Math.floor(Math.random()*6+1));

var randomImage2 = "dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


//title
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Player 1 wins.";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins. 🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw 😑";
}

}

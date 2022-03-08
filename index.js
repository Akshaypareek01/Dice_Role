var randomNumber1=Math.floor(6*Math.random()+1);
var imgName1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",imgName1);

var randomNumber2=Math.floor(6*Math.random()+1);
var imgName2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imgName2);

if(randomNumber1>randomNumber2){
    document.querySelector(".winner").textContent="Player one is winner";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".winner").textContent="Player two is winner";
}
else{
    document.querySelector(".winner").textContent="Draw!";
}

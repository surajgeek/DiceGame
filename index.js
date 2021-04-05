var randomNumber1 = Math.floor(Math.random()*6)+1;

var diceImage ="dice"+randomNumber1+".png";

var imageSource ="images/"+diceImage;

var newImage1 = document.querySelectorAll("img")[0];

newImage1.setAttribute("src", imageSource);

                                        // dice2

var randomNumber2=Math.floor(Math.random()*6)+1;

var diceImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

                          // comparison and result

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🥇Player1 is winner";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player2 is winner🥇";
}
else{
  document.querySelector("h1").innerHTML="ooohhhh!🤨 match drawn";
}

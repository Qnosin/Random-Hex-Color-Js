var Number = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var site = document.getElementById('body');
var button = document.getElementById('change');
var parahraph = document.getElementById('para');


function ChangeColor(){
     num1 = Math.floor(Math.random()* 15) + 1;
     num2 = Math.floor(Math.random()* 15) + 1;
     num3 = Math.floor(Math.random()* 15) + 1;
     num4 = Math.floor(Math.random()* 15) + 1;
     num5 = Math.floor(Math.random()* 15) + 1;
     num6 = Math.floor(Math.random()* 15) + 1;
     var result = "#" + Number[num1] + Number[num2] + Number[num3] + Number[num4] + Number[num5] + Number[num6];
     console.log(result);
     site.style.backgroundColor = result;
     parahraph.innerHTML = "Your Hex Code: " + result;
}







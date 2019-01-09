$( document ).ready(function() {

var occupied="";
var x = "";
var y = "";
var operator="";



function numberClick(){
$(".number").on("click", function(){
var number = this.value;
   if (!occupied){
    
     $("#display").append(number);
     x = $("#display").text();
     console.log(x)
   }

   else if (occupied === "occupied"){
   
    $("#display").append(number);
     y =  $("#display").text();
     console.log(y)
   }
});
}
numberClick();
function operatorClick(){
$(".operator").on("click",function(){
  if (x){
    if (!occupied){
    var operatorVal=this.value;
    $("#display").text("");
    operator= operatorVal;
    occupied = "occupied"
    } 
    else {
        return
    }
  }
});
  
}
operatorClick();

$("#clear").on("click",function(){
  
  $("#display").empty();
  x="";
  y="";
  operator="";
  occupied= "";
  numberClick();
});

$("#equals").on("click",function(){
  var a= parseInt(x);
  var b=parseInt(y);
 if (operator === "+"){
   var total = a + b;
   $("#display").text(total);
   $(".number").off("click")

 }
  else if (operator === "-"){
    var total = a - b;
    $("#display").text( total);
    $(".number").off("click")
  }
  else if (operator === "*"){
    var total = a * b;
    $("#display").text(total);
    $(".number").off("click")
  }
  else if (operator === "/"){
    var total = (a/b);
    $("#display").text(total);
    $(".number").off("click")
  }
  else if (operator === "^"){
    var total = a ** b;
    $("#display").text(total);
    $(".number").off("click")
  }
  else if (operator === 0 ){
    return
  }

  
 });











//ready closing tag    
});
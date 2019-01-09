$( document ).ready(function() {

var occupied="";
var x = "";
var y = "";
var operator="";
var decimalOcc="";


function numberClick(){
$(".number").on("click", function(){
var number = this.value;
   if (!occupied){
     $("#display").append(number);
     x = $("#display").text();
     console.log("x="+ x);
  
   }
   else if (occupied === "occupied"){
   
    $("#display").append(number);
     y =  $("#display").text();
     console.log("y=" +y);
     decimalOcc = "";
     
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
        return;
    }
  }
});
  
}
operatorClick();


$("#decimal").on("click", function(){
  if(!decimalOcc){
  $("#display").append(".");
  decimalOcc = "occupied";
  }
  else{
    return;
  }
});



$("#clear").on("click",function(){
  
  $("#display").text("");
  x="";
  y="";
  operator="";
  occupied="";
  numberClick();

});

$("#equals").on("click",function(){
  var a = parseFloat(x);
  var b = parseFloat(y);
  console.log("x=" +x);
  console.log("y=" +y);
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
  else if (!operator ){
    $(".number").off("click")
    return  $("#display").text("Error");
    
  }

  
 });











//ready closing tag    
});
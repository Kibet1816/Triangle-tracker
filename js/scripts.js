function result(){	
// Handle user input
    var side1=parseInt(document.getElementById("dimension1").value);
    var side2=parseInt(document.getElementById("dimension2").value);
    var side3=parseInt(document.getElementById("dimension3").value);
    var answer=document.getElementById("answer");

   if(side1===side2&&side2===side3){
	 alert("This is an equilateral triangle");
}else if(((side1===side2&&side2!==side3)||(side1===side3&&side3!==side2)||(side2===side3&&side3!==side1))&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	alert("This is an isosceles triangle");
}else if((side1!==side2&&side2!==side3&&side1!==side3)&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	alert("This is a scalene triangle");
}else{
	alert("No triangle can be formed");
}
    
}

function result(){	
// Handle user input
    var side1=parseInt(document.getElementById("dimension1").value);
    var side2=parseInt(document.getElementById("dimension2").value);
    var side3=parseInt(document.getElementById("dimension3").value);
    var answer=document.getElementById("answer");

   if(side1===side2&&side2===side3){
	 answer.textContent="This is an equilateral triangle";
}else if(((side1===side2&&side2!==side3)||(side1===side3&&side3!==side2)||(side2===side3&&side3!==side1))&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	answer.textContent="This is an isosceles triangle";
}else if((side1!==side2&&side2!==side3&&side1!==side3)&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	answer.textContent="This is a scalene triangle";
}else{
	answer.textContent="No triangle can be formed";
}
    
}

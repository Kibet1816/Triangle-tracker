function result(){	
// Handle user input
    var side1=parseInt(document.getElementById("dimension1").value);
    var side2=parseInt(document.getElementById("dimension2").value);
    var side3=parseInt(document.getElementById("dimension3").value);
    var answer=document.getElementById("answer");
// Add conditional logic for equilateral triangle;
   if(side1===side2&&side2===side3){
	 answer.innerHTML="Equilateral triangle.(All sides are equal)";
  // Load image for eqilateral triangle
	var qrEqual=document.createElement ("img")
	qrEqual.src="pics/equilateral.png"
	document.body.appendChild(qrEqual);
// Add conditional logic for isosceles triangle;	
}else if(((side1===side2&&side2!==side3)||(side1===side3&&side3!==side2)||(side2===side3&&side3!==side1))&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	answer.innerHTML="Isosceles triangle.(Only two sides are equal)";
  // Load image for isosceles triangle
	var qrIso=document.createElement ("img")
	qrIso.src="pics/isosceles.png"
	document.body.appendChild(qrIso);
// Add conditional logic for scalene triangle;
}else if((side1!==side2&&side2!==side3&&side1!==side3)&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	answer.innerHTML="Scalene triangle.(Neither side is equal)";
  // Load image for scalene triangle
	var qrScal=document.createElement ("img")
	qrScal.src="pics/scalene.png"
	document.body.appendChild(qrScal);
// Add conditional for NaN
}else if((isNaN(side1)===true)||(isNaN(side2)===true)||(isNaN(side3)===true)){
	answer.innerHTML="Please use numbers";
// Add final conditional
}else{
	answer.innerHTML="No triangle can be formed";
}
    
}

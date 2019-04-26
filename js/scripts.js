function result(){	
// Handle user input
    var side1=parseInt(document.getElementById("dimension1").value);
    var side2=parseInt(document.getElementById("dimension2").value);
    var side3=parseInt(document.getElementById("dimension3").value);
    var answer=document.getElementById("answer");

   if(side1===side2&&side2===side3){
	 answer.textContent="This is an equilateral triangle";
	var qrEqual=document.createElement ("img")
	qrEqual.src="pics/equilateral.png"
	document.body.appendChild(qrEqual);
}else if(((side1===side2&&side2!==side3)||(side1===side3&&side3!==side2)||(side2===side3&&side3!==side1))&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	answer.textContent="This is an isosceles triangle";
	var qrIso=document.createElement ("img")
	qrIso.src="pics/isosceles.png"
	document.body.appendChild(qrIso);
}else if((side1!==side2&&side2!==side3&&side1!==side3)&&((side1+side2>side3)&&(side1+side3>side2)&&(side2+side3>side1))){
	answer.textContent="This is a scalene triangle";
	var qrScal=document.createElement ("img")
	qrScal.src="pics/scalene.png"
	document.body.appendChild(qrScal);
}else{
	answer.textContent="No triangle can be formed";
}
    
}

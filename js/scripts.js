function result(){	
// Handle user input
    var side1=document.getElementById("dimension1").value;
    var side2=document.getElementById("dimension2").value;
    var side3=document.getElementById("dimension3").value;

    if(side1===side2&&side2===side3){
    	alert ("Equilateral triangle.(All sides are equal)");
    }else if((side1===side2&&side2!==side3)||(side1===side3&&side3!==side2)||(side2===side3&&side3!==side1)){
    	alert("Isosceles triangle.(Two sides are equal)");
    }else if(side1!==side2&&side2!==side3&&side1!==side3){
    	alert("Scalene triangle.(No side is equal)");
    }
}

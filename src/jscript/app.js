/*
  Project: Backrest
  Developer: Horia-Stefan Spataru
  Copyright © 2025 Horia-Stefan Spataru. All rights reserved.
  Unauthorized copying, reproduction, or distribution of this script or its contents is prohibited.
*/

document.getElementById("contact").onclick = function() {
    window.location.href = "../html/contact.html";
};


function calculateMonthsSinceSpecificDate() {

    var givenDate = new Date("2023-10-16");
    
    var currentDate = new Date();
    var months;
    
  
    months = (currentDate.getFullYear() - givenDate.getFullYear()) * 12;
    months -= givenDate.getMonth() + 1;
    months += currentDate.getMonth();
    
    return months;
}


function updateText() {
   var resultElement = document.getElementById('result');
    
    var timeSinceSpecificDate = calculateMonthsSinceSpecificDate();
    
    if( timeSinceSpecificDate >= 12 )
		{
			var finalYears = Math.floor(timeSinceSpecificDate/12);
			var extraMonths = Math.floor((timeSinceSpecificDate/12 - Math.floor(timeSinceSpecificDate/12))*12);
			var constYears = " YEARS ";
			var costMonths = " MONTHS";
			if( finalYears == 1)
				constYears = " YEAR ";
		   if(extraMonths == 1)
				  constMonths == " MONTH";
		   if(extraMonths)
				  resultElement.textContent =  finalYears + constYears + extraMonths + constMonths;
		   else 
				  resultElement.textContent =  finalYears + constYears;
				
		}
	  else
		   {resultElement.textContent =  timeSinceSpecificDate + " MONTHS" ;}
}

document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', updateText);
});

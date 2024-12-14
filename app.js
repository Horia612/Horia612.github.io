document.getElementById("contact").onclick = function() {
    window.location.href = "contact.html";
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
			resultElement.textContent =  finalYears + constYears + extraMonths + " MONTHS" ;
		}
	else
		{resultElement.textContent =  timeSinceSpecificDate + " MONTHS" ;}
}

document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', updateText);
});

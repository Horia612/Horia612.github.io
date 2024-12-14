document.getElementById("contact").onclick = function() {
    window.location.href = "contact.html";
};


function calculateMonthsSinceSpecificDate() {

    var givenDate = new Date("2023-10-16");
    
    var currentDate = new Date();
    var months, years;
    
  
    months = (currentDate.getFullYear() - givenDate.getFullYear()) * 12;
    months -= givenDate.getMonth() + 1;
    months += currentDate.getMonth();
    
    if ( months < 12 ) { return months : months; } 
    else { 
		years = months / 12;
		return years : years;
					}
}


function updateText() {
    var resultElement = document.getElementById('result');
    

    var monthsSinceSpecificDate = calculateMonthsSinceSpecificDate();
    
   
    resultElement.textContent =  monthsSinceSpecificDate + " MONTHS" ;
}

document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', updateText);
});

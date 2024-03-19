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
    
    return months <= 0 ? 0 : months;
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

/*
  Project: Backrest
  Developer: Horia-Stefan Spataru
  Copyright © 2025 Horia-Stefan Spataru. All rights reserved.
  Unauthorized copying, reproduction, or distribution of this project or its contents is prohibited.
*/

function calculateMonthsSinceSpecificDate() {
    var givenDate = new Date("2023-10-16");
    var currentDate = new Date();
    
    // Calculate difference in months
    var months = (currentDate.getFullYear() - givenDate.getFullYear()) * 12;
    months -= givenDate.getMonth();
    months += currentDate.getMonth();
    
    // Adjust if the current day of the month is smaller than the starting day
    if (currentDate.getDate() < givenDate.getDate()) {
        months--;
    }
    
    return months;
}

function updateText() {
    var resultElement = document.getElementById("result");
    
    if (!resultElement) return;

    var timeSinceSpecificDate = calculateMonthsSinceSpecificDate();

    if (timeSinceSpecificDate >= 12) {
        var finalYears = Math.floor(timeSinceSpecificDate / 12);
        var extraMonths = timeSinceSpecificDate % 12;
        
        var constYears = " YEARS ";
        var constMonths = " MONTHS";

        if (finalYears === 1) {
            constYears = " YEAR ";
        }
        
        if (extraMonths === 1) {
            constMonths = " MONTH";
        }

        if (extraMonths === 0) {
            resultElement.textContent = finalYears + constYears;
        } else {
            resultElement.textContent = finalYears + constYears + extraMonths + constMonths;
        }
    } else {
        resultElement.textContent = timeSinceSpecificDate + " MONTHS";
    }
}

// Wait for HTML to load before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateButton");
    
    if (calculateButton) {
        calculateButton.addEventListener("click", updateText);
        
        // TBD: The date should appear automatically when the page loads, without clicking the button first.
        // updateText(); 
    }
});
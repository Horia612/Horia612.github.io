/*
  Project: Backrest
  Developer: Horia-Stefan Spataru
  Copyright © 2025 Horia-Stefan Spataru. All rights reserved.
  Unauthorized copying, reproduction, or distribution of this script or its contents is prohibited.
*/

// We define a variable for the iframe so we don't have to look it up 4 times
const contentFrame = document.getElementById("contentFrame");

document.getElementById("cvButton").onclick = function() {
    contentFrame.src = "src/html/cv.html";
};

document.getElementById("aboutButton").onclick = function() {
    contentFrame.src = "src/html/info.html";
};

document.getElementById("projButton").onclick = function() {
    contentFrame.src = "src/html/projects.html";
};

document.getElementById("conButton").onclick = function() {
    contentFrame.src = "src/html/contact.html";
};

document.getElementById("homeButton").onclick = function() {
    document.getElementById("contentFrame").src = "src/html/news.html";
};
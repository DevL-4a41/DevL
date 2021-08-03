var dname = localStorage.getItem('dname');
var dvol = localStorage.getItem('dvol');
var newElem = "";
var dSec = document.querySelector(".d-section");
for (let i = 1; i <= dvol; i++)
{
  newElem += "<div class='d-cont'>";
  newElem += "<img class='d-cover' src='./assets/drawable/spinner.gif' />";
  newElem += "<div class='d-btn'>";
  newElem += "<a href='#'>Download "+dname+" Vol " + i + "</a>";
  newElem += "</div> </div>";
}

dSec.innerHTML = newElem;
// DevL's Firebase configuration
var firebaseConfig =
{
  apiKey: "AIzaSyAi-uKONBNpQYYlI4YzmmnDAxrYVzvjCRQ",
  authDomain: "devl-78f1c.firebaseapp.com",
  projectId: "devl-78f1c",
  storageBucket: "devl-78f1c.appspot.com",
  messagingSenderId: "427527821339",
  appId: "1:427527821339:web:a05dd1cb8e512c6733c0be",
  databaseURL: "https://devl-78f1c-default-rtdb.firebaseio.com/",
  measurementId: "G-32W7ZRJ39V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

var ref;

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

var d_btns = document.querySelectorAll(".d-btn");
for (let i = 0; i < dvol; i++)
{
  ref = db.ref('LN/' + dname + '/' + (i + 1));
  ref.on('value', function(snapshot)
  {
    document.querySelectorAll('a')[i].href = snapshot.val().DriveLink;
    console.log(snapshot.val().DriveLink);
  });
  
  d_btns[i].onclick = () =>
  {
    ref = db.ref('LN/' + dname + '/' + (i+1));
    ref.on('value', function(snapshot)
    {
      window.open(snapshot.val().DriveLink, "_blank");
    });
    
  }
}
// Our web app's Firebase configuration
var firebaseConfig = {
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
// database reference
var ref, LN_number, LN_name;
ref = db.ref('LN/');
ref.on('value', function(snapshot)
{
  LN_number = Object.keys(snapshot.val()).length;
  // console.log(Object.keys(snapshot.val()).length);
  // console.log(Object.keys(snapshot.val())[1]);
  
  for (let i = 0; i < LN_number; i++)
  {
    LN_name = Object.keys(snapshot.val())[i];
    document.querySelectorAll(".ln-name")[i].innerHTML = LN_name;
    ref = db.ref('LN/'+LN_name+"/1");
    
    ref.on('value', function(snapshot)
    {
      document.querySelectorAll(".ln-cover")[i].src = snapshot.val().CoverLink;
    });
  }
  
  
  let ln_elems = document.querySelectorAll(".ln-cover");
  for (let i = 0; i < ln_elems.length; i++)
  {
    ln_elems[i].onclick = () =>
    {
      window.location.assign("./download_page.html");
    }
  }
  
  var LN_Data = Object.keys(snapshot.val())[2];
  
});
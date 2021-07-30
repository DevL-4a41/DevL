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
var ref, LN_number;
ref = db.ref('LN/');
ref.on('value', function(snapshot)
{
  LN_number = Object.keys(snapshot.val()).length;
  // console.log(Object.keys(snapshot.val()).length);
  // console.log(Object.keys(snapshot.val())[1]);
  /*for (let i = 0; i < LN_number; i++)
  {
    document.getElementById('ln-div').innerHTML += "<div>" + Object.keys(snapshot.val())[i] + "</div>";
  }*/
  console.log(LN_number);
});

// document.getElementById('ln-div').innerHTML = "";
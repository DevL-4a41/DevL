// My web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDn5tZ0m5Yn52mOn0HnxQARP_whYZv0KcU",
  authDomain: "fir-js-8f792.firebaseapp.com",
  projectId: "fir-js-8f792",
  storageBucket: "fir-js-8f792.appspot.com",
  messagingSenderId: "520659113418",
  appId: "1:520659113418:web:1c277d88caeb33ec62eb33",
  databaseURL: "https://fir-js-8f792-default-rtdb.asia-southeast1.firebasedatabase.app"
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
  for (let i = 0; i < LN_number; i++)
  {
    document.getElementById('ln-div').innerHTML += "<div>" + Object.keys(snapshot.val())[i] + "</div>";
  }
});

document.getElementById('ln-div').innerHTML = "";
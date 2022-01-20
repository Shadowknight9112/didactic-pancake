
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDyyotATQ8gdy2aX_jCNtKgE01r2ugniXI",
      authDomain: "kwitter-76722.firebaseapp.com",
      projectId: "kwitter-76722",
      storageBucket: "kwitter-76722.appspot.com",
      messagingSenderId: "176128323647",
      appId: "1:176128323647:web:12506b0e0ce196c4c9c88a"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

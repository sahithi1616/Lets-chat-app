var firebaseConfig = {
    apiKey: "AIzaSyDLAlQzOqvcfsbt_lmpgFBDxtktA57li6s",
    authDomain: "kwitter-45cd9.firebaseapp.com",
    databaseURL: "https://kwitter-45cd9-default-rtdb.firebaseio.com",
    projectId: "kwitter-45cd9",
    storageBucket: "kwitter-45cd9.appspot.com",
    messagingSenderId: "270692238423",
    appId: "1:270692238423:web:35ababb4a0f0a4e561cf12"
  };
  
  
    firebase.initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class = 'room_name' id="+Room_names+"  onclick= 'redirectToRoomName(this.id)' >#" + Room_names +"</div></hr>"
    document.getElementById("output") .innerHTML += row;  
 //End code
       });});}
 getData();
 
 function addRoom()
 {
       room_name = document.getElementById("room_name").value; 
 
       firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"     
       });
       localStorage.setItem("room_name", room_name);
 
       window.location = "kwitter_room.html";
 }
 
 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
 
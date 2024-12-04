const firebaseConfig = {
    apiKey: "AIzaSyC4tKFA0pbPkeAay9lNn5T-LBUB18_VtGY",
    authDomain: "database1-d9709.firebaseapp.com",
    databaseURL: "https://database1-d9709-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database1-d9709",
    storageBucket: "database1-d9709.firebasestorage.app",
    messagingSenderId: "1079245174971",
    appId: "1:1079245174971:web:5cf97450314555aa48119e"
  };

firebase.initializeApp(firebaseConfig)

function add_item(){
    var item = document.getElementById("enter").value
    firebase.database().ref("/").child(item).update({
        purpose: "hi"
    });
    firebase.database().ref("/").on("value", function(snapshot){
        document.getElementById("info").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey  = childSnapshot.key;
            item = childKey;
            x = "<p>#"+ item + "</p><hr>";
            document.getElementById("info").innerHTML = x;
             })
        })
}
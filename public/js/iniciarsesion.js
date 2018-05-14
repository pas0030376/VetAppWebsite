var config = {
    apiKey: "AIzaSyDlnON6UX9s3PP4b2TyH9AsWcRkDir0FYI",
    authDomain: "vetapp-98f0d.firebaseapp.com",
    databaseURL: "https://vetapp-98f0d.firebaseio.com",
    projectId: "vetapp-98f0d",
    storageBucket: "vetapp-98f0d.appspot.com",
    messagingSenderId: "683667408360"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

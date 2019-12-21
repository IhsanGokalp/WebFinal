 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZuk5Jgg_lOSnZU8eRKlH-00JvK98QZjQ",
    authDomain: "finalweb-8ff97.firebaseapp.com",
    databaseURL: "https://finalweb-8ff97.firebaseio.com",
    projectId: "finalweb-8ff97",
    storageBucket: "finalweb-8ff97.appspot.com",
    messagingSenderId: "196707181696",
    appId: "1:196707181696:web:fdb3fa6823aad020907265"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var messagesRef = firebase.database().ref('contactformmessages');
$('#contact-form').submit(function(e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: $('.fullname').val(),
      email: $('.email').val(),
      subject: $('.subject').val(),
      message: $('.message').val()
  });

  $('.success-message').show();

  $('#contact-form')[0].reset();
});
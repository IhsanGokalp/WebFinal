


  // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCezPhy7Vwtoe3W4hWU6xmEs76AvU-97UI",
  authDomain: "form-submit-c314b.firebaseapp.com",
  databaseURL: "https://form-submit-c314b.firebaseio.com",
  projectId: "form-submit-c314b",
  storageBucket: "form-submit-c314b.appspot.com",
  messagingSenderId: "486529953954",
  appId: "1:486529953954:web:ed5de350cfd56d62d967fb",
  measurementId: "G-SYMMDZT7M9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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
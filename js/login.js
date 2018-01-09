$(document).ready(function() {
  $('.modal').modal();
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAjNJLqG0zs1iy-VHo1NueO4DRQzEaDFdE",
    authDomain: "producto-final-8583e.firebaseapp.com",
    databaseURL: "https://producto-final-8583e.firebaseio.com",
    projectId: "producto-final-8583e",
    storageBucket: "producto-final-8583e.appspot.com",
    messagingSenderId: "452395891662"
  };

  firebase.initializeApp(config);

  /*$('.register').on('click', function(event) {
    var email = $('#email1').val();
    var password = $('#password1').val();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });

  $('.login').on('click', function(event) {
    var email2 = $('#email').val();
    var password2 = $('#password').val();
    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);// ...
    });
    //
  });*/

  $('#inigoogle').on('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      window.location.href = 'home.html';
      // var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
    });
  });
  // var $email = $('#email1');
  // var $password = $('#password1');

  /*$('.register').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    // window.location.href = 'login.html';
  });

  var $email1 = $('#email');
  var $password1 = $('#password');
  // variable booleanas para la activación del boton
  var validateEmail = false;
  var validatePassword = false;
  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.email);
  console.log(localStorage.password);

  $email1.on('input', function() {
    if ($(this).val() === localStorage.email) {
      // alert('pasa');
      validateEmail = true;
    }
  });

  $password1.on('input', function() {
    if ($(this).val() === localStorage.password) {
      // alert('esto tambien pasa');
      validatePassword = true;
    }
  });

  $('.login').on('click', function(event) {
    event.preventDefault();
    if (validateEmail && validatePassword) {
      window.location.href = 'home.html';
    }
  });*/
});

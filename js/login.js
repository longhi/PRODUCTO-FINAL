$(document).ready(function() {
  $('.modal').modal();

  var $email = $('#email1');
  var $password = $('#password1');

  $('.register').on('click', function(event) {
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
  });
});

$(document).ready(function () {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  var $tweetArea = $('.new-text');
  var $tweetBtn = $('#send');
  var $row = $('#content');


  $tweetBtn.on('click', function(){
    // event.preventDefault();
    if ($tweetArea.val()) {
      $row.prepend('<div class="new-item"><div class="row"><div class="col s10" id="new-container"></div></div></div>');
      var $text = $('#new-container');
      var $parrafo = $('<p/>', { 'class': 'paragraph' });
      $parrafo.text($tweetArea.val());
      $text.prepend($parrafo);
      $tweetArea.val('');
      $tweetArea.focus();
    }
  });
});

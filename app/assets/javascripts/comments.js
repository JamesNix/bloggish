(function(){
  
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#toggle_comments').click(toggleComments);
  }

  function toggleComments(){
    var $comments = $('#comments_wrapper');
    var $button_label = $('#toggle_comments');

    if($comments.hasClass('invisible')){
      $comments.removeClass('invisible');
      $button_label.text('Hide comments');
    } else {
      $comments.addClass('invisible');
      $button_label.text('Show comments');

    }
  }
})();
$(document).ready(function () {
  $('#btnAdd').click(function () {
    var toAdd = $('input[name=checkListItem]').val();
    $('.checkbox').append('<label for=""><input type="checkbox">' + toAdd + '</label><br>');
  });
});

/* Press enter Key
$(document).keypress(function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
    }
});
*/

$(document).ready(function () {
  $('#btnAdd').click(function () {
    var toAdd = $('input[name=checkListItem]').val();
    $('.checkbox').append('<input class="strikethrough" type="checkbox"><label for="">' + toAdd + '</label><br>');
  });
});

/* Press enter Key
$(document).keypress(function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
    }
});
*/

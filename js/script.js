$(document).ready(function () {
  $('#btnAdd').click(function () {
    var toAdd = $('input[name=checkListItem]').val();
    $('.list').append('<div class="name">' + toAdd + '</div>');
  })
})

/* Press enter Key
$(document).keypress(function(e) {
    if(e.which == 13) {
        alert('You pressed enter!');
    }
});
*/

$(document).ready(function() {
  var url = "https://flynn.boolean.careers/exercises/api/array/music";
  $.ajax (
    {
    'url' : url,
    'method' : "GET",
    'success' : function(data) {
    processData(data.response);
    },
    'error' : function(request, state, errors) {
    alert('Whoops, something wrong');
  }
});
// GENERE MUSICALE
$(document).on('change', 'select', function() {
    var genre = $('select').val();
    $('.cd').each(function(){
      if ($(this).find('.genre').text() == genre) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
function processData(cds) {
  for (var i = 0; i < cds.length; i++) {
    var cd = cds[i];
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var html = template(cd);
    $(".cds-container").append(html)
  }
}

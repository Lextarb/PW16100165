$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()

  $('.popover-dismiss').popover({
    trigger: 'focus'
  });


  $("#validatedCustomFile1").change(function () {
    readURL1(this);
  });
  function readURL1(input) {
    if (input.files[0].type == 'image/jpeg' || input.files[0].type == 'image/png') {
      $.each(jQuery(input)[0].files, function (i, file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#urlImage1').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      });
    } else {
      alert("Solo se permiten archivos .jpg y .png");
    }
  }


});

$(document).ready(function() {
    $('.submitform').on('click', function() {
      //
      if ($('#exampleInputEmail1').val()) {
        $('.alert').addClass('hide');
      } else {
        $('.alert').removeClass('hide');
      }
      //
    });
    $('#exampleInputEmail1').on('change', function() {
      if ($('#exampleInputEmail1').val()) {
        $('.alert').addClass('hide');
      } else {
        $('.alert').removeClass('hide');
      }
    });
  });
  
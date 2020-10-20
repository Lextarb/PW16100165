$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()

  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
});

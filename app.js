$(document).ready(function() {
  $(".container").scroll(function() {
    console.log("event fire");
    $(".animation-test").each(function() {
      var imagePos = $(this).offset().top;
      var imageHeight = $(this).height();
      var topOfWindow = $(".container").scrollTop();

      if (
        imagePos < topOfWindow + imageHeight &&
        imagePos + imageHeight > topOfWindow
      ) {
        $(this).addClass("slide-right");
      } else {
        $(this).removeClass("slide-right");
      }
    });
  });
});

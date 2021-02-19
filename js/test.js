$(document).ready(function () {
  $(window).scroll(function() {
    var cont = $('#facts');
    if (!cont.hasClass('visible')) {
      var wh = $(this).height();
      var topOffset = cont.offset().top - $(this).scrollTop();
      var visible = (topOffset <= wh) && (topOffset + cont.height() > 0);
      if (visible) {
        cont.addClass('visible');
        $('.fact_text_count').each(function () {
                   $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                    }, {
                     duration: 1500,
                     easing: 'swing',
                     step: function (now) {
                        $(this).text(Math.ceil(now));
                     }
                    });
                });
      }
        else{cont.removeClass('visible');}
    }
  });
});
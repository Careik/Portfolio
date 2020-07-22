{
  $(document).ready(function(){
              var scroll_pos = 0;
              $(document).scroll(function() {
                  scroll_pos = $(this).scrollTop();
                  if(scroll_pos < $(window).height()) {
                      $("#header").css('background', 'transparent');
                  } else {
                      $("#header").css('background 1s ease-in-out', 'rgba(36, 31, 32, 1.0)');
                  }
              });
          });

}

$(document).ready(function () {
    var scroll_pos = 0;
    $("#header").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#header").css('background-color', '#1A1A1A');
        } else {
            $("#header").css('background-color', 'red');
        }
        console.log(scroll_pos);
    });
});

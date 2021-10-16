$(function () {
    $(".registr-box ul").slideUp(0);
    $(".registr-box_input").click(function () {
        $(".registr-box ul").slideToggle(1000);
        $(".fa-caret-down").toggleClass("active");
    })
    $(".registr-box").click(function () {

    })
    $('.li1').click(function () {
        $(".registr-box ul").slideUp(1000);
        $('.registr-box_input').attr('placeholder', 'Designer');
        $(".fa-caret-down").removeClass("active");
    });
    $('.li2').click(function () {
        $(".registr-box ul").slideUp(1000);
        $('.registr-box_input').attr('placeholder', 'Marketing');
        $(".fa-caret-down").removeClass("active");
    });
    $('.li3').click(function () {
        $(".registr-box ul").slideUp(1000);
        $('.registr-box_input').attr('placeholder', 'Teacher');
        $(".fa-caret-down").removeClass("active");
    });
    $('.li4').click(function () {
        $(".registr-box ul").slideUp(1000);
        $('.registr-box_input').attr('placeholder', 'People');
        $(".fa-caret-down").removeClass("active");
    });

    $(".registr-box_input").keypress(function () {
        $(".registr-box ul").slideUp(1000);
        $(".fa-caret-down").removeClass("active");
    });
})
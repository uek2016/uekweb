$(function () {

    //高端课程
    $('.sgq-curriculum-box-link').each(function () {
        $(this).hover(function () {
            $(this).parent().children(".sgq-curriculum-content").css({display:"block"});
        },function () {
            $(this).parent().children(".sgq-curriculum-content").css({display:"none"});
        })
    })
    $(".sgq-curriculum-box").eq(0).css({color:"#ff3399"}).end().eq(1).css({color:"#27abff"}).end().eq(2).css({color:"#ff9933"}).end().eq(3).css({color:"#33cc33"});
    $(".sgq-curriculum-decorate").eq(0).css({background:"#ff3399"}).end().eq(1).css({background:"#27abff"}).end().eq(2).css({background:"#ff9933"}).end().eq(3).css({background:"#33cc33"});
 
})
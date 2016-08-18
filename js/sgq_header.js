$(function () {
    //导航
    $('.sgq-nav-item').each(function () {
        $(this).hover(function () {
            $(this).children(".sgq-nav-ch").css({"line-height":"16px","margin-top":"16px"}).end().children(".sgq-nav-en").css({display:"block"}).end().children(".sgq-nav-list").css({display:"block"});
        },function () {
            $(this).children(".sgq-nav-ch").css({"line-height":"64px","margin-top":"0"}).end().children(".sgq-nav-en").css({display:"none"}).end().children(".sgq-nav-list").css({display:"none"});
        })
    })
})

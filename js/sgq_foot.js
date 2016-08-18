$(function () {
    

$('.sgq-environment-link').hover(function () {
    $(this).parent().children(".sgq-environment-content").css({display:"block"}).end().children(".sgq-environment-con").css({display:"block"})
},function () {
    $(this).parent().children(".sgq-environment-content").css({display:"none"}).end().children(".sgq-environment-con").css({display:"none"})
})
})
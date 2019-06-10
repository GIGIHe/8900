$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    $(".btns .ydy").click(function(){
                $(this).parent().find("a").removeClass("cur")
                $(this).addClass('cur')
                $("html,body").animate({scrollTop:$(".zgm1").offset().top}, 500);
    })
        $(".btns .djm").click(function(){
                $(this).parent().find("a").removeClass("cur")
                $(this).addClass('cur')
                $("html,body").animate({scrollTop:$(".zgm2").offset().top}, 500);
    })
          $(".btns .xly").click(function(){
                $(this).parent().find("a").removeClass("cur")
                $(this).addClass('cur')
                $("html,body").animate({scrollTop:$(".zgm3").offset().top}, 500);
    })
          $(".tab_top span").each(function(index){
        $(this).click(function(){
            $(this).addClass('current').siblings('span').removeClass('current');
             $(".tab_con").hide().eq(index).fadeIn(200);
        })
    })
           // 关闭弹窗
    $(".form_close").click(function(){
        $(".form").hide();
        $(".mask").hide()
    })
     $(".zgm1_r,.zgm2_r a,.yy1,.yy2").click(function(){
        $(".form").fadeIn();
        $(".mask").fadeIn()
    })
})
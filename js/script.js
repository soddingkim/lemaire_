$(document).ready(function(){
    //cursor 갖고오기
    $(function() {

        var prefix = function() {

          var a = window.getComputedStyle(document.documentElement, ""),

            b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];

          return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"

        }();

        $(document).mousemove(function(e) {

          mouseX = e.pageX + 15;

          mouseY = e.pageY - $(window).scrollTop() + 15;

          $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');

        });

      })

    //cursor change
    $('.bl').hover(function(){
        $('.theBall-outer').addClass('zoom');
    },function(){
        $('.theBall-outer').removeClass('zoom');
    });
    $('.bl2').hover(function(){
        $('.theBall-outer').addClass('zoom2');
    },function(){
        $('.theBall-outer').removeClass('zoom2');
    });
    $('.bl3').hover(function(){
        $('.theBall-outer').addClass('zoom3');
    },function(){
        $('.theBall-outer').removeClass('zoom3');
    });





    //햄버거 버튼
    $('#hamburger').click(function(){
        console.log('hh')
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('#hamburger span').toggleClass('active');
        $('.header-logo svg').toggleClass('active');
    });

    // 미디어쿼리 안에 1800이상일때 풀페이지플러그인,서브메뉴 담기도록 처리
    media();
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth >= 1800){
            //fullpage
            new fullpage('#wrap', {
                scrollBar: true,
                normalScrollElements: '.sec-4,.sec-5,.footer',
                fitToSection: false,
            });

            //submenu
            $('.main-menu li').mouseenter(function(){
                let result = $(this).attr('data-alt');
                $('.sub-menu').removeClass('active');

                $(`#${result}`).addClass('active');

                //서브메뉴박스 보이게
                $('.sub-menu-box').addClass('active');

                //서브메뉴박스 마우스엔터(이벤트)시 헤더 색상 변경
                $('.header-logo svg').addClass('active');
                $('.header-area').addClass('active');
            });

            $('.sub-menu-box').mouseleave(function(){
                $(this).removeClass('active');

                //서브메뉴박스 마우스리브시 헤더 색상 다시돌리기
                $('.header-logo svg').removeClass('active');
                $('.header-area').removeClass('active');
                
            });


        }else{
            //햄버거 버튼 추가
        }
    }

    //스크롤위치값에 맞춰 클래스제어
    $(window).scroll(function(){
        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const sec5 = $('.sec-5').offset().top;

        const sct = $(window).scrollTop();

        if(sct >= banner && sct < sec1){
            $('.header-logo svg').removeClass('active')
            $('.header-logo').removeClass('active')
            $('.header-area').removeClass('active')
        }else if(sct >= sec1 && sct < sec2){
            $('.header-logo svg').addClass('active')
            $('.header-logo').addClass('active')
            $('.header-area').addClass('active')
        }else if(sct >= sec2 && sct < sec4){
            $('.header-logo svg').removeClass('active')
            $('.header-area').removeClass('active')
        }else if(sct >= sec5){
            $('.header-logo svg').addClass('active')
            $('.header-area').addClass('active')
        }

    });

    //sec-4 swiper
    var swiper = new Swiper (".mySwiper",{
        direction:"vertical",
        slidesPerview: 'auto',
        speed: 1500,
        loop:true,
        autoplay:{
            delay:1500,
            disableOnInteraction: false,
        }
    })

    //상단이동 버튼
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });
    


    
});
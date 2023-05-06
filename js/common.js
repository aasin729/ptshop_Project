var deviceSize = 1024 

function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}

var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO 

if(scD>0){
    deviceSize = deviceSize - scD 
}


let ww = $(window).width()
if(ww>deviceSize){
    $('html').addClass('pc')
}else{
    $('html').addClass('mobile')
}


$(window).on('resize', function(){
    let ww = $(window).width()
    if(ww>deviceSize && !$('html').hasClass('pc')){
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    }else if(ww<=deviceSize && !$('html').hasClass('mobile')){
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }     
})


$(window).on('load', function(){

    // 새로고침하면 현재 위치한 스크롤바 위치를 맨위로 
    $('html').animate({
        scrollTop:0
    }, 100)

})


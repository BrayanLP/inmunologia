//________________________________________________________________________________________________//
//------------------------------------ [ SEO MARKETING PERU ] -------------------------------------//

$( document ).ready(function() {

    //----------- [ MENU ] --------------//
    /*$('#slide-out').find('li').on('click',function(){
       setTimeout(function(){
                     $('#slide-out').css('transition','0.3s');
                     $('#slide-out').css('left','-250px');
                     $('#sidenav-overlay').hide();
       },1500);
      
    });*/
    //----------- [ FIN - MENU ] --------------//

    //-------------- [ MenuTop ] --------------//
    $(window).scroll(function(){
        
      if ( $(this).scrollTop() > 0 ){
        $('.cont-menu').addClass('cont-menu2');
        $('.slider').addClass('slider2');
      } else {
        $('.cont-menu').removeClass('cont-menu2');
        $('.slider').removeClass('slider2');
      }

    });
    //-------------- [ Fin MenuTop ] --------------//

    //-------------- [ Slider] --------------//
    jQuery(function(){
      jQuery('#camera_wrap_1').camera({
        alignment: 'center',
        thumbnails: false, //MiniFoto
        time: 1500, //Tiempo
        loader: 'bar', //pie, bar tipo de cargador
        loaderColor: '#000000', //ColorLoader
        loaderBgColor: '#0000000', //ColorBackGroundLoader
        fx: 'topLeftBottomRight', //Efecto
        mobileFx: 'topLeftBottomRight', //Efecto Mobile
        hover: false, //Stop Hover
        height: '45%', //Altura
        minHeight: 'auto', //Altura Minima
        autoAdvance: true, //autoplay
        navigation: false, //arrows
        pagination: true, //dots
        playPause: false, //play pause hiden
        loaderPadding: 0, //loder bar
        loaderOpacity:0.5, //Opacidar Bar Loader
        barDirection: 'leftToRight', //direccion Bar Loader
        barPosition: 'bottom', //'bottom', 'left', 'top', 'right'
      });
    });
    //-------------- [ Fin Slider ] --------------//

    //-------------- [Scroll] --------------//
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox/') > -1;
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf('opera/') > -1;
    var is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (isMobile.any()) {
    } else {
        /* NiceScroll proys */
    $("html").niceScroll({
        touchbehavior:false,
        cursorcolor:"#0E2346",
        cursoropacitymax:1,
        cursorborder:"0px dotted #ffffff",
        cursorwidth:16,
        cursorborderradius:"7.5px",
        background:"#ffffff",
        zindex:9999
       });
        switch (true) {
            case (is_chrome):
                break;
            case (is_firefox):
                break;
            case (is_safari):
                break;
            case (is_opera):
                break;
            default:
                $('body').addClass('iexplorer');
                break;
        }
  
    }
    //-------------- [Fin Scroll] --------------//
 

 

    //-------------- [ Validator ] --------------//
      $("#ok").hide();

      $("#formid").validate({
          rules: {
            nombres: { required: true, minlength: 2},
            apellidos: { required: true, minlength: 2},
            telefono: { required:true, minlength: 7, number:true},
            correo: { required: true, email: true},
            mensaje: { required:true, minlength: 4}
          },
          messages: {
            nombres: "",
            apellidos: "",
            telefono: "",
            correo: "",
            mensaje: "",
          },

      });

    //-------------- [ FIN Validator ] --------------//

    //-------------- [ Efecto de secciones ] --------------//
 
    //-------------- [ FIN Efecto de secciones ] --------------//
 

});
$(function() {
     var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("ul.side-nav li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});

//--------------------------------- [ SEO MARKETING PERU - FIN ] ---------------------------------//
//______________________________________________________________________________________//


$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>0?($(".cont-menu").addClass("cont-menu2"),$(".slider").addClass("slider2")):($(".cont-menu").removeClass("cont-menu2"),$(".slider").removeClass("slider2"))}),jQuery(function(){jQuery("#camera_wrap_1").camera({alignment:"center",thumbnails:!1,time:1500,loader:"bar",loaderColor:"#000000",loaderBgColor:"#0000000",fx:"topLeftBottomRight",mobileFx:"topLeftBottomRight",hover:!1,height:"45%",minHeight:"auto",autoAdvance:!0,navigation:!1,pagination:!0,playPause:!1,loaderPadding:0,loaderOpacity:.5,barDirection:"leftToRight",barPosition:"bottom"})});var e=navigator.userAgent.toLowerCase().indexOf("chrome/")>-1,r=navigator.userAgent.toLowerCase().indexOf("firefox/")>-1,o=navigator.userAgent.toLowerCase().indexOf("safari/")>-1,a=navigator.userAgent.toLowerCase().indexOf("opera/")>-1,n=(navigator.userAgent.toLowerCase().indexOf("msie")>-1,{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.Android()||n.BlackBerry()||n.iOS()||n.Opera()||n.Windows()}});if(n.any());else switch($("html").niceScroll({touchbehavior:!1,cursorcolor:"#0E2346",cursoropacitymax:1,cursorborder:"0px dotted #ffffff",cursorwidth:16,cursorborderradius:"7.5px",background:"#ffffff",zindex:9999}),!0){case e:break;case r:break;case o:break;case a:break;default:$("body").addClass("iexplorer")}$("#ok").hide(),$("#formid").validate({rules:{nombres:{required:!0,minlength:2},apellidos:{required:!0,minlength:2},telefono:{required:!0,minlength:7,number:!0},correo:{required:!0,email:!0},mensaje:{required:!0,minlength:4}},messages:{nombres:"",apellidos:"",telefono:"",correo:"",mensaje:""}})}),$(function(){var e=window.location.href.substr(window.location.href.lastIndexOf("/")+1);$("ul.side-nav li a").each(function(){($(this).attr("href")==e||""==$(this).attr("href"))&&$(this).addClass("active")})});
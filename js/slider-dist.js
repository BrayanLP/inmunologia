!function(e){e.fn.camera=function(t){function a(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?!0:void 0}function i(){var t=e(R).width();e("li",R).removeClass("camera_visThumb"),e("li",R).each(function(){var a=e(this).position(),i=e("ul",R).outerWidth(),r=e("ul",R).offset().left,s=e("> div",R).offset().left,n=s-r;n>0?e(".camera_prevThumbs",J).removeClass("hideNav"):e(".camera_prevThumbs",J).addClass("hideNav"),i-n>t?e(".camera_nextThumbs",J).removeClass("hideNav"):e(".camera_nextThumbs",J).addClass("hideNav");var o=a.left,c=a.left+e(this).width();t>=c-n&&o-n>=0&&e(this).addClass("camera_visThumb")})}function r(){function a(){if(f=h.width(),-1!=t.height.indexOf("%")){var a=Math.round(f/(100/parseFloat(t.height)));g=""!=t.minHeight&&a<parseFloat(t.minHeight)?parseFloat(t.minHeight):a,h.css({height:g})}else"auto"==t.height?g=h.height():(g=parseFloat(t.height),h.css({height:g}));e(".camerarelative",F).css({width:f,height:g}),e(".imgLoaded",F).each(function(){var a,i,r=e(this),s=r.attr("width"),n=r.attr("height"),o=(r.index(),r.attr("data-alignment")),c=r.attr("data-portrait");if(("undefined"==typeof o||o===!1||""===o)&&(o=t.alignment),("undefined"==typeof c||c===!1||""===c)&&(c=t.portrait),0==c||"false"==c)if(f/g>s/n){var l=f/s,d=.5*Math.abs(g-n*l);switch(o){case"topLeft":a=0;break;case"topCenter":a=0;break;case"topRight":a=0;break;case"centerLeft":a="-"+d+"px";break;case"center":a="-"+d+"px";break;case"centerRight":a="-"+d+"px";break;case"bottomLeft":a="-"+2*d+"px";break;case"bottomCenter":a="-"+2*d+"px";break;case"bottomRight":a="-"+2*d+"px"}r.css({height:n*l,"margin-left":0,"margin-right":0,"margin-top":a,position:"absolute",visibility:"visible",width:f})}else{var l=g/n,d=.5*Math.abs(f-s*l);switch(o){case"topLeft":i=0;break;case"topCenter":i="-"+d+"px";break;case"topRight":i="-"+2*d+"px";break;case"centerLeft":i=0;break;case"center":i="-"+d+"px";break;case"centerRight":i="-"+2*d+"px";break;case"bottomLeft":i=0;break;case"bottomCenter":i="-"+d+"px";break;case"bottomRight":i="-"+2*d+"px"}r.css({height:g,"margin-left":i,"margin-right":i,"margin-top":0,position:"absolute",visibility:"visible",width:s*l})}else if(f/g>s/n){var l=g/n,d=.5*Math.abs(f-s*l);switch(o){case"topLeft":i=0;break;case"topCenter":i=d+"px";break;case"topRight":i=2*d+"px";break;case"centerLeft":i=0;break;case"center":i=d+"px";break;case"centerRight":i=2*d+"px";break;case"bottomLeft":i=0;break;case"bottomCenter":i=d+"px";break;case"bottomRight":i=2*d+"px"}r.css({height:g,"margin-left":i,"margin-right":i,"margin-top":0,position:"absolute",visibility:"visible",width:s*l})}else{var l=f/s,d=.5*Math.abs(g-n*l);switch(o){case"topLeft":a=0;break;case"topCenter":a=0;break;case"topRight":a=0;break;case"centerLeft":a=d+"px";break;case"center":a=d+"px";break;case"centerRight":a=d+"px";break;case"bottomLeft":a=2*d+"px";break;case"bottomCenter":a=2*d+"px";break;case"bottomRight":a=2*d+"px"}r.css({height:n*l,"margin-left":0,"margin-right":0,"margin-top":a,position:"absolute",visibility:"visible",width:f})}})}var i;1==H?(clearTimeout(i),i=setTimeout(a,200)):a(),H=!0}function s(){e("iframe",m).each(function(){e(".camera_caption",m).show();var a=e(this),i=a.attr("data-src");a.attr("src",i);var r=t.imagePath+"blank.gif",s=new Image;if(s.src=r,-1!=t.height.indexOf("%")){var n=Math.round(f/(100/parseFloat(t.height)));g=""!=t.minHeight&&n<parseFloat(t.minHeight)?parseFloat(t.minHeight):n}else g="auto"==t.height?h.height():parseFloat(t.height);a.after(e(s).attr({"class":"imgFake",width:f,height:g}));var o=a.clone();a.remove(),e(s).bind("click",function(){"absolute"==e(this).css("position")?(e(this).remove(),-1!=i.indexOf("vimeo")||-1!=i.indexOf("youtube")?-1!=i.indexOf("?")?autoplay="&autoplay=1":autoplay="?autoplay=1":-1!=i.indexOf("dailymotion")&&(-1!=i.indexOf("?")?autoplay="&autoPlay=1":autoplay="?autoPlay=1"),o.attr("src",i+autoplay),V=!0):(e(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(o),o.css({position:"absolute",top:0,left:0,zIndex:9}))})})}function n(e){for(var t,a,i=e.length;i;t=parseInt(Math.random()*i),a=e[--i],e[i]=e[t],e[t]=a);return e}function o(){if(e(R).length&&!e(L).length){var t,a=e(R).outerWidth(),r=(e("ul > li",R).outerWidth(),e("li.cameracurrent",R).length?e("li.cameracurrent",R).position():""),s=e("ul > li",R).length*e("ul > li",R).outerWidth(),n=e("ul",R).offset().left,o=e("> div",R).offset().left;t=0>n?"-"+(o-n):o-n,1==ie&&(e("ul",R).width(e("ul > li",R).length*e("ul > li",R).outerWidth()),e(R).length&&!e(L).lenght&&h.css({marginBottom:e(R).outerHeight()}),i(),e("ul",R).width(e("ul > li",R).length*e("ul > li",R).outerWidth()),e(R).length&&!e(L).lenght&&h.css({marginBottom:e(R).outerHeight()})),ie=!1;var c=e("li.cameracurrent",R).length?r.left:"",l=e("li.cameracurrent",R).length?r.left+e("li.cameracurrent",R).outerWidth():"";c<e("li.cameracurrent",R).outerWidth()&&(c=0),l-t>a?s>c+a?e("ul",R).animate({"margin-left":"-"+c+"px"},500,i):e("ul",R).animate({"margin-left":"-"+(e("ul",R).outerWidth()-a)+"px"},500,i):0>c-t?e("ul",R).animate({"margin-left":"-"+c+"px"},500,i):(e("ul",R).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(i,100))}}function c(){Z=0;var a=e(".camera_bar_cont",J).width(),i=e(".camera_bar_cont",J).height();if("pie"!=p)switch(K){case"leftToRight":e("#"+v).css({right:a});break;case"rightToLeft":e("#"+v).css({left:a});break;case"topToBottom":e("#"+v).css({bottom:i});break;case"bottomToTop":e("#"+v).css({top:i})}else te.clearRect(0,0,t.pieDiameter,t.pieDiameter)}function l(i){b.addClass("camerasliding"),V=!1;var d=parseFloat(e("div.cameraSlide.cameracurrent",F).index());if(i>0)var u=i-1;else if(d==B-1)var u=0;else var u=d+1;var x=e(".cameraSlide:eq("+u+")",F),y=e(".cameraSlide:eq("+(u+1)+")",F).addClass("cameranext");if(d!=u+1&&y.hide(),e(".cameraContent",m).fadeOut(600),e(".camera_caption",m).show(),e(".camerarelative",x).append(e("> div ",b).eq(u).find("> div.camera_effected")),e(".camera_target_content .cameraContent:eq("+u+")",h).append(e("> div ",b).eq(u).find("> div")),e(".imgLoaded",x).length){if(T.length>u+1&&!e(".imgLoaded",y).length){var C=T[u+1],w=new Image;w.src=C+"?"+(new Date).getTime(),y.prepend(e(w).attr("class","imgLoaded").css("visibility","hidden")),w.onload=function(){Fe=w.naturalWidth,xe=w.naturalHeight,e(w).attr("data-alignment",E[u+1]).attr("data-portrait",M[u+1]),e(w).attr("width",Fe),e(w).attr("height",xe),r()}}t.onLoaded.call(this),e(".camera_loader",h).is(":visible")?e(".camera_loader",h).fadeOut(400):(e(".camera_loader",h).css({visibility:"hidden"}),e(".camera_loader",h).fadeOut(400,function(){e(".camera_loader",h).css({visibility:"visible"})}));var k,_,D,S,A,q=t.rows,O=t.cols,P=1,z=0,H=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0,1==t.opacityOnGrid?opacityOnGrid=0:opacityOnGrid=1;var W=e(" > div",b).eq(u).attr("data-fx");if(S=a()&&""!=t.mobileFx&&"default"!=t.mobileFx?t.mobileFx:"undefined"!=typeof W&&W!==!1&&"default"!==W?W:t.fx,"random"==S?(S=n(H),S=S[0]):(S=S,S.indexOf(",")>0&&(S=S.replace(/ /g,""),S=S.split(","),S=n(S),S=S[0])),dataEasing=e(" > div",b).eq(u).attr("data-easing"),mobileEasing=e(" > div",b).eq(u).attr("data-mobileEasing"),A=a()&&""!=t.mobileEasing&&"default"!=t.mobileEasing?"undefined"!=typeof mobileEasing&&mobileEasing!==!1&&"default"!==mobileEasing?mobileEasing:t.mobileEasing:"undefined"!=typeof dataEasing&&dataEasing!==!1&&"default"!==dataEasing?dataEasing:t.easing,k=e(" > div",b).eq(u).attr("data-slideOn"),"undefined"!=typeof k&&k!==!1)j=k;else if("random"==t.slideOn){var j=new Array("next","prev");j=n(j),j=j[0]}else j=t.slideOn;var Q=e(" > div",b).eq(u).attr("data-time");_="undefined"!=typeof Q&&Q!==!1&&""!==Q?parseFloat(Q):t.time;var G=e(" > div",b).eq(u).attr("data-transPeriod");switch(D="undefined"!=typeof G&&G!==!1&&""!==G?parseFloat(G):t.transPeriod,e(b).hasClass("camerastarted")||(S="simpleFade",j="next",A="",D=400,e(b).addClass("camerastarted")),S){case"simpleFade":O=1,q=1;break;case"curtainTopLeft":O=0==t.slicedCols?t.cols:t.slicedCols,q=1;break;case"curtainTopRight":O=0==t.slicedCols?t.cols:t.slicedCols,q=1;break;case"curtainBottomLeft":O=0==t.slicedCols?t.cols:t.slicedCols,q=1;break;case"curtainBottomRight":O=0==t.slicedCols?t.cols:t.slicedCols,q=1;break;case"curtainSliceLeft":O=0==t.slicedCols?t.cols:t.slicedCols,q=1;break;case"curtainSliceRight":O=0==t.slicedCols?t.cols:t.slicedCols,q=1;break;case"blindCurtainTopLeft":q=0==t.slicedRows?t.rows:t.slicedRows,O=1;break;case"blindCurtainTopRight":q=0==t.slicedRows?t.rows:t.slicedRows,O=1;break;case"blindCurtainBottomLeft":q=0==t.slicedRows?t.rows:t.slicedRows,O=1;break;case"blindCurtainBottomRight":q=0==t.slicedRows?t.rows:t.slicedRows,O=1;break;case"blindCurtainSliceTop":q=0==t.slicedRows?t.rows:t.slicedRows,O=1;break;case"blindCurtainSliceBottom":q=0==t.slicedRows?t.rows:t.slicedRows,O=1;break;case"stampede":z="-"+D;break;case"mosaic":z=t.gridDifference;break;case"mosaicReverse":z=t.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":z=t.gridDifference,P=1.7;break;case"mosaicSpiralReverse":z=t.gridDifference,P=1.7;break;case"topLeftBottomRight":z=t.gridDifference,P=6;break;case"bottomRightTopLeft":z=t.gridDifference,P=6;break;case"bottomLeftTopRight":z=t.gridDifference,P=6;break;case"topRightBottomLeft":z=t.gridDifference,P=6;break;case"scrollLeft":O=1,q=1;break;case"scrollRight":O=1,q=1;break;case"scrollTop":O=1,q=1;break;case"scrollBottom":O=1,q=1;break;case"scrollHorz":O=1,q=1}for(var X,Y,ae=0,ie=q*O,re=f-Math.floor(f/O)*O,se=g-Math.floor(g/q)*q,ne=0,oe=0,ce=new Array,le=new Array,de=new Array;ie>ae;){ce.push(ae),le.push(ae),I.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var he=e(".cameraappended:eq("+ae+")",F);"scrollLeft"==S||"scrollRight"==S||"scrollTop"==S||"scrollBottom"==S||"scrollHorz"==S?U.eq(u).clone().show().appendTo(he):"next"==j?U.eq(u).clone().show().appendTo(he):U.eq(d).clone().show().appendTo(he),X=re>ae%O?1:0,ae%O==0&&(ne=0),Y=Math.floor(ae/O)<se?1:0,he.css({height:Math.floor(g/q+Y+1),left:ne,top:oe,width:Math.floor(f/O+X+1)}),e("> .cameraSlide",he).css({height:g,"margin-left":"-"+ne+"px","margin-top":"-"+oe+"px",width:f}),ne=ne+he.width()-1,ae%O==O-1&&(oe=oe+he.height()-1),ae++}switch(S){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":ce=ce.reverse();break;case"curtainBottomRight":ce=ce.reverse();break;case"curtainSliceRight":ce=ce.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":ce=ce.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":ce=ce.reverse();break;case"blindCurtainSliceBottom":ce=ce.reverse();break;case"stampede":ce=n(ce);break;case"mosaic":break;case"mosaicReverse":ce=ce.reverse();break;case"mosaicRandom":ce=n(ce);break;case"mosaicSpiral":var me,ue,pe,fe=q/2,ge=0;for(pe=0;fe>pe;pe++){for(ue=pe,me=pe;O-pe-1>me;me++)de[ge++]=ue*O+me;for(me=O-pe-1,ue=pe;q-pe-1>ue;ue++)de[ge++]=ue*O+me;for(ue=q-pe-1,me=O-pe-1;me>pe;me--)de[ge++]=ue*O+me;for(me=pe,ue=q-pe-1;ue>pe;ue--)de[ge++]=ue*O+me}ce=de;break;case"mosaicSpiralReverse":var me,ue,pe,fe=q/2,ge=ie-1;for(pe=0;fe>pe;pe++){for(ue=pe,me=pe;O-pe-1>me;me++)de[ge--]=ue*O+me;for(me=O-pe-1,ue=pe;q-pe-1>ue;ue++)de[ge--]=ue*O+me;for(ue=q-pe-1,me=O-pe-1;me>pe;me--)de[ge--]=ue*O+me;for(me=pe,ue=q-pe-1;ue>pe;ue--)de[ge--]=ue*O+me}ce=de;break;case"topLeftBottomRight":for(var ue=0;q>ue;ue++)for(var me=0;O>me;me++)de.push(me+ue);le=de;break;case"bottomRightTopLeft":for(var ue=0;q>ue;ue++)for(var me=0;O>me;me++)de.push(me+ue);le=de.reverse();break;case"bottomLeftTopRight":for(var ue=q;ue>0;ue--)for(var me=0;O>me;me++)de.push(me+ue);le=de;break;case"topRightBottomLeft":for(var ue=0;q>ue;ue++)for(var me=O;me>0;me--)de.push(me+ue);le=de}e.each(ce,function(a,i){function r(){if(e(this).addClass("cameraeased"),e(".cameraeased",F).length>=0&&e(R).css({visibility:"visible"}),e(".cameraeased",F).length==ie){o(),e(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",m).each(function(){e(this).css("visibility","hidden")}),U.eq(u).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent"),U.eq(d).css("z-index","1").removeClass("cameracurrent"),e(".cameraContent",m).eq(u).addClass("cameracurrent"),d>=0&&e(".cameraContent",m).eq(d).removeClass("cameracurrent"),t.onEndTransition.call(this),"hide"!=e("> div",b).eq(u).attr("data-video")&&e(".cameraContent.cameracurrent .imgFake",m).length&&e(".cameraContent.cameracurrent .imgFake",m).click();var a=U.eq(u).find(".fadeIn").length,i=e(".cameraContent",m).eq(u).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;0!=a&&e(".cameraSlide.cameracurrent .fadeIn",m).each(function(){if(""!=e(this).attr("data-easing"))var t=e(this).attr("data-easing");else var t=A;var i=e(this);if("undefined"==typeof i.attr("data-outerWidth")||i.attr("data-outerWidth")===!1||""===i.attr("data-outerWidth")){var r=i.outerWidth();i.attr("data-outerWidth",r)}else var r=i.attr("data-outerWidth");if("undefined"==typeof i.attr("data-outerHeight")||i.attr("data-outerHeight")===!1||""===i.attr("data-outerHeight")){var s=i.outerHeight();i.attr("data-outerHeight",s)}else var s=i.attr("data-outerHeight");var n=i.position(),o=(n.left,n.top,i.attr("class")),c=i.index();i.parents(".camerarelative").outerHeight(),i.parents(".camerarelative").outerWidth();-1!=o.indexOf("fadeIn")?i.animate({opacity:0},0).css("visibility","visible").delay(_/a*(.1*(c-1))).animate({opacity:1},_/a*.15,t):i.css("visibility","visible")}),e(".cameraContent.cameracurrent",m).show(),0!=i&&e(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",m).each(function(){if(""!=e(this).attr("data-easing"))var t=e(this).attr("data-easing");else var t=A;var a=e(this),r=a.position(),s=(r.left,r.top,a.attr("class")),n=a.index(),o=a.outerHeight();-1!=s.indexOf("moveFromLeft")?(a.css({left:"-"+f+"px",right:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({left:r.left},_/i*.15,t)):-1!=s.indexOf("moveFromRight")?(a.css({left:f+"px",right:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({left:r.left},_/i*.15,t)):-1!=s.indexOf("moveFromTop")?(a.css({top:"-"+g+"px",bottom:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({top:r.top},_/i*.15,t,function(){a.css({top:"auto",bottom:0})})):-1!=s.indexOf("moveFromBottom")?(a.css({top:g+"px",bottom:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({top:r.top},_/i*.15,t)):-1!=s.indexOf("fadeFromLeft")?(a.animate({opacity:0},0).css({left:"-"+f+"px",right:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({left:r.left,opacity:1},_/i*.15,t)):-1!=s.indexOf("fadeFromRight")?(a.animate({opacity:0},0).css({left:f+"px",right:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({left:r.left,opacity:1},_/i*.15,t)):-1!=s.indexOf("fadeFromTop")?(a.animate({opacity:0},0).css({top:"-"+g+"px",bottom:"auto"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({top:r.top,opacity:1},_/i*.15,t,function(){a.css({top:"auto",bottom:0})})):-1!=s.indexOf("fadeFromBottom")?(a.animate({opacity:0},0).css({bottom:"-"+o+"px"}),a.css("visibility","visible").delay(_/i*(.1*(n-1))).animate({bottom:"0",opacity:1},_/i*.15,t)):-1!=s.indexOf("fadeIn")?a.animate({opacity:0},0).css("visibility","visible").delay(_/i*(.1*(n-1))).animate({opacity:1},_/i*.15,t):a.css("visibility","visible")}),e(".cameraappended",F).remove(),b.removeClass("camerasliding"),U.eq(d).hide();var r,n=e(".camera_bar_cont",J).width(),h=e(".camera_bar_cont",J).height();r="pie"!=p?.05:.005,e("#"+v).animate({opacity:t.loaderOpacity},200),N=setInterval(function(){if(b.hasClass("stopped")&&clearInterval(N),"pie"!=p)switch(1.002>=Z&&!b.hasClass("stopped")&&!b.hasClass("paused")&&!b.hasClass("hovered")?Z+=r:1>=Z&&(b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("stopped")||b.hasClass("hovered"))?Z=Z:b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("hovered")||(clearInterval(N),s(),e("#"+v).animate({opacity:0},200,function(){clearTimeout($),$=setTimeout(c,x),l(),t.onStartLoading.call(this)})),K){case"leftToRight":e("#"+v).animate({right:n-n*Z},_*r,"linear");break;case"rightToLeft":e("#"+v).animate({left:n-n*Z},_*r,"linear");break;case"topToBottom":e("#"+v).animate({bottom:h-h*Z},_*r,"linear");break;case"bottomToTop":e("#"+v).animate({bottom:h-h*Z},_*r,"linear")}else ee=Z,te.clearRect(0,0,t.pieDiameter,t.pieDiameter),te.globalCompositeOperation="destination-over",te.beginPath(),te.arc(t.pieDiameter/2,t.pieDiameter/2,t.pieDiameter/2-t.loaderStroke,0,2*Math.PI,!1),te.lineWidth=t.loaderStroke,te.strokeStyle=t.loaderBgColor,te.stroke(),te.closePath(),te.globalCompositeOperation="source-over",te.beginPath(),te.arc(t.pieDiameter/2,t.pieDiameter/2,t.pieDiameter/2-t.loaderStroke,0,2*Math.PI*ee,!1),te.lineWidth=t.loaderStroke-2*t.loaderPadding,te.strokeStyle=t.loaderColor,te.stroke(),te.closePath(),1.002>=Z&&!b.hasClass("stopped")&&!b.hasClass("paused")&&!b.hasClass("hovered")?Z+=r:1>=Z&&(b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("hovered"))?Z=Z:b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("hovered")||(clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",J).animate({opacity:0},200,function(){clearTimeout($),$=setTimeout(c,x),l(),t.onStartLoading.call(this)}))},_*r)}}switch(X=re>i%O?1:0,i%O==0&&(ne=0),Y=Math.floor(i/O)<se?1:0,S){case"simpleFade":height=g,width=f,opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor(f/O+X+1),marginTop="-"+Math.floor(g/q+Y+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor(f/O+X+1),marginTop="-"+Math.floor(g/q+Y+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor(f/O+X+1),marginTop=Math.floor(g/q+Y+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor(f/O+X+1),marginTop=Math.floor(g/q+Y+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor(f/O+X+1),i%2==0?marginTop=Math.floor(g/q+Y+1)+"px":marginTop="-"+Math.floor(g/q+Y+1)+"px";break;case"curtainSliceRight":height=0,width=Math.floor(f/O+X+1),i%2==0?marginTop=Math.floor(g/q+Y+1)+"px":marginTop="-"+Math.floor(g/q+Y+1)+"px";break;case"blindCurtainTopLeft":height=Math.floor(g/q+Y+1),width=0,marginLeft="-"+Math.floor(f/O+X+1)+"px";break;case"blindCurtainTopRight":height=Math.floor(g/q+Y+1),width=0,marginLeft=Math.floor(f/O+X+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor(g/q+Y+1),width=0,marginLeft="-"+Math.floor(f/O+X+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor(g/q+Y+1),width=0,marginLeft=Math.floor(f/O+X+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor(g/q+Y+1),width=0,i%2==0?marginLeft="-"+Math.floor(f/O+X+1)+"px":marginLeft=Math.floor(f/O+X+1)+"px";break;case"blindCurtainSliceTop":height=Math.floor(g/q+Y+1),width=0,i%2==0?marginLeft="-"+Math.floor(f/O+X+1)+"px":marginLeft=Math.floor(f/O+X+1)+"px";break;case"stampede":height=0,width=0,marginLeft=.2*f*(a%O-(O-Math.floor(O/2)))+"px",marginTop=.2*g*(Math.floor(a/O)+1-(q-Math.floor(q/2)))+"px";break;case"mosaic":height=0,width=0;break;case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(f/O+X+1)+"px",marginTop=Math.floor(g/q+Y+1)+"px";break;case"mosaicRandom":height=0,width=0,marginLeft=.5*Math.floor(f/O+X+1)+"px",marginTop=.5*Math.floor(g/q+Y+1)+"px";break;case"mosaicSpiral":height=0,width=0,marginLeft=.5*Math.floor(f/O+X+1)+"px",marginTop=.5*Math.floor(g/q+Y+1)+"px";break;case"mosaicSpiralReverse":height=0,width=0,marginLeft=.5*Math.floor(f/O+X+1)+"px",marginTop=.5*Math.floor(g/q+Y+1)+"px";break;case"topLeftBottomRight":height=0,width=0;break;case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(f/O+X+1)+"px",marginTop=Math.floor(g/q+Y+1)+"px";break;case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(g/q+Y+1)+"px";break;case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(f/O+X+1)+"px",marginTop=0;break;case"scrollRight":height=g,width=f,marginLeft=-f;break;case"scrollLeft":height=g,width=f,marginLeft=f;break;case"scrollTop":height=g,width=f,marginTop=g;break;case"scrollBottom":height=g,width=f,marginTop=-g;break;case"scrollHorz":height=g,width=f,0==d&&u==B-1?marginLeft=-f:u>d||d==B-1&&0==u?marginLeft=f:marginLeft=-f}var n=e(".cameraappended:eq("+i+")",F);"undefined"!=typeof N&&(clearInterval(N),clearTimeout($),$=setTimeout(c,D+z)),e(L).length&&(e(".camera_pag li",h).removeClass("cameracurrent"),e(".camera_pag li",h).eq(u).addClass("cameracurrent")),e(R).length&&(e("li",R).removeClass("cameracurrent"),e("li",R).eq(u).addClass("cameracurrent"),e("li",R).not(".cameracurrent").find("img").animate({opacity:.5},0),e("li.cameracurrent img",R).animate({opacity:1},0),e("li",R).hover(function(){e("img",this).stop(!0,!1).animate({opacity:1},150)},function(){e(this).hasClass("cameracurrent")||e("img",this).stop(!0,!1).animate({opacity:.5},150)}));var x=parseFloat(D)+parseFloat(z);"scrollLeft"==S||"scrollRight"==S||"scrollTop"==S||"scrollBottom"==S||"scrollHorz"==S?(t.onStartTransition.call(this),x=0,n.delay((D+z)/ie*le[a]*P*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(g/q+Y+1),"margin-top":0,"margin-left":0,width:Math.floor(f/O+X+1)},D-z,A,r),U.eq(d).delay((D+z)/ie*le[a]*P*.5).animate({"margin-left":-1*marginLeft,"margin-top":-1*marginTop},D-z,A,function(){e(this).css({"margin-top":0,"margin-left":0})})):(t.onStartTransition.call(this),x=parseFloat(D)+parseFloat(z),"next"==j?n.delay((D+z)/ie*le[a]*P*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(g/q+Y+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(f/O+X+1)},D-z,A,r):(U.eq(u).show().css("z-index","999").addClass("cameracurrent"),U.eq(d).css("z-index","1").removeClass("cameracurrent"),e(".cameraContent",m).eq(u).addClass("cameracurrent"),e(".cameraContent",m).eq(d).removeClass("cameracurrent"),n.delay((D+z)/ie*le[a]*P*.5).css({display:"block",height:Math.floor(g/q+Y+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(f/O+X+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},D-z,A,r)))})}else{var ve=T[u],be=new Image;be.src=ve+"?"+(new Date).getTime(),x.css("visibility","hidden"),x.prepend(e(be).attr("class","imgLoaded").css("visibility","hidden"));var Fe,xe;e(be).get(0).complete&&"0"!=Fe&&"0"!=xe&&"undefined"!=typeof Fe&&Fe!==!1&&"undefined"!=typeof xe&&xe!==!1||(e(".camera_loader",h).delay(500).fadeIn(400),be.onload=function(){Fe=be.naturalWidth,xe=be.naturalHeight,e(be).attr("data-alignment",E[u]).attr("data-portrait",M[u]),e(be).attr("width",Fe),e(be).attr("height",xe),F.find(".cameraSlide_"+u).hide().css("visibility","visible"),r(),l(u+1)})}}var d={alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"img/",hover:!0,loader:"bar",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}};e.support.borderRadius=!1,e.each(["borderRadius","BorderRadius","MozBorderRadius","WebkitBorderRadius","OBorderRadius","KhtmlBorderRadius"],function(){void 0!==document.body.style[this]&&(e.support.borderRadius=!0)});var t=e.extend({},d,t),h=e(this).addClass("camera_wrap");h.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var m=e(".camera_fakehover",h),u=h;m.append('<div class="camera_target"></div>'),1==t.overlayer&&m.append('<div class="camera_overlayer"></div>'),m.append('<div class="camera_target_content"></div>');var p;p="pie"!=t.loader||e.support.borderRadius?t.loader:"bar","pie"==p?m.append('<div class="camera_pie"></div>'):"bar"==p?m.append('<div class="camera_bar"></div>'):m.append('<div class="camera_bar" style="display:none"></div>'),1==t.playPause&&m.append('<div class="camera_commands"></div>'),1==t.navigation&&m.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),1==t.thumbnails&&h.append('<div class="camera_thumbs_cont" />'),1==t.thumbnails&&1!=t.pagination&&e(".camera_thumbs_cont",h).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),1==t.pagination&&h.append('<div class="camera_pag"></div>'),h.append('<div class="camera_loader"></div>'),e(".camera_caption",h).each(function(){e(this).wrapInner("<div />")});var f,g,v="pie_"+h.index(),b=e(".camera_src",h),F=e(".camera_target",h),x=e(".camera_target_content",h),y=e(".camera_pie",h),C=e(".camera_bar",h),w=e(".camera_prev",h),k=e(".camera_next",h),_=e(".camera_commands",h),L=e(".camera_pag",h),R=e(".camera_thumbs_cont",h),T=new Array;e("> div",b).each(function(){T.push(e(this).attr("data-src"))});var D=new Array;e("> div",b).each(function(){e(this).attr("data-link")?D.push(e(this).attr("data-link")):D.push("")});var S=new Array;e("> div",b).each(function(){e(this).attr("data-target")?S.push(e(this).attr("data-target")):S.push("")});var M=new Array;e("> div",b).each(function(){e(this).attr("data-portrait")?M.push(e(this).attr("data-portrait")):M.push("")});var E=new Array;e("> div",b).each(function(){e(this).attr("data-alignment")?E.push(e(this).attr("data-alignment")):E.push("")});var A=new Array;e("> div",b).each(function(){e(this).attr("data-thumb")?A.push(e(this).attr("data-thumb")):A.push("")});var B=T.length;e(x).append('<div class="cameraContents" />');var q;for(q=0;B>q;q++)if(e(".cameraContents",x).append('<div class="cameraContent" />'),""!=D[q]){var O=e("> div ",b).eq(q).attr("data-box");O="undefined"!=typeof O&&O!==!1&&""!=O?'data-box="'+e("> div ",b).eq(q).attr("data-box")+'"':"",e(".camera_target_content .cameraContent:eq("+q+")",h).append('<a class="camera_link" href="'+D[q]+'" '+O+' target="'+S[q]+'"></a>')}e(".camera_caption",h).each(function(){var t=e(this).parent().index(),a=h.find(".cameraContent").eq(t);e(this).appendTo(a)}),F.append('<div class="cameraCont" />');var P,I=e(".cameraCont",h);for(P=0;B>P;P++){I.append('<div class="cameraSlide cameraSlide_'+P+'" />');var z=e("> div:eq("+P+")",b);F.find(".cameraSlide_"+P).clone(z)}e(window).bind("load resize pageshow",function(){o(),i()}),I.append('<div class="cameraSlide cameraSlide_'+P+'" />');var H;h.show();var W,f=F.width(),g=F.height();e(window).bind("resize pageshow",function(){1==H&&r(),e("ul",R).animate({"margin-top":0},0,o),b.hasClass("paused")||(b.addClass("paused"),e(".camera_stop",J).length?(e(".camera_stop",J).hide(),e(".camera_play",J).show(),"none"!=p&&e("#"+v).hide()):"none"!=p&&e("#"+v).hide(),clearTimeout(W),W=setTimeout(function(){b.removeClass("paused"),e(".camera_play",J).length?(e(".camera_play",J).hide(),e(".camera_stop",J).show(),"none"!=p&&e("#"+v).fadeIn()):"none"!=p&&e("#"+v).fadeIn()},1500))});var N,$,j,Q,_,L,G,V;if(j=a()&&""!=t.mobileAutoAdvance?t.mobileAutoAdvance:t.autoAdvance,0==j&&b.addClass("paused"),Q=a()&&""!=t.mobileNavHover?t.mobileNavHover:t.navigationHover,0!=b.length){var U=e(".cameraSlide",F);U.wrapInner('<div class="camerarelative" />');var K=t.barDirection,J=h;e("iframe",m).each(function(){var t=e(this),a=t.attr("src");t.attr("data-src",a);var i=t.parent().index(".camera_src > div");e(".camera_target_content .cameraContent:eq("+i+")",h).append(t)}),s(),1==t.hover&&(a()||m.hover(function(){b.addClass("hovered")},function(){b.removeClass("hovered")})),1==Q&&(e(w,h).animate({opacity:0},0),e(k,h).animate({opacity:0},0),e(_,h).animate({opacity:0},0),a()?(e(document).on("vmouseover",u,function(){e(w,h).animate({opacity:1},200),e(k,h).animate({opacity:1},200),e(_,h).animate({opacity:1},200)}),e(document).on("vmouseout",u,function(){e(w,h).delay(500).animate({opacity:0},200),e(k,h).delay(500).animate({opacity:0},200),e(_,h).delay(500).animate({opacity:0},200)})):m.hover(function(){e(w,h).animate({opacity:1},200),e(k,h).animate({opacity:1},200),e(_,h).animate({opacity:1},200)},function(){e(w,h).animate({opacity:0},200),e(k,h).animate({opacity:0},200),e(_,h).animate({opacity:0},200)})),J.on("click",".camera_stop",function(){j=!1,b.addClass("paused"),e(".camera_stop",J).length?(e(".camera_stop",J).hide(),e(".camera_play",J).show(),"none"!=p&&e("#"+v).hide()):"none"!=p&&e("#"+v).hide()}),J.on("click",".camera_play",function(){j=!0,b.removeClass("paused"),e(".camera_play",J).length?(e(".camera_play",J).hide(),e(".camera_stop",J).show(),"none"!=p&&e("#"+v).show()):"none"!=p&&e("#"+v).show()}),1==t.pauseOnClick&&e(".camera_target_content",m).mouseup(function(){j=!1,b.addClass("paused"),e(".camera_stop",J).hide(),e(".camera_play",J).show(),e("#"+v).hide()}),e(".cameraContent, .imgFake",m).hover(function(){G=!0},function(){G=!1}),e(".cameraContent, .imgFake",m).bind("click",function(){1==V&&1==G&&(j=!1,e(".camera_caption",m).hide(),b.addClass("paused"),e(".camera_stop",J).hide(),e(".camera_play",J).show(),e("#"+v).hide())})}if("pie"!=p){C.append('<span class="camera_bar_cont" />'),e(".camera_bar_cont",C).animate({opacity:t.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":t.loaderBgColor}).append('<span id="'+v+'" />'),e("#"+v).animate({opacity:0},0);var X=e("#"+v);switch(X.css({position:"absolute","background-color":t.loaderColor}),t.barPosition){case"left":C.css({right:"auto",width:t.loaderStroke});break;case"right":C.css({left:"auto",width:t.loaderStroke});break;case"top":C.css({bottom:"auto",height:t.loaderStroke});break;case"bottom":C.css({top:"auto",height:t.loaderStroke})}switch(K){case"leftToRight":X.css({left:0,right:0,top:t.loaderPadding,bottom:t.loaderPadding});break;case"rightToLeft":X.css({left:0,right:0,top:t.loaderPadding,bottom:t.loaderPadding});break;case"topToBottom":X.css({left:t.loaderPadding,right:t.loaderPadding,top:0,bottom:0});break;case"bottomToTop":X.css({left:t.loaderPadding,right:t.loaderPadding,top:0,bottom:0})}}else{y.append('<canvas id="'+v+'"></canvas>');var X=document.getElementById(v);X.setAttribute("width",t.pieDiameter),X.setAttribute("height",t.pieDiameter);var Y;switch(t.piePosition){case"leftTop":Y="left:0; top:0;";break;case"rightTop":Y="right:0; top:0;";break;case"leftBottom":Y="left:0; bottom:0;";break;case"rightBottom":Y="right:0; bottom:0;"}X.setAttribute("style","position:absolute; z-index:1002; "+Y);var Z,ee;if(X&&X.getContext){var te=X.getContext("2d");te.rotate(1.5*Math.PI),te.translate(-t.pieDiameter,0)}}if(("none"==p||0==j)&&(e("#"+v).hide(),
e(".camera_canvas_wrap",J).hide()),e(L).length){e(L).append('<ul class="camera_pag_ul" />');var ae;for(ae=0;B>ae;ae++)e(".camera_pag_ul",h).append('<li class="pag_nav_'+ae+'" style="position:relative; z-index:1002"><span><span>'+ae+"</span></span></li>");e(".camera_pag_ul li",h).hover(function(){if(e(this).addClass("camera_hover"),e(".camera_thumb",this).length){var t=e(".camera_thumb",this).outerWidth(),a=e(".camera_thumb",this).outerHeight(),i=e(this).outerWidth();e(".camera_thumb",this).show().css({top:"-"+a+"px",left:"-"+(t-i)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),e(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){e(this).removeClass("camera_hover"),e(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){e(this).css({marginTop:"5px"}).hide()}),e(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){e(this).css({marginTop:"5px"}).hide()})})}if(e(R).length){e(L).length?(e.each(A,function(t){if(""!=e("> div",b).eq(t).attr("data-thumb")){var a=e("> div",b).eq(t).attr("data-thumb"),i=new Image;i.src=a,e("li.pag_nav_"+t,L).append(e(i).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),e("li.pag_nav_"+t+" > img",L).after('<div class="thumb_arrow" />'),e("li.pag_nav_"+t+" > .thumb_arrow",L).animate({opacity:0},0)}}),h.css({marginBottom:e(L).outerHeight()})):(e(R).append("<div />"),e(R).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),e("> div",R).append("<ul />"),e.each(A,function(t){if(""!=e("> div",b).eq(t).attr("data-thumb")){var a=e("> div",b).eq(t).attr("data-thumb"),i=new Image;i.src=a,e("ul",R).append('<li class="pix_thumb pix_thumb_'+t+'" />'),e("li.pix_thumb_"+t,R).append(e(i).attr("class","camera_thumb"))}}))}else!e(R).length&&e(L).length&&h.css({marginBottom:e(L).outerHeight()});var ie=!0;e(_).length&&(e(_).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'),1==j?(e(".camera_play",J).hide(),e(".camera_stop",J).show()):(e(".camera_stop",J).hide(),e(".camera_play",J).show())),c(),e(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",m).each(function(){e(this).css("visibility","hidden")}),t.onStartLoading.call(this),l(),e(w).length&&e(w).click(function(){if(!b.hasClass("camerasliding")){var a=parseFloat(e(".cameraSlide.cameracurrent",F).index());clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",h).animate({opacity:0},0),c(),l(0!=a?a:B),t.onStartLoading.call(this)}}),e(k).length&&e(k).click(function(){if(!b.hasClass("camerasliding")){var a=parseFloat(e(".cameraSlide.cameracurrent",F).index());clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",J).animate({opacity:0},0),c(),l(a==B-1?1:a+2),t.onStartLoading.call(this)}}),a()&&(m.bind("swipeleft",function(){if(!b.hasClass("camerasliding")){var a=parseFloat(e(".cameraSlide.cameracurrent",F).index());clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",J).animate({opacity:0},0),c(),l(a==B-1?1:a+2),t.onStartLoading.call(this)}}),m.bind("swiperight",function(){if(!b.hasClass("camerasliding")){var a=parseFloat(e(".cameraSlide.cameracurrent",F).index());clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",J).animate({opacity:0},0),c(),l(0!=a?a:B),t.onStartLoading.call(this)}})),e(L).length&&e(".camera_pag li",h).click(function(){if(!b.hasClass("camerasliding")){var a=parseFloat(e(this).index()),i=parseFloat(e(".cameraSlide.cameracurrent",F).index());a!=i&&(clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",J).animate({opacity:0},0),c(),l(a+1),t.onStartLoading.call(this))}}),e(R).length&&(e(".pix_thumb img",R).click(function(){if(!b.hasClass("camerasliding")){var a=parseFloat(e(this).parents("li").index()),i=parseFloat(e(".cameracurrent",F).index());a!=i&&(clearInterval(N),s(),e("#"+v+", .camera_canvas_wrap",J).animate({opacity:0},0),e(".pix_thumb",R).removeClass("cameracurrent"),e(this).parents("li").addClass("cameracurrent"),c(),l(a+1),o(),t.onStartLoading.call(this))}}),e(".camera_thumbs_cont .camera_prevThumbs",J).hover(function(){e(this).stop(!0,!1).animate({opacity:1},250)},function(){e(this).stop(!0,!1).animate({opacity:.7},250)}),e(".camera_prevThumbs",J).click(function(){var t=0,a=(e(R).outerWidth(),e("ul",R).offset().left),r=e("> div",R).offset().left,s=r-a;e(".camera_visThumb",R).each(function(){var a=e(this).outerWidth();t+=a}),s-t>0?e("ul",R).animate({"margin-left":"-"+(s-t)+"px"},500,i):e("ul",R).animate({"margin-left":0},500,i)}),e(".camera_thumbs_cont .camera_nextThumbs",J).hover(function(){e(this).stop(!0,!1).animate({opacity:1},250)},function(){e(this).stop(!0,!1).animate({opacity:.7},250)}),e(".camera_nextThumbs",J).click(function(){var t=0,a=e(R).outerWidth(),r=e("ul",R).outerWidth(),s=e("ul",R).offset().left,n=e("> div",R).offset().left,o=n-s;e(".camera_visThumb",R).each(function(){var a=e(this).outerWidth();t+=a}),r>o+t+t?e("ul",R).animate({"margin-left":"-"+(o+t)+"px"},500,i):e("ul",R).animate({"margin-left":"-"+(r-a)+"px"},500,i)}))}}(jQuery),function(e){e.fn.cameraStop=function(){var t=e(this),a=e(".camera_src",t);"pie_"+t.index();if(a.addClass("stopped"),e(".camera_showcommands").length){e(".camera_thumbs_wrap",t)}else;}}(jQuery),function(e){e.fn.cameraPause=function(){var t=e(this),a=e(".camera_src",t);a.addClass("paused")}}(jQuery),function(e){e.fn.cameraResume=function(){var t=e(this),a=e(".camera_src",t);("undefined"==typeof autoAdv||autoAdv!==!0)&&a.removeClass("paused")}}(jQuery);
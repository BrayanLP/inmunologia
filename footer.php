		    	<footer>
	    			<div class="container">
	    				<img src="img/logo.png">
	    				<div class="copy">
	    					©Copyright Sociedad Peruana de Inmunologia
	    					<br><br>Desarrollado por: <a href="http://www.grupoaizen.com">Grupo Aizen</a>
	    				</div>
	    			</div>
	    		</footer> 			 
    		</div>
    		

    		<!--<div class="camera_wrap camera_azure_skin slider" id="camera_wrap_1">
	            <div data-src="img/slider1.jpg"></div>
	            <div data-src="img/slider2.jpg"></div> 
	        </div>-->
    	</div>
    	</div>
 	
          
          
<script type="text/javascript" src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="js/materialize-dist.js"></script>
<script type="text/javascript" src="js/general-dist.js"></script>
<script type="text/javascript" src="js/scroll.js"></script>
<script type="text/javascript" src="js/slider-dist.js"></script>
<script type="text/javascript" src="js/validate-dist.js"></script>
<script type="text/javascript" src="js/flipster.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$(".button-collapse").sideNav();
		 $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
		$('.modal-trigger').leanModal();
		/*$('a.collapsible-header').on('click',function(){
		 	$('div.collapsible-body').toggleClass('open');
		})*/

		/*$('a.collapsible-header').on('click',function(){
		 	$('div.collapsible-body').toggleClass('open');
		})*/
	})
</script> 

<script>
    var flat = $("#flat").flipster({
        buttons: true, 
    	loop: true,
    	fadeIn: 400, 
    	autoplay: 5000,
    	scrollwheel: false,
    	pauseOnHover: false,
    	start: 'center',
        style: 'flat',
        spacing: -0.2
    });
</script>
</body>
</html>
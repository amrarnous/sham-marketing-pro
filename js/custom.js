$(document).ready(function (){
	  $('.slider').slider({
	  	indicators: true,
	  	height: 480,
	  });
	   $('.modal').modal();
	$(".fashion-category").on("click",function (){
 		$(".manual_dropdown").show();
 	});
	$(".dropdown-trigger").dropdown();

	$('.sidenav').sidenav();

	 $(".owl-one").owlCarousel({
	 	loop: false,
	 	nav: true,
       	items: 4,
	    responsiveClass: true,
	    responsive: {
	        0:{
	          items: 2
	        },
	        480:{
	          items: 3
	        },
	        769:{
	          items: 6
	        }
	    }
	 });

 $(".owl-two").owlCarousel({
	 	loop: false,
       	items: 4,
       	nav: true,
	    responsiveClass: true,
	    responsive: {
	        0:{
	          items: 1
	        },
	        480:{
	          items: 2
	        },
	        769:{
	          items: 4
	        }
	    }
	 });
 // 	$(".tab").each(function (){
 // 		var dataActive = $(this).attr("data-trigger");
 // 	 	$(this).click(function(e){
	// 	 	$(".manual_dropdown[data-activate='"+ e.target.dataset.activate +"']").toggle();
	// 		console.log(e.target.dataset.activate);
 // 		});
	// });
});
(function(){
	
	$.fn.extend({
		"goTop" : function(){
			
			$(window).on("scroll",function(){
				if($(window).scrollTop() >=100){
					$(".gotop").fadeIn(1000);
				}else{
					$(".gotop").fadeOut(1000);
				}
			});
			
			$(".gotop").on("click",function(){
				$("body").animate({
					"scrollTop" : 0
				},500);
			});
		}
		
	});
	
})(jQuery);

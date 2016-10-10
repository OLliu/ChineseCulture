(function($){
	$.fn.extend({
		"show_1" : function(){
			$(".show").on("click",function(){
				$(".motai").fadeIn(1000);
			});	
		},
		"close" : function(){
			$(".close").on("click",function(){
				$(".motai").fadeOut(1000);
			});
		}
	});
})(jQuery);

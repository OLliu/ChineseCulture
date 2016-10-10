(function(){
	$.fn.extend({
		"Seach" : function(){
			var topHeight = $(".seach").offset().top;
			$(window).on("scroll",function(){
				if($(window).scrollTop() >= topHeight){
					$(".seach").css({
						"position" : "fixed",
						"top" : 0
					});
				}else{
					$(".seach").css({
						"position" : "relative"
					});
				}
			});
		}
	});
})(jQuery);

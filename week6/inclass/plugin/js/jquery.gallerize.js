// Create our jQuery Gallerize Plugin
(function($){
	$.fn.gallerize = function() {
		$.each(this, function(i, item) {
			var $item = $(item);	
			$item.find("li").hide().end().find(":first").show();

			$item.click(function() {
				if ($item.find("li:visible").next().length) {
					$item.find("li:visible").hide().next().show();
				} else {
					$item.find("li").hide().end().find(":first").show();
				}
			});
		});
		
		return this;
	};
}(jQuery));


$(function() {
    $(".slide").slippy();
    SyntaxHighlighter.defaults.gutter = false;
    SyntaxHighlighter.all();
    
	$("body").noisy({
		monochrome: true,
		opacity: 0.06,
		intensity: 10
	});
}());

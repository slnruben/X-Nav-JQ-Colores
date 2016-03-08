jQuery(document).ready(function() {
    $("#faq dt").click(function() {
		$(this).fadeOut("slow");
    });
    $("h3").click(function() {
		$("dt").fadeIn("slow");
    });
	$("#orderedlist").addClass("red");
	$("#orderedlist li").addClass("blue");
	$("#orderedlist li").last().hover(
		function() {
			$(this).addClass("green");
		}, function() {
			$(this).removeClass("green");
		}
	);
});
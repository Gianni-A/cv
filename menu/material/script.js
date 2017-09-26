$(function () {
	var current_li;
	$("#contact").click(function () {
		var src = $(this).attr("src");
		current_li = $(this).parent();
		$("#main").attr("src", src);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});

	$("#overlay").click(function () {
		$(this).fadeOut();
		$("#frame").fadeOut();
	});
    
    });
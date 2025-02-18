// script.js
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			// Adjust scroll threshold as needed
			$(".navbar").addClass("scrolled");
		} else {
			$(".navbar").removeClass("scrolled");
		}
	});
});

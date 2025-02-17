// Change Navbar Background on Scroll
window.addEventListener("scroll", function () {
	const navbar = document.getElementById("navbar");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// Toggle Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
});

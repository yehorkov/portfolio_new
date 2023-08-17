window.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburger");
	const menu = document.querySelector(".menu");
	const closeElem = document.querySelector(".menu__close");
	const menuList = document.querySelector(".menu__list");
	const promoTitle = document.querySelector(".promo__title");

	function toggleMenu() {
		menu.classList.toggle("active");
		hamburger.classList.toggle("hidden");
	}

	hamburger.addEventListener("click", toggleMenu);
	closeElem.addEventListener("click", toggleMenu);
	menuList.addEventListener("click", toggleMenu);

	setTimeout(() => {
		promoTitle.classList.add("visible");
	}, 1500);

	function stars(count, selector) {
		for (let i = 0; i < count; i++) {
			let scene = document.querySelector(selector);
			let star = document.createElement("i");
			let x = Math.floor(Math.random() * window.innerWidth);
			let y = Math.floor(Math.random() * window.innerHeight);
			let size = Math.random() * 2.6;

			let duration = Math.random() * 10;

			star.style.left = `${x}px`;
			star.style.top = `${y}px`;
			star.style.width = `${size}px`;
			star.style.height = `${size}px`;

			star.style.animationDuration = `${5 + duration}s`;
			star.style.animationDelay = `${duration}s`;

			scene.appendChild(star);
		}
	}

	stars(500, ".promo");
	stars(350, ".about");
	stars(200, ".contacts");
});

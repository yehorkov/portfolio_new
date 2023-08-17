window.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".hamburger");
	const menu = document.querySelector(".menu");
	const closeElem = document.querySelector(".menu__close");
	const menuList = document.querySelector(".menu__list");
	const promoTitle = document.querySelector(".promo__title");
	// const promo = document.querySelector('.promo');
	// const about = document.querySelector('.about');
	// const aboutLink = document.getElementById('about');

	// aboutLink.addEventListener('click', () => {
	//     about.classList.add('active');
	//     promo.classList.remove('active');
	// });

	hamburger.addEventListener("click", () => {
		menu.classList.add("active");
		hamburger.classList.add("hidden");
	});

	closeElem.addEventListener("click", () => {
		menu.classList.remove("active");
		hamburger.classList.remove("hidden");
	});

	menuList.addEventListener("click", () => {
		menu.classList.remove("active");
		hamburger.classList.remove("hidden");
	});

	setTimeout(() => {
		promoTitle.style.display = "block";
	}, 1000);

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
	stars(200, ".contacnts");
});

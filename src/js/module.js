document.addEventListener('scroll', (e) => {
	const navs = document.querySelectorAll('.nav-main, .nav');

	if (window.scrollY) {
		navs.forEach((nav) => nav.classList.add('active'));
	} else {
		navs.forEach((nav) => nav.classList.remove('active'));
	}
});

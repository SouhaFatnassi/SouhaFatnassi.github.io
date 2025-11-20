// Smooth scroll for anchor links and reveal animations
console.log("Portfolio loaded.");

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', function(e) {
		const targetId = this.getAttribute('href').slice(1);
		const target = document.getElementById(targetId);
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});

// Reveal on scroll using IntersectionObserver
function setupReveal() {
	const items = document.querySelectorAll('.project-card, .skill-category, .hero-content');
	items.forEach(i => i.classList.add('reveal'));

	const obs = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12 });

	items.forEach(i => obs.observe(i));
}

document.addEventListener('DOMContentLoaded', () => setupReveal());

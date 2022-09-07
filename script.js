const prevSlide = document.querySelector('.click-left');
const nextSlide = document.querySelector('.click-right');
const slider = document.querySelector('.slider');
let count = 1;

function getNextSlide() {
	count += 1;
	if (count > 3) count = 1;
	if (count === 1) {
		slider.classList.add('first-slide');
		slider.classList.remove('second-slide');
		slider.classList.remove('third-slide');
	}
	if (count === 2) {
		slider.classList.remove('first-slide');
		slider.classList.add('second-slide');
		slider.classList.remove('third-slide');
	}
	if (count === 3) {
		slider.classList.remove('first-slide');
		slider.classList.remove('second-slide');
		slider.classList.add('third-slide');
	}
}
function getPrevSlide() {
	console.log(count);
	count -= 1;
	if (count < 1) count = 3;
	if (count === 1) {
		slider.classList.add('first-slide');
		slider.classList.remove('second-slide');
		slider.classList.remove('third-slide');
	}
	if (count === 2) {
		slider.classList.remove('first-slide');
		slider.classList.add('second-slide');
		slider.classList.remove('third-slide');
	}
	if (count === 3) {
		slider.classList.remove('first-slide');
		slider.classList.remove('second-slide');
		slider.classList.add('third-slide');
	}
}
nextSlide.addEventListener('click', getNextSlide);
prevSlide.addEventListener('click', getPrevSlide);
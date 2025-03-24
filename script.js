const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

next.addEventListener('click', () => {
    initSlider('next');
});   

prev.addEventListener('click', () => {
    initSlider('prev');
});

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if(type === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else if(type === 'prev') {
        const lastItemPosition = sliderItems.length - 1
        list.prepend(sliderItems[lastItemPosition]);
        thumbnail.prepend(thumbnailItems[lastItemPosition]);
        slider.classList.add('prev');
    }

    // Reset classes after animation completes
    setTimeout(() => {
        slider.classList.remove('next', 'prev');
    }, 2000);

};

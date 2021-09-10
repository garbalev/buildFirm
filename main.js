var firstPageScroll = document.querySelector('.firstPageScroll'),
    sixthPage = document.querySelector('.sixthPage')

firstPageScroll.addEventListener('click', scrollDown);

function scrollDown() {
    window.scrollTo(0, sixthPage.offsetTop);
};

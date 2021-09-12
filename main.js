var firstPageScroll = document.querySelector('.firstPageScroll'),
    sixthPage = document.querySelector('.sixthPage'),
    allHrefs = document.querySelectorAll('.secondPageHeaderNavBar a, .sixthPageLinksFirst a')

firstPageScroll.addEventListener('click', scrollDown);



function scrollDown() {
    window.scrollTo({top: sixthPage.offsetTop, behavior: 'smooth'});
};

document.addEventListener('click', function(e){
    e.preventDefault();
    allHrefs.forEach(function(item){
        if(item === e.target){
            var id = e.target.getAttribute('href'),
            top = document.querySelector(id).offsetTop;
        window.scrollTo({ top: top, behavior: 'smooth'});
        }
    })     
})

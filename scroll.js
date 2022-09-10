

document.lastCentered = 0;
document.lastScrollPosition = 0;

document.addEventListener('scroll', () => {

    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')]

    sections.forEach((section, index : number) => {
        if(window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
        }
    })


    document.lastScrollPosition = window.pageYOffset;

})
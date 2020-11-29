
function scrollToElement(id) {
    let elem = document.getElementsByClassName('page')[id];
    
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop'
    document.querySelector('aside').className = ''
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
    console.log("clicked hhhhh")
}

document.querySelector('aside button i').onclick = e => {
    closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}
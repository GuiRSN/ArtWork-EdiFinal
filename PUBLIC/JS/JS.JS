/*=============== ACTIVE LINK ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkColor(){
    navLink.forEach(link => link.classList.remove('active-link'))
    this.classList.add('active-link')
}
navLink.forEach(link => link.addEventListener('click', linkColor))
function change(item){
    const buttons = document.querySelectorAll('ion-icon');
    buttons.forEach(function(obj){
        obj.classList.remove("active");
    });
    item.classList.add("active");
}
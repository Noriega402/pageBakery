const collapse = document.getElementById('toggle')
const menu = document.getElementById('menu')

collapse.addEventListener('click', e => {
    // alert('Jola')
    // console.log(e.target);
    menu.classList.toggle('show')
    // console.log(menu);
});
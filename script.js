const header=document.querySelector('nav')
const btnBurger=document.querySelector('#burger-menu')
const nav=document.querySelector('.navigation')
const linNav=document.querySelectorAll('.navigation a')


btnBurger.addEventListener('click',()=>{
    nav.classList.toggle('active');
    // btnBurger.toggle()
})
linNav.forEach(link=>{
    link.addEventListener('click',()=>{
    nav.classList.remove('active');

    })
})
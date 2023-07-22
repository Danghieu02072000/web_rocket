const app = () => {
    const humbeger_btn = document.querySelector('#humbeger')
    const mobieMenu = document.querySelector('#mobie-menu');
    const toggleMenu = () => {
        mobieMenu.classList.toggle('flex')
        mobieMenu.classList.toggle('hidden')
    }
    humbeger_btn.addEventListener('click',toggleMenu) 
    mobieMenu.addEventListener('click',toggleMenu) 
}



document.addEventListener('DOMContentLoaded',app)
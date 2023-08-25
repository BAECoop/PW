const menuToggle = document.querySelector('.Toggle');
const showcase = document.querySelector('showcase');
menuToggle.addEventListener('click',()=>(
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
)) 
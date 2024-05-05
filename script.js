document.addEventListener('DOMContentLoaded',()=>{

const nav= document.querySelector('.sidenav');
const btn= document.querySelector('#navbtn');
const over= document.querySelector('.overscreen');

btn.addEventListener('click',()=>{
	nav.classList.toggle('open');
 });
});
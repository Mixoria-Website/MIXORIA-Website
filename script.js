window.addEventListener('scroll',()=>{
document.querySelector('.product').style.transform=`rotateY(${scrollY}deg)`;
});
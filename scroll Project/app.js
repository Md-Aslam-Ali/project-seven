
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    console.log(linksContainerHeight)
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight)

    if(linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0;
    }
    
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navbarHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link');
    }
})


const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function(link){
    link.addEventListener('click', function(e){
        linksContainer.style.height = 0;
    })
})
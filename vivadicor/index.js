
    const elements = document.querySelectorAll(".animated-text, .animated-img");
    const heroSection = document.querySelector('.hero-section');
    
    const nu=document.querySelectorAll('  .count ')
    console.log(nu)
    console.log(heroSection)
    let animationStarted = false;
    let started = false; // Function Started ? No

    
    window.onscroll = function () {


        if (window.scrollY >= heroSection.offsetTop) {
            if (!started) {
            nu.forEach((num) => startCount(num));
            }
            started = true;
            }
        elements.forEach(sec => {
            let top = window.scrollY+550;
            let offset = sec.offsetTop+40;
            let height = sec.offsetHeight;
           
           
                
        
        if ( top = offset && top < offset + height) {
            sec.classList.remove('animate');
            

            }
           
            else {
                sec.classList.add('animate');
        }
    })}




    document.addEventListener("DOMContentLoaded", () => {
        const spanBox = document.querySelector('.span-box');
        const testimonialsSection = document.querySelector('.testimonials');
        const scrollToTopBtn = document.getElementById('scroll-to-top');
    
        window.addEventListener('scroll', () => {
            const sectionRect = testimonialsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
            if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
                spanBox.style.display = 'flex';
            } else {
                spanBox.style.display = 'none';
            }
        });
    
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    



    

    function startCount(el) {
        let goal =el.dataset.count;
        console.log(goal)
        let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        
        clearInterval (count);
        }
    },2000 / goal);
   
    }

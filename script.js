// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


// ======================================
// DARK MODE
// ======================================

const themeBtn = document.getElementById("themeBtn");

const body = document.body;

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


// ======================================
// STICKY NAVBAR EFFECT
// ======================================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.background = "rgba(0,0,0,.55)";

        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    }

    else{

        nav.style.background = "rgba(255,255,255,.12)";

        nav.style.boxShadow = "none";

    }

});


// ======================================
// ANIMATED COUNTERS
// ======================================

const counters = document.querySelectorAll(".stats h2");

let counted = false;

function runCounter(){

    if(counted) return;

    const section = document.querySelector(".stats");

    const trigger = section.offsetTop - 300;

    if(window.scrollY > trigger){

        counted = true;

        counters.forEach(counter=>{

            const target = parseInt(counter.textContent.replace(/\D/g,""));

            const suffix = counter.textContent.replace(/[0-9]/g,"");

            let current = 0;

            const increment = Math.ceil(target / 100);

            const update = ()=>{

                current += increment;

                if(current >= target){

                    counter.textContent = target + suffix;

                }

                else{

                    counter.textContent = current + suffix;

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);


// ======================================
// SCROLL REVEAL
// ======================================

const reveals = document.querySelectorAll(".card,.gallery img,.cta,.stats div");

reveals.forEach(item=>{

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = "all .8s ease";

});

function revealItems(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealItems);

revealItems();


// ======================================
// SMOOTH SCROLLING
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ======================================
// BACK TO TOP BUTTON
// ======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "30px";
topBtn.style.bottom = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "24px";
topBtn.style.display = "none";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ======================================
// ACTIVE NAVIGATION
// ======================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


// ======================================
// IMAGE HOVER EFFECT
// ======================================

const images = document.querySelectorAll(".gallery img");

images.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform = "scale(1.08) rotate(1deg)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform = "scale(1)";

    });

});


// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.background = "rgba(255,255,255,.6)";
        ripple.style.borderRadius = "50%";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple .6s linear";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


// ======================================
// RIPPLE KEYFRAMES
// ======================================

const style = document.createElement("style");

style.innerHTML = `

.btn{
position:relative;
overflow:hidden;
}

@keyframes ripple{

to{

transform:scale(25);

opacity:0;

}

}

.active{

color:#FFD54F !important;

font-weight:bold;

}

`;

document.head.appendChild(style);
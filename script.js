const navbar=document.querySelector(".navbar");
const menuBtn=document.querySelector(".menu-btn");
menuBtn?.addEventListener("click",()=>{const open=navbar.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{navbar.classList.remove("open");menuBtn?.setAttribute("aria-expanded","false")}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();

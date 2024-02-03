gsap.registerPlugin(ScrollTrigger);
const mobileNav = document.getElementById("mobile-nav"); 
const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");

const featureTitle = document.getElementById("feature-title")
const featureDescription = document.getElementById("feature-description")
const featureImage = document.getElementById("feature-img")
const btn1 = document.getElementById("simple")
const btn2 = document.getElementById("speedy")
const btn3 = document.getElementById("easy")

burger.addEventListener("click", ()=>{
  mobileNav.classList.toggle("active");
  if(mobileNav.classList.contains("active")){
    burger.src = 'images/icon-close.svg';
    mobileNav.classList.replace("mobile-nav", "mobile-nav-active");
  }else{
    burger.src = 'images/icon-hamburger.svg';
    mobileNav.classList.replace("mobile-nav-active", "mobile-nav");
  }
})

// code to close the mobile nav when a link is clicked or when clicked anywhere on the page
mobileNav.addEventListener("click", ()=>{
  mobileNav.classList.toggle("active");
  if(mobileNav.classList.contains("active")){
    burger.src = 'images/icon-close.svg';
    mobileNav.classList.replace("mobile-nav", "mobile-nav-active");
  }else{
    burger.src = 'images/icon-hamburger.svg';
    mobileNav.classList.replace("mobile-nav-active", "mobile-nav");
  }
})

featureTitle.addEventListener("click", ()=> console.log("featureTitle clicked"))
featureDescription.addEventListener("click", ()=> console.log("featureDescription clicked"))
featureImage.addEventListener("click", ()=> console.log("img clicked"))


window.onload = () => {
  btn1.click();
}

btn1.addEventListener("click", ()=>{
  
  btn1.style.borderBottom = "3px solid hsl(0, 94%, 66%)"
  btn2.style.borderBottom = ""
  btn3.style.borderBottom = ""

  featureTitle.innerText="Simple Bookmarking"
  featureDescription.innerText="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  featureImage.src = "/images/illustration-features-tab-1.svg"
  animateElement()
})

btn2.addEventListener("click", ()=>{
  btn1.style.borderBottom = ""
  btn2.style.borderBottom = "3px solid hsl(0, 94%, 66%)"
  btn3.style.borderBottom = ""
  featureTitle.innerText="Intelligent search"
  featureDescription.innerText="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  featureImage.src = "/images/illustration-features-tab-2.svg"
  animateElement()
})

btn3.addEventListener("click", ()=>{
  btn1.style.borderBottom = ""
  btn2.style.borderBottom = ""
  btn3.style.borderBottom = "3px solid hsl(0, 94%, 66%)"
  featureTitle.innerText="Share your bookmarks"
  featureDescription.innerText="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  featureImage.src = "/images/illustration-features-tab-3.svg"
  animateElement()
})

document.addEventListener("scroll", ()=>{
  if(window.scrollY > 0){
    header.style.backgroundColor = "#6778d4";
  }else{
    header.style.backgroundColor = "transparent";
  }
})


function animateElement(){
  gsap.timeline({
    scrollTrigger: {
      trigger: ".navigation",
      start: "top 40%",
      end: "bottom center",
    }
  }).
  from(".features-description", {
    y: 50,
    opacity: 1,
    duration: 1,
  })
}

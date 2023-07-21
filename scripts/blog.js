const root = document.querySelector(":root");
const toggleModeIcon = document.querySelector(".toggle-mode-icon");
const logo = document.querySelectorAll(".logo");
const body = document.querySelector("body")
const footer = document.getElementById("footer")

const facebook = document.querySelector(".facebook")
const linkedin = document.querySelector(".linkedin")
const instagram = document.querySelector(".instagram")
const twitter = document.querySelector(".twitter")


let count = 0;
// console.log(toggleModeIcon)

toggleModeIcon.addEventListener("click", (event) => {
  count++
  // console.log(count%2)

  // "algorithm" to toggle mode
  if(count%2) {
    // when document is in LIGHT MODE
    root.style.setProperty("--white-color", "#131313");
    body.style.backgroundColor = "#FFF"
    event.target.setAttribute("src", "/images/sun.png")
    logo[0].setAttribute("src", "/images/logo-dark.png")
    logo[1].setAttribute("src", "/images/logo-dark.png")
    twitter.setAttribute("src", "/images/black-twitter.png")
    facebook.setAttribute("src", "/images/black-facebook.png")
    linkedin.setAttribute("src", "/images/black-linkedin.png")
    instagram.setAttribute("src", "/images/black-instagram.png")

    footer.style.backgroundImage = `url(/images/rough-bg.png), 
    url(/images/stars.png), url(/images/stars.png)`
  } else {
    // when document is in DARK MODE
    root.style.setProperty("--white-color", "#FFFCE4");
    body.style.backgroundColor = "#000"
    event.target.setAttribute("src", "/images/crescent.png")
    logo[0].setAttribute("src", "/images/logo-light.png")
    logo[1].setAttribute("src", "/images/logo-light.png")

    twitter.setAttribute("src", "/images/twitter.png")
    facebook.setAttribute("src", "/images/facebook.png")
    linkedin.setAttribute("src", "/images/linkedin.png")
    instagram.setAttribute("src", "/images/instagram.png")

    footer.style.backgroundImage = `url(/images/stars-background.png), 
    url(/images/stars.png), url(/images/stars.png)`
  }

})
const root = document.querySelector(":root");
const toggleModeIcon = document.querySelector(".toggle-mode-icon");
const logo = document.querySelectorAll(".moon-logo");
const body = document.querySelector("body")
const footer = document.getElementById("footer")

const facebook = document.querySelector(".facebook")
const linkedin = document.querySelector(".linkedin")
const instagram = document.querySelector(".instagram")
const twitter = document.querySelector(".twitter")

const header = document.querySelector("header")
const higherNav = document.getElementById("higher-nav")
const imageRing = document.querySelectorAll(".image-ring")

let count = 0;


// making the light/dark mode work


toggleModeIcon.addEventListener("click", (event) => {
  count++
  // console.log(imageRing.style.getProperty("--width"));

  // "algorithm" to toggle mode
  if(count%2) {
    // when document is in LIGHT MODE
    root.style.setProperty("--white-color", "#131313");
    body.style.backgroundColor = "#FFF"
    toggleModeIcon.setAttribute("src", "/images/sun.png")

    imageRing.forEach(ring => {
      ring.style.setProperty("--bg-color", "#eee")
    })

    // logo[0].setAttribute("src", "/images/logo-dark.png")
    // logo[1].setAttribute("src", "/images/logo-dark.png")
    logo.forEach(logo => {
      logo.setAttribute("src", "/images/logo-dark.png")
    })

    twitter.setAttribute("src", "/images/black-twitter.png")
    facebook.setAttribute("src", "/images/black-facebook.png")
    linkedin.setAttribute("src", "/images/black-linkedin.png")
    instagram.setAttribute("src", "/images/black-instagram.png")

    // console.log(testimonyCard)

    footer.style.backgroundImage = `url(/images/rough-bg.png), 
    url(/images/stars.png), url(/images/stars.png)`
  } else {
    // when document is in DARK MODE
    root.style.setProperty("--white-color", "#FFFCE4");
    body.style.backgroundColor = "#000"
    toggleModeIcon.setAttribute("src", "/images/crescent.png")
    imageRing.forEach(ring => {
      ring.style.setProperty("--bg-color", "#000")
    })

    // logo[0].setAttribute("src", "/images/logo-light.png")
    // logo[1].setAttribute("src", "/images/logo-light.png")
    logo.forEach(logo => {
      logo.setAttribute("src", "/images/logo-light.png")
    })

    twitter.setAttribute("src", "/images/twitter.png")
    facebook.setAttribute("src", "/images/facebook.png")
    linkedin.setAttribute("src", "/images/linkedin.png")
    instagram.setAttribute("src", "/images/instagram.png")


    footer.style.backgroundImage = `url(/images/stars-background.png), 
    url(/images/stars.png), url(/images/stars.png)`
  }

})


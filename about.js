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

let count = 0;
// ---------------------------------------------------------------------------------------
// making the lighting hover effect work
header.addEventListener("mousemove", (event) => {
  let body = document.querySelector("body")

  // console.log(event)
  let offsetX = event.clientX
  let offsetY = event.clientY
  body.style.backgroundPositionX = `${offsetX - 200}px, left`
  body.style.backgroundPositionY = `${offsetY - 200}px, top`
})

higherNav.addEventListener("mousemove", (event) => {
  let body = document.querySelector("body")

  let offsetX = event.clientX
  let offsetY = event.clientY
  body.style.backgroundPositionX = `${offsetX - 200}px, left`
  body.style.backgroundPositionY = `${offsetY - 200}px, top`
})

// ---------------------------------------------------------------------------------------
// making the light/dark mode work

// console.log(toggleModeIcon)

toggleModeIcon.addEventListener("click", (event) => {
  count++
  // console.log(count%2)

  // "algorithm" to toggle mode
  if(count%2) {
    // when document is in LIGHT MODE
    root.style.setProperty("--white-color", "#131313");
    body.style.backgroundColor = "#FFF"
    toggleModeIcon.setAttribute("src", "./images/sun.png")

    // logo[0].setAttribute("src", "./images/logo-dark.png")
    // logo[1].setAttribute("src", "./images/logo-dark.png")
    logo.forEach(logo => {
      logo.setAttribute("src", "./images/logo-dark.png")
    })

    twitter.setAttribute("src", "./images/black-twitter.png")
    facebook.setAttribute("src", "./images/black-facebook.png")
    linkedin.setAttribute("src", "./images/black-linkedin.png")
    instagram.setAttribute("src", "./images/black-instagram.png")

    // console.log(testimonyCard)

    footer.style.backgroundImage = `url(./images/rough-bg.png), 
    url(./images/stars.png), url(./images/stars.png)`
  } else {
    // when document is in DARK MODE
    root.style.setProperty("--white-color", "#FFFCE4");
    body.style.backgroundColor = "#000"
    toggleModeIcon.setAttribute("src", "./images/crescent.png")
    // logo[0].setAttribute("src", "./images/logo-light.png")
    // logo[1].setAttribute("src", "./images/logo-light.png")
    logo.forEach(logo => {
      logo.setAttribute("src", "./images/logo-light.png")
    })

    twitter.setAttribute("src", "./images/twitter.png")
    facebook.setAttribute("src", "./images/facebook.png")
    linkedin.setAttribute("src", "./images/linkedin.png")
    instagram.setAttribute("src", "./images/instagram.png")


    footer.style.backgroundImage = `url(./images/stars-background.png), 
    url(./images/stars.png), url(./images/stars.png)`
  }

})


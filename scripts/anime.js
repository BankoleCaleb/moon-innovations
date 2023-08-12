// let options = {
//   threshold: .4,
//   rootMargin: "-50px",
// };

const callback = entries => {
  // console.log(entries);
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // entry.target.classList.toggle("restore", entry.isIntersecting)
      entry.target.classList.add("restore")
    } else {
      entry.target.classList.remove("restore")
    }
  })
}

let observer = new IntersectionObserver(callback);

let container = document.querySelectorAll(".container:not(nav .container):not(footer .container):not(#footer .container)");

container.forEach(container => {
  container.parentElement.style.overflow = "hidden"
  observer.observe(container)
})
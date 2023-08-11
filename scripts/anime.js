let options = {
  // threshold: 0.1,
  rootMargin: "-50px",
};

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

let observer = new IntersectionObserver(callback, options);

let container = document.querySelectorAll(".container:not(nav .container):not(footer .container):not(#footer .container)");

container.forEach(container => {
  observer.observe(container)
})
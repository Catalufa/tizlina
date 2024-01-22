function goTo(name) {
  if (name == "products") {
    window.open("https://www.etsy.com/uk/shop/TizlinasHandmade")
    return
  }
  document.querySelector(".home").style.display = "none";
  document.querySelector(".products").style.display = "none";
  document.querySelector(".events").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".contact").style.display = "none";
  document.querySelector(`.${name}`).style.display = "flex";
}

document.querySelector("nav p").addEventListener("click", function() {
  goTo("home")
})

document.querySelector("#products").addEventListener("click", function() {
  goTo("products")
})

document.querySelector("#events").addEventListener("click", function() {
  goTo("events")
})

document.querySelector("#about").addEventListener("click", function() {
  goTo("about")
})

document.querySelector("#contact").addEventListener("click", function() {
  goTo("contact")
})

const items = document.querySelector(".carousel").querySelectorAll(".card")

document.querySelector(".forward").addEventListener("click", function() {
  const current = document.querySelector("[selected='true']");
  var currentId = Array.prototype.indexOf.call(items, current);
  currentId++
  if (currentId > items.length - 1) {
    currentId = 0;
  }
  current.setAttribute("selected", "false")
  items[currentId].setAttribute("selected", "true")
})

document.querySelector(".back").addEventListener("click", function() {
  const current = document.querySelector("[selected='true']");
  var currentId = Array.prototype.indexOf.call(items, current);
  currentId--
  if (currentId < 0) {
    currentId = items.length - 1;
  }
  current.setAttribute("selected", "false")
  items[currentId].setAttribute("selected", "true")
})
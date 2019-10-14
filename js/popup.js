var c = document.querySelector(".write-us-button");
var b = document.querySelector(".container-popup");
var a = document.querySelector(".close-popup");
var d = document.querySelector("[name=name]");
var e = document.querySelector("[name=e-mail]");
c.addEventListener("click", function (evt) {
  evt.preventDefault();
  b.classList.add("show-popup");
  d.focus();
  if (d.value) {
    evt.preventDefault();
    e.focus();
  }
});
a.addEventListener("click", function (evt) {
  evt.preventDefault();
  b.classList.remove("show-popup");
});

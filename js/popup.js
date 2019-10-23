var button = document.querySelector(".write-us-button");
var popup = document.querySelector(".container-popup");
var closeform = document.querySelector(".close-popup");
var d = document.querySelector("[name=name]");
var e = document.querySelector("[name=e-mail]");
popup.classList.remove("show-popup");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-popup");
  d.focus();
  if (d.value) {
    evt.preventDefault();
    e.focus();
  }
});
closeform.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-popup");
});

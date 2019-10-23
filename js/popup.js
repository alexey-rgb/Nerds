var button_show_popup = document.querySelector(".write-us-button");
var popup = document.querySelector(".container-popup");
var close_form = document.querySelector(".close-popup");
var input_name = document.querySelector("[name=name]");
popup.classList.remove("show-popup");
button_show_popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-popup");
  input_name.focus();
});
close_form.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-popup");
});

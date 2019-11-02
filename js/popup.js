var button_show_popup = document.querySelector(".write-us-button");
var popup = document.querySelector(".container-popup");
var close_form = document.querySelector(".close-popup");
var name = document.querySelector("[name=text]");
var email = document.querySelector("[name=email]");
var form = document.querySelector("form");
popup.classList.remove("show-popup");
button_show_popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show-popup");
  name.focus();
});
close_form.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-popup");
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!email.value || !name.value){
 name.classList.add("shake-form");
}
});

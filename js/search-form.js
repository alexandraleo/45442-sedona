var btn = document.querySelector(".button-search");
var popup = document.querySelector(".search-window");
var close = document.querySelector(".search-window-display");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=checkin]");
var checkout = popup.querySelector("[name=checkout]");
var adults = popup.querySelector("[name=adults]");
var storagein = localStorage.getItem("checkin");
var storageout = localStorage.getItem("checkout");


btn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("search-window-display");

  if (storagein) {
  	checkin.value = storagein;
  	checkout.focus();
  } else {
  	checkin.focus();
  }
    if (storageout) {
  	checkout.value = storageout;
  	adults.focus();
  } else {
  	checkout.focus();
  }
});

form.addEventListener("submit", function(event) {
  if (!checkin.value || !checkout.value) {
  event.preventDefault();
  popup.classList.add("search-window-error");
	} else {
		localStorage.setItem("checkin", checkin.value);
		localStorage.setItem("checkout", checkout.value);
		popup.classList.remove("search-window-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("search-window-display")) {
		popup.classList.remove("search-window-display");
		}	
		if (popup.classList.contains("search-window-error")) {
		popup.classList.remove("search-window-error")
		}
	}
});



var btn = document.querySelector(".button-search");
var popup = document.querySelector(".search-window");
var close = document.querySelector(".search-window-display");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=checkin]");
var checkout = popup.querySelector("[name=checkout]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var storagein = localStorage.getItem("checkin");
var storageout = localStorage.getItem("checkout");
var storagead = localStorage.getItem("adults");
var storagechi = localStorage.getItem("children");


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
  if (storagead) {
  	adults.value = storagead;
  	children.focus();
  } else {
  	adults.focus();
  }
  if (storagechi) {
  	children.value = storagechi;
  } else {
  	children.focus();
  }
});

form.addEventListener("submit", function(event) {
  if (!checkin.value || !checkout.value || !adults.value || !children.value) {
  event.preventDefault();
  popup.classList.add("search-window-error");
	} else {
		localStorage.setItem("checkin", checkin.value);
		localStorage.setItem("checkout", checkout.value);
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
		popup.classList.remove("search-window-error");
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		popup.classList.toggle("search-window-close");
		if (popup.classList.contains("search-window-display")) {
		popup.classList.remove("search-window-display");
		}	
		if (popup.classList.contains("search-window-error")) {
		popup.classList.remove("search-window-error")
		}
	}
});



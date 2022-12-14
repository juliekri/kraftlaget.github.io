function navLinksOnClick(event) {
  let selected = document.querySelectorAll(".nav-link[selected='active-link']");
  let selectedItem = event.target.parentElement;
  selected.forEach((item) => {
    item.removeAttribute("selected");
  });
  selectedItem.setAttribute("selected", "active-link");
  return;
}

function scrollToId(event) {
  const meetingRoom = document.getElementById("meeting-room-container");
  const miniLager = document.getElementById("minilager");
  const office = document.getElementById("office");
  if (event.target.matches("#scroll-to-meeting-room")) {
    meetingRoom.scrollIntoView({
      behavior: "smooth",
    });
    return;
  } else if (event.target.matches("#scroll-to-minilager")) {
    miniLager.scrollIntoView({
      behavior: "smooth",
    });
    return;
  } else if (event.target.matches("#scroll-to-office")) {
    office.scrollIntoView({
      behavior: "smooth",
    });
    return;
  }
}

function contactForm() {
  const contactForm = document.getElementById("scroll-to-contact-form");
  contactForm.scrollIntoView({
    behavior: "smooth",
  });

  return;
}

const input = document.querySelectorAll("input");
let button = document.querySelector(".submit-button");

button.disabled = true;

function stateHandle() {
  input.forEach((input) => {
    if (!input.value) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}

let smallscreen = window.outerWidth;

function sizeHandler() {
  smallscreen = window.innerWidth;
  if (smallscreen > 1200) {
    hamburgerMenu = false;
  } else {
    hamburgerMenu = true;
  }
}
window.onresize = sizeHandler;
window.onload = sizeHandler;

function handleShowDropDown(event) {
  event.target.parentElement;

  let hideDropDown = document.querySelector(".showDropDown.hide");

  if (hideDropDown) {
    document.querySelector(".showDropDown").classList.remove("hide");
  } else if (!hideDropDown) {
    document.querySelector(".showDropDown").classList.add("hide");
  }
}

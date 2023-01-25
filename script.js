let smallscreen = window.outerWidth;

function navLinksOnClick(event) {
  let selected = document.querySelectorAll(".nav-link[selected='active-link']");
  let selectedItem = event.target.parentElement;
  selected.forEach((item) => {
    item.removeAttribute("selected");
  });
  selectedItem.setAttribute("selected", "active-link");
  return;
}

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

function stateHandle() {
  let input = document.querySelectorAll("input");
  let button = document.querySelector(".submit-button");

  input.forEach((input) => {
    if (!input.value) {
      console.log("het");
      button.disabled = true;
      return;
    }

    button.disabled = false;
  });
}

function updateValues(event) {
  let input = document.querySelectorAll("input");
  input.forEach((input) => {
    input.addEventListener("change", stateHandle);
  });
}

async function getAPI() {
  const inputFields = document.querySelectorAll(".input");
  let button = document.querySelector(".submit-button");

  const query = {
    name: "",
    mail: "",
    subject: "",
    message: "",
    phone: "",
    company: "",
  };

  if (!inputFields.length) {
    return;
  }
  inputFields.forEach((field) => {
    const { name, value } = field;
    switch (name) {
      case "name":
        query.name = value;
        break;
      case "mail":
        query.mail = value;
        break;
      case "subject":
        query.subject = "Henvendelse: " + value;
        break;
      case "message":
        query.message = value;
        break;
    }
  });

  if (!query) {
    return;
  }

  const myHeaders = new Headers({
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json",
  });

  const sendServiceMailResult = await fetch(
    "http://api.hulbekkmo.no/customer_request",
    {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(query),
    }
  );
  if (sendServiceMailResult.ok) {
    const snackbar = document.querySelector(".snackbar-container");
    if (snackbar) {
      snackbar.style.visibility = "visible";
      button.disabled = true;
    }
  }
}

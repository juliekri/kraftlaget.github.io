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
  console.log(event.target);
  const meetingRoom = document.getElementById("meeting-room-container");
  const miniLager = document.getElementById("minilager");
  const office = document.getElementById("office");
  if (event.target === document.getElementById("scroll-to-meeting-room")) {
    meetingRoom.scrollIntoView({
      behavior: "smooth",
    });
    return;
  } else if (event.target === document.getElementById("scroll-to-minilager")) {
    miniLager.scrollIntoView({
      behavior: "smooth",
    });
    return;
  } else if (event.target === document.getElementById("scroll-to-office")) {
    office.scrollIntoView({
      behavior: "smooth",
    });
    return;
  }
}

function contactForm() {
  window.scrollTo(0, 100000);

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

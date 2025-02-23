document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function showContact(e) {
  e.preventDefault();
  const contactSection = document.querySelector("#Contact");
  contactSection.style.display = "block";
  contactSection.style.zIndex = "1";
  contactSection.classList.add("active");
}

document
  .querySelector('a[href="#Contact"]')
  .addEventListener("click", showContact);

document.addEventListener("click", function (e) {
  const contactSection = document.querySelector("#Contact");
  if (
    !contactSection.contains(e.target) &&
    !e.target.closest('a[href="#Contact"]')
  ) {
    setTimeout(() => {
      contactSection.style.display = "none";
      contactSection.style.zIndex = "-1";
    }, 300);
  }
});

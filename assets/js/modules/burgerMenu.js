export function burgerMenu(btnSelector, linksSelector) {
  const btnBurger = document.querySelector(btnSelector);

  if (!btnSelector) console.error("Burger menu button selector not found");
//   if (!btnBurger) return;

  btnBurger.addEventListener("click", function () {
    this.classList.toggle("active");
    if (btnBurger.classList.contains("active")) {
      btnBurger.style.backgroundColor = "#5d5656";
      btnBurger.style.color = "#efa8a8";
      btnBurger.style.maxWidth = 100 + "px";
      btnBurger.style.borderTopLeftRadius = 10 + "px";
      btnBurger.style.borderBottomLeftRadius = 10 + "px";
    } else if (!btnBurger.classList.contains("active")) {
      btnBurger.style.backgroundColor = "inherit";
      btnBurger.style.color = "inherit";
    }
    document.querySelector(linksSelector).classList.toggle("open");
  });
}

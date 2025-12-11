import * as commonFunctions from "./modules/functions.js";
import { burgerMenu } from "./modules/burgerMenu.js";
import { swiperHeader } from "./modules/swiper.js";

document.addEventListener("DOMContentLoaded", () => {
  commonFunctions.isWebp();
  burgerMenu(".burger-menu__btn", ".burger-menu__links");
  swiperHeader.update();
});

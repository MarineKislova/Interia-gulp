import * as commonFunctions from "./modules/functions.js";
import { burgerMenu } from "./modules/burgerMenu.js";
import { swiperHeader } from "./modules/swiper.js";

commonFunctions.isWebp();
burgerMenu(".burger-menu__btn", ".burger-menu__links");
swiperHeader.slideNext();


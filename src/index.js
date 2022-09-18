import "./css/style.css";
import historyContent from "./history";
import homeContent from "./home";
import menuContent from "./menu";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const history = document.querySelector("#history");

homeContent();
home.classList.add("selected-tab");

home.onclick = () => {
  home.classList.add("selected-tab");
  menu.classList.remove("selected-tab");
  history.classList.remove("selected-tab");
  homeContent();
};
menu.onclick = () => {
  home.classList.remove("selected-tab");
  menu.classList.add("selected-tab");
  history.classList.remove("selected-tab");
  menuContent();
};
history.onclick = () => {
  home.classList.remove("selected-tab");
  menu.classList.remove("selected-tab");
  history.classList.add("selected-tab");
  historyContent();
};

console.log("223f22dd2");

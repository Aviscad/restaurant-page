import "./css/style.css";
import historyContent from "./history";
import homeContent from "./home";
import menuContent from "./menu";
import githubIcon from "./assets/img/github.png";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const history = document.querySelector("#history");
const footerIcon = document.querySelector("#github-icon");
footerIcon.src = githubIcon;

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

import contactContent from "./contact";
import "./css/style.css";
import homeContent from "./home";
import menuContent from "./menu";

homeContent();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.onclick = () => {
  homeContent();
};
menu.onclick = () => {
  menuContent();
};
contact.onclick = () => {
  contactContent();
};

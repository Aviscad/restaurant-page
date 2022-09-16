import "./css/style.css";
import homeContent from "./home";

homeContent();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.onclick = () => {
  console.log("Home");
};
menu.onclick = () => {
  console.log("Menu");
};
contact.onclick = () => {
  console.log("Contact");
};

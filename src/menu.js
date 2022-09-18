import miso from "./assets/img/miso-ramen.jpg";
import ramen from "./assets/img/ramen.jpg";
function menuContent() {
  const content = document.querySelector("#content");
  const foodContainer = document.createElement("div");
  const foodContainerMiso = document.createElement("div");
  const foodContainerRamenLeft = document.createElement("div");
  const foodContainerMisoLeft = document.createElement("div");
  const foodContainerRamenRight = document.createElement("div");
  const foodContainerMisoRight = document.createElement("div");
  const foodTitleMiso = document.createElement("h1");
  const foodDescriptionMiso = document.createElement("p");
  const foodDescriptionMiso2 = document.createElement("p");
  const foodTitleRamen = document.createElement("h1");
  const foodDescriptionRamen = document.createElement("p");
  const foodDescriptionRamen2 = document.createElement("p");
  const misoImage = new Image();
  const ramenImage = new Image();

  foodContainer.classList.add("food-container");
  foodContainerMiso.classList.add("food-container");
  foodContainerRamenLeft.classList.add("food-container_left");
  foodContainerMisoLeft.classList.add("food-container_left");
  foodContainerRamenRight.classList.add("food-container_right");
  foodContainerMisoRight.classList.add("food-container_right");
  misoImage.classList.add("food-image");
  ramenImage.classList.add("food-image");
  foodTitleMiso.classList.add("food-title");
  foodTitleRamen.classList.add("food-title");
  foodDescriptionMiso.classList.add("food-description");
  foodDescriptionMiso2.classList.add("food-description");
  foodDescriptionRamen.classList.add("food-description");
  foodDescriptionRamen2.classList.add("food-description");

  content.innerHTML = "";

  ramenImage.src = ramen;
  foodContainerRamenLeft.appendChild(ramenImage);
  foodTitleRamen.textContent = "Ramen";
  foodDescriptionRamen.textContent =
    "Ramen (ラーメン) is a noodle soup dish that was originally imported from China and has become one of the most popular dishes in Japan in recent decades. Ramen are inexpensive and widely available, two factors that also make them an ideal option for budget travelers. Ramen restaurants, or ramen-ya, can be found in virtually every corner of the country and produce countless regional variations of this common noodle dish.";
  foodDescriptionRamen2.textContent =
    "It consists of Chinese-style wheat noodles (or 中華麺, chūkamen) served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork (chāshū), nori (dried seaweed), menma (bamboo shoots), and scallions. Ramen has its roots in Chinese noodle dishes. Nearly every region in Japan has its own variation of ramen, such as the tonkotsu (pork bone broth) ramen of Kyushu and the miso ramen of Hokkaido. ";
  foodContainerRamenRight.appendChild(foodTitleRamen);
  foodContainerRamenRight.appendChild(foodDescriptionRamen);
  foodContainerRamenRight.appendChild(foodDescriptionRamen2);
  foodContainer.appendChild(foodContainerRamenLeft);
  foodContainer.appendChild(foodContainerRamenRight);

  misoImage.src = miso;
  foodContainerMisoRight.appendChild(misoImage);
  foodTitleMiso.textContent = "Miso Ramen";
  foodDescriptionMiso.textContent =
    "Miso ramen soup is flavored with soybean paste (miso), resulting in a thick, brown soup with a rich, complex flavor. The style originated in Hokkaido where the long cold winters spurred the need for a heartier type of ramen soup, but it has spread to the point where it can be found pretty much anywhere in Japan.";
  foodDescriptionMiso2.textContent =
    "Miso ramen is a beautiful dish. The miso marries the flavors of salt and creaminess and the weight is comforting and an absolute classic for cold weather. In fact, miso ramen comes from the Northern Hokkaido region of Japan - where bitter winters blow in and call for a warming bowl of something heavy, robust, and ready to set you up to face the day. Miso ramen is the youngest of the four main ramen types but it’s hugely popular. Full of umami flavors, high in protein, and awesome for an immune boost, there are so many reasons to love miso ramen.";
  foodContainerMisoLeft.appendChild(foodTitleMiso);
  foodContainerMisoLeft.appendChild(foodDescriptionMiso);
  foodContainerMisoLeft.appendChild(foodDescriptionMiso2);
  foodContainerMiso.appendChild(foodContainerMisoLeft);
  foodContainerMiso.appendChild(foodContainerMisoRight);

  content.appendChild(foodContainer);
  content.appendChild(foodContainerMiso);
}
export default menuContent;

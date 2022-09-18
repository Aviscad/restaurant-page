import restaurant from "./assets/img/restaurant.jpg";
function homeContent() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const divLeft = document.createElement("div");
  const divRight = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  const restaurantImage = new Image();
  restaurantImage.src = restaurant;

  content.innerHTML = "";

  div.classList.add("home-container");
  h1.textContent = "Ichiraku Ichiraku";
  divLeft.classList.add("home-container_left");
  divLeft.appendChild(h1);
  divLeft.appendChild(restaurantImage);

  p.textContent =
    "Ramen Ichiraku was founded by Teuchi thirty-four years before the start of Part II. Although it is quite small and has an unassuming appearance, Ramen Ichiraku has always been popular with Konoha's villagers because of Teuchi's strong commitment to taste, giving the ramen an almost artistic quality. Like any ramen establishment, Ramen Ichiraku offers various toppings, such as char siu and boiled eggs. In Konoha Hiden, seaweed had been the most popular topping for several years until, after the Fourth Shinobi World War, it was surpassed by naruto.";

  p2.textContent =
    "Come dine with us & experience an authentic Japanese meals in an intimate dining space. We look forward to serving you!";

  p.classList.add("paragraph");
  p2.classList.add("paragraph");

  divRight.appendChild(p);
  divRight.appendChild(p2);
  divRight.classList.add("home-container_right");

  div.appendChild(divLeft);
  div.appendChild(divRight);
  content.appendChild(div);
}
export default homeContent;

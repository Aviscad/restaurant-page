function contactContent() {
  const content = document.querySelector("#content");
  const historyContainer = document.createElement("div");
  const historyTitle = document.createElement("h1");
  const historyParagraph = document.createElement("p");
  const historyParagraph2 = document.createElement("p");
  const historyParagraph3 = document.createElement("p");

  content.innerHTML = "";

  historyContainer.classList.add("history-container");
  historyTitle.classList.add("history-title");
  historyParagraph.classList.add("paragraph");
  historyParagraph2.classList.add("paragraph");
  historyParagraph3.classList.add("paragraph");

  historyTitle.textContent = "History";
  historyParagraph.textContent =
    "Ramen Ichiraku is Naruto Uzumaki's favourite dining establishment. He eats there regularly – usually stopping by between missions – and he is often joined by Iruka Umino, another frequent customer. Because Naruto has been a loyal customer for most of his life, Teuchi and his daughter, Ayame, were among the few people in Konoha not to treat Naruto with animosity during his youth. Naruto takes Hinata Hyūga to Ramen Ichiraku for their first date; in the anime, this in turn causes Hinata to become a regular customer, to the point that she has won at least one of its eating contests. In Konoha Hiden, Teuchi gives Naruto a lifetime pass for Ramen Ichiraku as a wedding present, which the anime shows to have received heavy use over the following years.";
  historyParagraph2.textContent =
    "The original Ramen Ichiraku is destroyed along with the rest of Konoha during Pain's Assault. In the anime, Inari is implied to have been responsible for rebuilding it, as a favour to Naruto. As Naruto becomes increasingly famous, first as a war hero and later as Hokage, Ramen Ichiraku prospers; in Konoha Hiden, this is explained to be because of customers' hopes of either seeing Naruto there or simply a desire to emulate him and his successes. The second Ramen Ichiraku is ill-suited for this increased business, so it is remodeled and expanded into an indoor restaurant at some point after Ayame takes over management. Ayame even makes Naruto their official promoter; in one such advertisement, he claims that Ramen Ichiraku is just as nutritious as soldier pills.";

  historyParagraph3.textContent =
    "In addition to the fresh-made ramen that it is known for, Ramen Ichiraku has at times dabbled in other products. In one episode of the anime, Teuchi starts making diet ramen to help Ayame lose weight, which ends up becoming popular with female patrons. In another episode, Ayame convinces her father to serve tsukemen instead of ramen. Naruto disapproves of this, and by the next time he is seen visiting it is back to serving ramen. At some point, Ramen Ichiraku starts selling instant ramen, empty cups of which tend to litter Naruto's desk at work.";

  historyContainer.appendChild(historyTitle);
  historyContainer.appendChild(historyParagraph);
  historyContainer.appendChild(historyParagraph2);
  historyContainer.appendChild(historyParagraph3);

  content.appendChild(historyContainer);
}
export default contactContent;

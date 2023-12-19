const toposContent = document.getElementById("ToposContent");
const pageTitle = document.getElementById("pageTitle");
const cartObj = [
  {
    img: "../../Images/Topos/Rectangle 223.png",
    name: "Noravan Canyan",
    text: `Below the village Ohanavan, in the Kasakh canyon ( 40°21'29.91"N 44°23'39.23"E) are located the Ohanavan crags, with sport and trad routes from 5a to 6b+ grades. The site is 30km far from Yerevan center and is really good to go during the summer, as the stream of river Kasakh in the narrow canyon cools down the temperature saving you from the heat. When you get into the village, go through the cemetery from where the dirt road will continue down in the canyon. After 600m by the dirt road, you will see a path on your right, that will lead you to the river and in a bit more, up by the stream, you will appear in between the crags. There are fixed wires to get to the West Sector, which will also help you to get to the belays for several routes starting directly above the water.`,
  },
  {
    img: "../../Images/Topos/Rectangle 227.png",
    name: "Hell Canyan",
    text: `Below the village Ohanavan, in the Kasakh canyon ( 40°21'29.91"N 44°23'39.23"E) are located the Ohanavan crags, with sport and trad routes from 5a to 6b+ grades. The site is 30km far from Yerevan center and is really good to go during the summer, as the stream of river Kasakh in the narrow canyon cools down the temperature saving you from the heat. When you get into the village, go through the cemetery from where the dirt road will continue down in the canyon. After 600m by the dirt road, you will see a path on your right, that will lead you to the river and in a bit more, up by the stream, you will appear in between the crags. There are fixed wires to get to the West Sector, which will also help you to get to the belays for several routes starting directly above the water.`,
  },
  {
    img: "../../Images/Topos/Rectangle 230.png",
    name: "Yerevan",
    text: `Below the village Ohanavan, in the Kasakh canyon ( 40°21'29.91"N 44°23'39.23"E) are located the Ohanavan crags, with sport and trad routes from 5a to 6b+ grades. The site is 30km far from Yerevan center and is really good to go during the summer, as the stream of river Kasakh in the narrow canyon cools down the temperature saving you from the heat. When you get into the village, go through the cemetery from where the dirt road will continue down in the canyon. After 600m by the dirt road, you will see a path on your right, that will lead you to the river and in a bit more, up by the stream, you will appear in between the crags. There are fixed wires to get to the West Sector, which will also help you to get to the belays for several routes starting directly above the water.`,
  },
  {
    img: "../../Images/Topos/Rectangle 235.png",
    name: "Ashtarak",
    text: `Below the village Ohanavan, in the Kasakh canyon ( 40°21'29.91"N 44°23'39.23"E) are located the Ohanavan crags, with sport and trad routes from 5a to 6b+ grades. The site is 30km far from Yerevan center and is really good to go during the summer, as the stream of river Kasakh in the narrow canyon cools down the temperature saving you from the heat. When you get into the village, go through the cemetery from where the dirt road will continue down in the canyon. After 600m by the dirt road, you will see a path on your right, that will lead you to the river and in a bit more, up by the stream, you will appear in between the crags. There are fixed wires to get to the West Sector, which will also help you to get to the belays for several routes starting directly above the water.`,
  },
  {
    img: "../../Images/Topos/Rectangle 236.png",
    name: "Kaghsi",
    text: `Below the village Ohanavan, in the Kasakh canyon ( 40°21'29.91"N 44°23'39.23"E) are located the Ohanavan crags, with sport and trad routes from 5a to 6b+ grades. The site is 30km far from Yerevan center and is really good to go during the summer, as the stream of river Kasakh in the narrow canyon cools down the temperature saving you from the heat. When you get into the village, go through the cemetery from where the dirt road will continue down in the canyon. After 600m by the dirt road, you will see a path on your right, that will lead you to the river and in a bit more, up by the stream, you will appear in between the crags. There are fixed wires to get to the West Sector, which will also help you to get to the belays for several routes starting directly above the water.`,
  },
  {
    img: "../../Images/Topos/Rectangle 237.png",
    name: "Ohanavan",
    text: `Below the village Ohanavan, in the Kasakh canyon ( 40°21'29.91"N 44°23'39.23"E) are located the Ohanavan crags, with sport and trad routes from 5a to 6b+ grades. The site is 30km far from Yerevan center and is really good to go during the summer, as the stream of river Kasakh in the narrow canyon cools down the temperature saving you from the heat. When you get into the village, go through the cemetery from where the dirt road will continue down in the canyon. After 600m by the dirt road, you will see a path on your right, that will lead you to the river and in a bit more, up by the stream, you will appear in between the crags. There are fixed wires to get to the West Sector, which will also help you to get to the belays for several routes starting directly above the water.`,
  },
];

cartObj.forEach((elem) => {
  let Cart = document.createElement("div");
  Cart.class = "Cart";
  Cart.innerHTML = `<div class="Cart">
    <div>
      <img src="${elem.img}" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="318"
        height="192"
        viewBox="0 0 318 192"
        fill="none"
      >
        <path
          d="M0.96875 0.78125H317.781V191.781H0.96875V0.78125Z"
          fill="url(#paint0_linear_720_1658)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_720_1658"
            x1="159.375"
            y1="191.781"
            x2="159.375"
            y2="0.78125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#000203" />
            <stop offset="1" stop-color="#021D25" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <h2>${elem.name}</h2>
    </div>
  </div>`;
  Cart.addEventListener("click", () => {
    pageTitle.innerHTML = `<h2><a href="../../index.html">Home</a>/<a href="Topos.html">Topos</a>/${elem.name}</h2>`;
    toposContent.id = "toposSingle";
    toposContent.innerHTML = `
  <section id="toposSingleTitle">
      <h1>${elem.name}</h1>
  </section>
  <section id="toposSingleContent">
    <div class="text">
      <p>
        ${elem.text}
      </p>
    </div>
  </section>
  <section id="ToposSingleCarts">
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 237.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 242.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 245.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 250.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 251.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 252.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 259.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 260.png" />
        </div>
    </div>
    <div class="Cart">
        <div>
        <img src="../../Images/Topos/single/Rectangle 261.png" />
        </div>
    </div>
  </section>`;
  });
  toposContent.appendChild(Cart);
});

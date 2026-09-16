const container = document.getElementById("container");

async function fetchCars() {
  const response = await fetch("/api/cars");
  const data = await response.json();

  return data;
}

const cars = await fetchCars();

let cardsHTML = "";

cars.map((car) => {
  cardsHTML += `
    <div class="card">
      <h2>${car.brand}</h2>
      <p>${car.model}</p>
      <p>${car.year}</p>
      <p>${car.price}</p>
      <p>${car.color}</p>
      <p>${car.condition}</p>
      <p>${car.sold}</p>
      <img src="${car.image}" alt="${car.brand} ${car.model}">
    </div>
  `;
});

console.log(cardsHTML);

const cardGrid = document.createElement("div");

cardGrid.className = "cards";
cardGrid.id = "cardGrid";

cardGrid.innerHTML = cardsHTML;

container.appendChild(cardGrid);

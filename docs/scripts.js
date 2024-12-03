document.addEventListener("DOMContentLoaded", () => {
    const adventures = [
        {
            "adventurename": "Seneca Rocks",
            "adventuredate": "July 14, 2024",
            "adventurephoto": "seneca.png",
            "customername": "Denver",
            "customerquote": "Amazing",
            "excurstionstmt": "Very cool",
            "descriptionfile": "Seneca Rocks provides climbers a wide array of sport and traditional climbs."
        },
        {
            "adventurename": "Red River Gorge",
            "adventuredate": "June 14, 2024",
            "adventurephoto": "rrg.png",
            "customername": "Marie",
            "customerquote": "Fantastic",
            "excurstionstmt": "Beautiful trip",
            "descriptionfile": "Premier sport climbing area in eastern Kentucky."
        },
        {
            "adventurename": "New River Gorge",
            "adventuredate": "August 14, 2024",
            "adventurephoto": "newriver.png",
            "customername": "Jon",
            "customerquote": "Righteous",
            "excurstionstmt": "Wild and Wonderful",
            "descriptionfile": "Southern West Virginia haven for white water rafters and climbers. Wide array of bolted sport climbs."
        },
        {
            "adventurename": "Shawangunk",
            "adventuredate": "September 14, 2024",
            "adventurephoto": "gunks.png",
            "customername": "Frank",
            "customerquote": "Whoa",
            "excurstionstmt": "Epic trip",
            "descriptionfile": "Finest climbing in southern New York. Enjoy the New Paltz area - history and local shops."
        }
    ];

    const cardContainer = document.getElementById('adventure-cards');

    adventures.forEach(adventure => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="images/${adventure.adventurephoto}" class="card-img-top" alt="${adventure.adventurename}">
                    <div class="card-body">
                        <h5 class="card-title">${adventure.adventurename}</h5>
                        <p class="card-text">${adventure.descriptionfile}</p>
                        <p><strong>Date:</strong> ${adventure.adventuredate}</p>
                        <p><strong>Customer:</strong> ${adventure.customername}</p>
                        <p><em>"${adventure.customerquote}"</em></p>
                    </div>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML; // Append the card to the container
    });
});
fetch('http://158.101.118.50/data/gearlist.json')
  .then(response => response.json())
  .then(data => {
    data.result.forEach((item) => {
      document.body.innerHTML += '<br><a href="#">' + item + '</a>';
    });
 });
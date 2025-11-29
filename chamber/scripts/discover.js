import { accraLandmarks } from "../data/discover.mjs";

// Select container
const discoverSection = document.querySelector("#discover");

// Create cards
function loadDiscoverCards() {
    accraLandmarks.slice(0, 8).forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("discover-card");
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}">
            </figure>
            <address>${item.location}</address>
            <p>${item.description}</p>
            <button class="learn-btn">Learn More</button>
        `;

        discoverSection.appendChild(card);
    });
}

loadDiscoverCards();

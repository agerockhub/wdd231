// spotlight.js

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filter only Gold (3) & Silver (2) membership levels
        const qualified = members.filter(m => m.membership_level === 3 || m.membership_level === 2);

        // Shuffle array
        const shuffled = qualified.sort(() => 0.5 - Math.random());

        // Pick 2 or 3 randomly
        const count = Math.random() < 0.5 ? 2 : 3;
        const selected = shuffled.slice(0, count);

        displaySpotlights(selected);

    } catch (error) {
        console.error("Spotlight Load Error:", error);
    }
}

function displaySpotlights(selectedMembers) {
    const spotlightDiv = document.querySelector(".spotlight");
    spotlightDiv.innerHTML = "";

    selectedMembers.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spot-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Office:</strong> ${member.office_location}</p>
            <a href="${member.website}" target="_blank" class="visit-btn">Visit Website</a>
        `;

        spotlightDiv.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadSpotlights);

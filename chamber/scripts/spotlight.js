async function loadMembers() {
    try {
        const response = await fetch("data/spotlight.json");
        const members = await response.json();
        displayMembers(members, "grid"); // Default view only
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members, viewType) {
    const container = document.querySelector(".dynamic");
    container.innerHTML = ""; // Clear previous cards

    container.className = `dynamic ${viewType}`; // grid layout only

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Office:</strong> ${member.office_location}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadMembers);

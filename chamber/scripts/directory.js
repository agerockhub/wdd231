async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members, "grid"); // Default view
        setupViewToggle(members); // Pass members to the toggle function
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members, viewType) {
    const container = document.querySelector(".dynamic");
    container.innerHTML = ""; // Clear previous cards

    container.className = `dynamic ${viewType}`; // Toggle grid/list layout

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

function setupViewToggle(members) {
    // Create the buttons container
    const toggleDiv = document.createElement("div");
    toggleDiv.classList.add("toggle-view");
    toggleDiv.innerHTML = `
        <button id="gridBtn">Grid View</button>
        <button id="listBtn">List View</button>
    `;

    // Place it directly above the .dynamic section
    const dynamicSection = document.querySelector(".dynamic");
    dynamicSection.parentNode.insertBefore(toggleDiv, dynamicSection);

    // Add event listeners
    document.getElementById("gridBtn").addEventListener("click", () => {
        displayMembers(members, "grid");
    });

    document.getElementById("listBtn").addEventListener("click", () => {
        displayMembers(members, "list");
    });
}

document.addEventListener("DOMContentLoaded", loadMembers);

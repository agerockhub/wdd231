async function loadMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    } catch (err) {
        console.error("Error loading JSON:", err);
    }
}

function displayMembers(members) {
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <div>
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${member.membership_level}</p>
        <p><strong>Office Location:</strong> ${member.office_location}</p>
      </div>
    `;

        cardsContainer.appendChild(card);
    });
}

document.getElementById("gridBtn").addEventListener("click", () => {
    document.getElementById("cards").classList.remove("list");
    document.getElementById("cards").classList.add("grid");
});

document.getElementById("listBtn").addEventListener("click", () => {
    document.getElementById("cards").classList.remove("grid");
    document.getElementById("cards").classList.add("list");
});

loadMembers();

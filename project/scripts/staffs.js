// scripts/staffs.js

document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.getElementById("profile");

    fetch("data/staffs.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(staff => {

                // Create card container
                const card = document.createElement("div");
                card.classList.add("staff-card");

                // Image
                const img = document.createElement("img");
                img.src = staff.image;
                img.alt = staff.name;

                // Name
                const name = document.createElement("h3");
                name.textContent = staff.name;

                // Address
                const address = document.createElement("p");
                address.innerHTML = `<strong>Address:</strong> ${staff.address}`;

                // Subject
                const subject = document.createElement("p");
                subject.innerHTML = `<strong>Subject:</strong> ${staff.subject}`;

                // Append elements into card
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(address);
                card.appendChild(subject);

                // Add card to the DOM
                profileContainer.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading staff JSON:", err));
});

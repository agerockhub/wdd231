// scripts/staffs.js

document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.getElementById("profile");
    const staffForm = document.getElementById("staffForm");

    // Load existing staff
    fetch("data/staffs.json")
        .then(res => res.json())
        .then(data => data.forEach(addStaffCard))
        .catch(err => console.error("Error loading staff JSON:", err));

    // Add card function (used for existing & new entries)
    function addStaffCard(staff) {
        const card = document.createElement("div");
        card.classList.add("staff-card");

        const img = document.createElement("img");
        img.src = staff.image;
        img.alt = staff.name;

        const name = document.createElement("h3");
        name.textContent = staff.name;

        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${staff.address}`;

        const subject = document.createElement("p");
        subject.innerHTML = `<strong>Subject:</strong> ${staff.subject}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(subject);

        profileContainer.appendChild(card);
    }

    // Form submit
    staffForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const newStaff = {
            name: document.getElementById("name").value,
            image: document.getElementById("image").value,
            address: document.getElementById("address").value,
            subject: document.getElementById("subject").value
        };

        // Add card instantly to UI
        addStaffCard(newStaff);

        // Send to backend to update JSON
        fetch("updateStaffs.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStaff)
        })
            .then(res => res.text())
            .then(msg => console.log(msg))
            .catch(err => console.error("Error updating JSON:", err));

        staffForm.reset();
    });
});

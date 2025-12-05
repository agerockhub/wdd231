document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("batches");
    const buttons = document.querySelectorAll(".batch-buttons button");
    let batchesData = [];

    // Get batches data
    fetch("data/batches.json")
        .then(response => response.json())
        .then(data => {
            batchesData = data;
            displayBatches(data);
        })
        .catch(err => console.error("Error loading batches:", err));

    // Display cards
    function displayBatches(list) {
        container.innerHTML = ""; // Clear old content

        list.forEach(batch => {
            const card = document.createElement("div");
            card.classList.add("batch-card");

            card.innerHTML = `
                <img src="${batch.teacher.image}" alt="${batch.teacher.name}">
                <h3>${batch.class} Class</h3>
                <p><strong>Time:</strong> ${batch.time}</p>
                <p><strong>Teacher:</strong> ${batch.teacher.name}</p>
                <p><strong>Address:</strong> ${batch.teacher.address}</p>
                <p><strong>Subject:</strong> ${batch.teacher.subject}</p>
                <span class="status ${batch.status}">${batch.status.toUpperCase()}</span>
            `;

            container.appendChild(card);
        });
    }

    // Filter buttons
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            if (filter === "all") {
                displayBatches(batchesData);
            } else {
                const filtered = batchesData.filter(x => x.status === filter);
                displayBatches(filtered);
            }
        });
    });
});

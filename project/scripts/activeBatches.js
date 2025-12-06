document.addEventListener("DOMContentLoaded", () => {
    const activeDiv = document.getElementById("activeBatches");

    fetch("data/batches.json")
        .then(response => response.json())
        .then(data => {
            // Filter only active batches
            const activeBatches = data.filter(batch => batch.status === "active").length;

            // Display result
            activeDiv.textContent = `Active Batches: ${activeBatches}`;
        })
        .catch(error => {
            console.error("Error loading batches:", error);
            activeDiv.textContent = "Active Batches: Unable to load data";
        });
});

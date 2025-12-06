document.addEventListener("DOMContentLoaded", () => {
    const completedDiv = document.getElementById("completed");

    fetch("data/batches.json")
        .then(response => response.json())
        .then(data => {
            // Count completed batches
            const completedCount = data.filter(batch => batch.status === "completed").length;

            // Update page
            completedDiv.textContent = `Completed batches: ${completedCount}`;
        })
        .catch(error => {
            console.error("Error loading batch data:", error);
            completedDiv.textContent = "Completed batches: Unable to load data";
        });
});

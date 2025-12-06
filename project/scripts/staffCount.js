document.addEventListener("DOMContentLoaded", () => {
    const totalStaffDiv = document.getElementById("totalStaff");

    fetch("data/staffs.json")
        .then(response => response.json())
        .then(data => {
            const total = data.length;
            totalStaffDiv.textContent = `Total Staff: ${total}`;
        })
        .catch(error => {
            console.error("Error loading staff list:", error);
            totalStaffDiv.textContent = "Total Staff: Unable to load data";
        });
});

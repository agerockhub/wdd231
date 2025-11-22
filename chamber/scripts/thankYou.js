document.addEventListener("DOMContentLoaded", () => {

    const output = document.getElementById("thankYou");
    const data = JSON.parse(localStorage.getItem("membershipFormData"));

    if (!data) {
        output.innerHTML = "<p>No form data found.</p>";
        return;
    }

    output.innerHTML = `
    <div class="thankyou-card">
        <h2>Your Submission Details</h2>
        <p><strong>First Name:</strong> ${data["first-name"]}</p>
        <p><strong>Last Name:</strong> ${data["last-name"]}</p>
        <p><strong>Organizational Title:</strong> ${data["org-title"]}</p>
        <p><strong>Email Address:</strong> ${data["email"]}</p>
        <p><strong>Mobile Phone:</strong> ${data["phone"]}</p>
        <p><strong>Organization:</strong> ${data["organization"]}</p>
        <p><strong>Membership Level:</strong> ${data["membership-level"]}</p>
        <p><strong>Description:</strong> ${data["org-description"]}</p>
        <p><strong>Timestamp:</strong> ${data["timestamp"]}</p>
    </div>
    `;
});

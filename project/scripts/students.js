document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");
    const output = document.getElementById("student");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get field values
        const name = document.getElementById("name").value;
        const gender = document.getElementById("gender").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const telephone = document.getElementById("telephone").value;
        const address = document.getElementById("address").value;
        const course = document.getElementById("course").value;
        const time = document.getElementById("time").value;

        // Display the information
        output.innerHTML = `
            <div class="student-card">
                <h3>Student Registration Info</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telephone:</strong> ${telephone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Course:</strong> ${course}</p>
                <p><strong>Preferred Time:</strong> ${time}</p>

                <p class="email-note">A copy of your details has been sent to your email.</p>
            </div>
        `;

        // ⚠️ EMAIL SENDING (CLIENT-SIDE LIMITATION)
        // Browsers alone cannot send an email. You need:
        // Option A: EmailJS (easiest)
        // Option B: Your own backend with SMTP
        // Here we provide EmailJS setup:

        emailjs.send("serviceID", "templateID", {
            student_name: name,
            student_email: email,
            student_age: age,
            student_gender: gender,
            student_phone: telephone,
            student_address: address,
            student_course: course,
            student_time: time
        }).then(() => {
            console.log("Email sent!");
        }).catch(err => {
            console.error("Email failed:", err);
        });

        form.reset(); // Clear form
    });
});

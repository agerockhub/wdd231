
// Set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger Menu Toggle
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// ==== COURSE DISPLAY ====
importedCourses(); // Call function after load

function importedCourses() {
    displayCourses(courses); // show all by default
}

// Function to render courses
function displayCourses(courseArray) {
    const container = document.getElementById("courseContainer");
    container.innerHTML = ""; // clear old results

    courseArray.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        if (course.completed) courseCard.classList.add("completed");

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
            <p>${course.description}</p>
        `;

        container.appendChild(courseCard);
    });

    // Update credits dynamically
    const totalCredits = courseArray.reduce((sum, c) => sum + c.credits, 0);
    document.getElementById("credit").textContent =
        `Total credits for these courses: ${totalCredits}`;
}

// ==== FILTER BUTTONS ====
document.getElementById("all").addEventListener("click", () => {
    displayCourses(courses);
});
document.getElementById("cse").addEventListener("click", () => {
    displayCourses(courses.filter(course => course.subject === "CSE"));
});
document.getElementById("wdd").addEventListener("click", () => {
    displayCourses(courses.filter(course => course.subject === "WDD"));
});

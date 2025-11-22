document.addEventListener("DOMContentLoaded", () => {

    // Set timestamp
    const timestampField = document.getElementById("timestamp");
    timestampField.value = new Date().toLocaleString();

    const form = document.querySelector("form");

    form.addEventListener("submit", () => {
        const formData = new FormData(form);
        const dataObj = {};

        formData.forEach((value, key) => {
            dataObj[key] = value;
        });

        // Store in localStorage
        localStorage.setItem("membershipFormData", JSON.stringify(dataObj));
    });

});

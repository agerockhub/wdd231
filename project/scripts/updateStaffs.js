const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/add-staff", (req, res) => {
    const staff = req.body;

    fs.readFile("data/staffs.json", (err, data) => {
        if (err) return res.status(500).send("Error");

        const list = JSON.parse(data);
        list.push(staff);

        fs.writeFile("data/staffs.json", JSON.stringify(list, null, 2), () => {
            res.send("Staff added successfully");
        });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));

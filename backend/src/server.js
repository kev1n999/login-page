require("dotenv").config();
const express = require("express");
const router = require("./routes/routes");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
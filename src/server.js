require("dotenv").config();

const express = require("express");
const product = require("./routes/product.route");

const app = express();

// noinspection JSCheckFunctionSignatures
app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

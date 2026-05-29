const express = require("express");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const activitiesRouter = require("./routes/activities");
app.use("/activities", activitiesRouter);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});


const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Page Not Found", path: "/" });
});

app.listen(3000);

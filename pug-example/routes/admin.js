const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });

  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;

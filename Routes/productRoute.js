const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const router = express.Router();
const Product = require("../Models/ProductModel");

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
router.post("/create", (req, res, next) => {
  const newProduct = new Product({
    _id: new mongoose.Schema.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  newProduct.save().then((result) => {
    console.log(result);
    res
      .status(201)
      .json({
        message: "successfully created",
        product: newProduct,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (res) => {
      res
        .status(200)
        .json(res)
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  );
});
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

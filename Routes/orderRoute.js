const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
});
router.post("/create", (req, res, next) => {
  const newOrder = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "successfully created",
    order: newOrder,
  });
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "success",
  });
});
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: "success",
  });
});
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(204).json({
    message: "success",
  });
});

module.exports = router;

import express from "express";

const router = express.Router();

// ✅ TEST ROUTE (VERY IMPORTANT)
router.get("/test", (req, res) => {
  res.send("Property route working ✅");
});

// ✅ CREATE PROPERTY
router.post("/", (req, res) => {
  res.json({
    message: "Property created ✅",
    data: req.body
  });
});

export default router;
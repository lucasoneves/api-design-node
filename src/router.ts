import { Router } from "express";
import { body, validationResult } from 'express-validator';
import { createProduct, getProducts, updateProduct } from "./handlers/product";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

router.get("/product", getProducts);
router.post("/product", handleInputErrors, createProduct);
router.get("/product/:id", (req, res) => {
  res.send({ message: "success", status: 200 });
})
router.put("/product/:id", body('name'), updateProduct);
router.delete("product/:id", (req, res) => { });

/** Update **/

router.get("/update", (req, res) => {
  res.send("Hello on update page!");
});
router.get("/update/:id", (req, res) => {
  res.send("Hello on home update detail!");
})
router.put("/update/:id", (req, res) => { });
router.post("/update", (req, res) => { });
router.delete("/update/:id", (req, res) => { });

/** Update Points */

router.get("/updatepoint", (req, res) => {
  res.send("Hello on updatepoint page!");
});
router.get("/updatepoint/:id", (req, res) => {
  res.send("Hello on home updatepoint detail!");
})
router.put("/updatepoint/:id", (req, res) => { });
router.post("/updatepoint", (req, res) => { });
router.delete("/updatepoint/:id", (req, res) => { });

export default router;
import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ message: "success" });
});
router.get("/product/:id", (req, res) => {
  res.send({ message: "success", status: 200 });
})
router.put("product/:id", (req, res) => { });
router.post("product", (req, res) => { });
router.delete("product/:id", (req, res) => { });

/** Update **/

router.get("/update", (req, res) => {
  res.send("Hello on update page!");
});
router.get("/update/:id", (req, res) => {
  res.send("Hello on home update detail!");
})
router.put("update/:id", (req, res) => { });
router.post("update", (req, res) => { });
router.delete("update/:id", (req, res) => { });

/** Update Points */

router.get("/updatepoint", (req, res) => {
  res.send("Hello on updatepoint page!");
});
router.get("/updatepoint/:id", (req, res) => {
  res.send("Hello on home updatepoint detail!");
})
router.put("updatepoint/:id", (req, res) => { });
router.post("updatepoint", (req, res) => { });
router.delete("updatepoint/:id", (req, res) => { });

export default router;
import { handleInputErrors } from "./modules/middleware";
import { Router } from "express";
import { body, check, validationResult } from "express-validator";

const router = Router();

router.get("/verse", (req, res) => {
  res.json({ message: "message" });
});
router.get("/verse/:id", () => {});
router.put(
  "/verse/:id",
  body("content").isString(),
  body("book").isString(),
  body("chapter").isInt(),
  body("translation").isString(),
  body("verses").isArray({ min: 1 }),
  check("verses.*").isInt(),
  handleInputErrors,
  (req, res) => {}
);
router.post("/verse", () => {});
router.delete("/verse/:id", () => {});

export default router;

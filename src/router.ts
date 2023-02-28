import {
  createVerse,
  deleteVerse,
  getOneVerse,
  getVerses,
} from "./handlers/verse";
import { handleInputErrors } from "./modules/middleware";
import { Router } from "express";
import { body, check } from "express-validator";

const router = Router();

router.get("/verse", getVerses);
router.get("/verse/:id", getOneVerse);
router.put(
  "/verse/:id",
  body("content").optional().isString(),
  body("book").optional().isString(),
  body("chapter").optional().isInt(),
  body("translation").optional().isString(),
  body("verses").optional().isArray({ min: 1 }),
  check("verses.*").isInt(),
  handleInputErrors,
  (req, res) => {}
);
router.post(
  "/verse",
  body("content").isString(),
  body("book").isString(),
  body("chapter").isInt(),
  body("translation").isString(),
  body("verses").isArray({ min: 1 }),
  check("verses.*").isInt(),
  handleInputErrors,
  createVerse
);
router.delete("/verse/:id", deleteVerse);

export default router;

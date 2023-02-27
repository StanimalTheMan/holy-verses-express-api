import { Router } from 'express'
import { body, validationResult } from "express-validator";

const router = Router()

router.get('/verse', (req, res) => {
  res.json({message: 'message'})
})
router.get('/verse/:id', () => {})
router.put('/verse/:id', body('content').isString(), (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
})
router.post('/verse', () => {})
router.delete('/verse/:id', () => {})

export default router
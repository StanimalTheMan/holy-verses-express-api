import { Router } from 'express'

const router = Router()

router.get('/verse', (req, res) => {
  res.json({message: 'message'})
})
router.get('/verse/:id', () => {})
router.put('/verse/:id', () => {})
router.post('/verse', () => {})
router.delete('/verse/:id', () => {})

export default router
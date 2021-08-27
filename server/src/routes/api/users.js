import { Router } from 'express';
import requireJwtAuth from '../../middleware/requireJwtAuth';



const router = Router();

router.get('/', requireJwtAuth, async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: 'desc' });
  
      res.json({
        users: users.map((m) => {
          return m.toJSON();
        }),
      });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  });
  
  export default router;
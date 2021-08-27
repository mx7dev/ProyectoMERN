import { Router } from 'express';
import Message, { validateMessage } from '../../models/Message';
//import { registerSchema } from '../services/validators';
import {registerSchema } from '../../services/validators';
//require('../../services/validators');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 'desc' }).populate('user');

    res.json({
      messages: messages.map((m) => {
        return m.toJSON();
      }),
    });
  } catch (err) {
      console.log(err);
    res.status(500).json({ message: 'Something went wrong.' });
  }
});



export default router;
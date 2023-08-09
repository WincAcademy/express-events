import { Router} from 'express';
import getUsers from '../services/users/getUsers.js';

const router = Router();

router.get('/', (req, res) => {
    const users = getUsers()
    res.json(users)
});

export default router;

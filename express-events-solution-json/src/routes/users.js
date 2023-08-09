import { Router} from 'express';
import getUsers from '../services/users/getUsers.js';
import createUser from '../services/users/createUser.js';

const router = Router();

router.get('/', (req, res) => {
    const users = getUsers()
    res.json(users)
});

router.post('/', (req, res) => {
    const { name, password, username, image } = req.body
    const newUser = createUser(username, name, password, image)
    res.status(201).json(newUser)
});

export default router;

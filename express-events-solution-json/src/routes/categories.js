import { Router} from 'express';
import getCategories from '../services/categories/getCategories.js';

const router = Router();

router.get('/', (req, res) => {
    const categories = getCategories()
    res.json(categories)
});

export default router;

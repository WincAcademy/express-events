import { Router} from 'express';
import getCategories from '../services/categories/getCategories.js';
import createCategory from '../services/categories/createCategory.js';

const router = Router();

router.get('/', (req, res) => {
    const categories = getCategories()
    res.json(categories)
});

router.post('/', (req, res) => {
    const { name } = req.body
    const newCategory = createCategory(name)

    res.status(201).json(newCategory)
});


export default router;

import { Router} from 'express';
import getEvents from '../services/events/getEvents.js';

const router = Router();

router.get('/', (req, res) => {
    const events = getEvents()
    res.json(events)
});

export default router;

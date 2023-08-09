import { Router} from 'express';
import getEvents from '../services/events/getEvents.js';
import createEvent from '../services/events/createEvent.js';

const router = Router();

router.get('/', (req, res) => {
    const events = getEvents()
    res.json(events)
});

router.post('/', (req, res) => {
    const { name, description, location, image, startTime, endTime, createdBy, categoryIds } = req.body
    const newEvent = createEvent(name, description, location, image, startTime, endTime, createdBy, categoryIds)
    res.status(201).json(newEvent)
});

export default router;

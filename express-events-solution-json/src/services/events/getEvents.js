import eventData from '../../data/events.json' assert { type: 'json' }

const getEvents = () => {
    let events = eventData.events

    if (genre) {
        events = events.filter(event => event.genre === genre)
    }

    if (available !== undefined) {
        events = events.filter(event => event.available === JSON.parse(available))
    }

    return events
}

export default getEvents

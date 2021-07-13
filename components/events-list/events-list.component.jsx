import EventItem from "../event-item/event-item.component"
import classes from "./events-list.module.css"

const EventsList  = ({ items }) => {
    return (
        <ul className={classes.list}>
            {
                items.map((event) => <EventItem key={event.id} event={event}/>)
            }
        </ul>
    )
}

export default EventsList
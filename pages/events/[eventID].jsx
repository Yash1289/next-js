import { withRouter } from "next/router"
import { Fragment } from "react"
import { getEventById } from "../../seed-data"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

const EventDetailPage = ({ router }) => {

    const eventId = router.query.eventID;
    const event = getEventById(eventId)

    if(!event){
        return <p>No events found!</p>
    }

    return (
    <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics event={event}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>
    )
}
   

export default withRouter(EventDetailPage)
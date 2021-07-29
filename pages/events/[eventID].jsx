import { Fragment } from "react"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import ErrorAlert from "../../components/error-alert/error-alert"
import { getEventById } from "../../utils/utils-func"
import { getAllEventsID } from "../../utils/utils-func"
import database from "../../firebase"
import Head from "next/head"
import Comments from "../../components/input/comments"

const EventDetailPage = (props) => {

    const event = props.event

    if(!event){
        return (
            <ErrorAlert>
                <p>No events found!</p>
            </ErrorAlert>
        )
    }

    return (
    <Fragment>
            <Head>
                <title>{event.title}</title>
                <meta
                    name = "description" 
                    content = {event.description}
                />
            </Head>
        <EventSummary title={event.title} />
        <EventLogistics event={event}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        <Comments eventId={props.id} />
    </Fragment>
    )
}
   
export async function getStaticProps(context) {
    const  eventID  = context.params.eventID ;
    return database.ref("events").child(eventID).once("value").then((snapshot) => {
        return {
                props : {
                    event : snapshot.val(),
                    id : eventID
                },
                revalidate : 100
            }
    })
    
}

export async function getStaticPaths() {
    return {
        paths : await getAllEventsID(),
        fallback : true
    }
}

export default EventDetailPage
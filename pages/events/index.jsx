import { Fragment } from "react-is";
import { withRouter } from "next/router"
import EventsList from "../../components/events-list/events-list.component";
import EventsSearch from "../../components/events-search/events-search.component";
import database from "../../firebase";
import { getAllEvents } from "../../utils/utils-func";
import Head from "next/head"

const AllEventsPage = (props) => { 
    const events = props.events
    const findEvents = (year , month) => {
        const fullPath = `/events/${year}/${month}`
        props.router.push(fullPath)
    }
    return (
        <Fragment>
            <Head>
                <title>NextJs Events</title>
                <meta
                    name = "description" 
                    content = "Find a lot of great events to improve yourself...."
                />
            </Head>
            <EventsSearch  onSearch={findEvents}/>
            <EventsList items={events}/>
        </Fragment>
    )
}

export async function getStaticProps(){
   
        return {
            props : {
                events : await getAllEvents()
            },
            revalidate : 10
        }
}

export default withRouter(AllEventsPage) ; 
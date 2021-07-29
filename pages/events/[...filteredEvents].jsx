import { Fragment } from "react";
import { withRouter } from "next/router";
import EventsList from "../../components/events-list/events-list.component";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/button/button.component";
import ErrorAlert from "../../components/error-alert/error-alert";
import { getFilteredEvents } from "../../utils/utils-func";
import Head from "next/head"

const FilteredEvents = (props) => { 

    const { hadError , noEvents , filteredEvents} = props

   /*  const headData = () => (
                <Head>
                    <title>Filtered Events</title>
                    <meta
                        name = "description" 
                        content = {`All events for ${props.date.month}/${props.date.year}`}
                    />
                </Head>
    )
    This could be done and we could use the headData as {headData} inside every return to easily render head 
    on every page without copy paste */
    if(hadError) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid Filter . Please Adjust your values</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">All Events</Button>
                </div>
            </Fragment>
        )     
    }
    
    if(noEvents){
        return (
            <Fragment>
                <ErrorAlert>No Events Found for the choosen filter</ErrorAlert>
                <div className="center">
                    <Button link="/events">All Events</Button>
                </div>
            </Fragment>
        )
    }

     const date = new Date(props.date.year , props.date.month - 1)
            
    return (
        <Fragment>
            <Head>
                    <title>Filtered Events</title>
                    <meta
                        name = "description" 
                        content = {`All events for ${props.date.month}/${props.date.year}`}
                    />
                </Head>
            <ResultsTitle date={date} />
            <EventsList items={filteredEvents}/>
        </Fragment>
    )
}


export async function getServerSideProps(context){
        const dateFilter = context.params.filteredEvents;
     
    const year = +dateFilter[0] ;
    const month = +dateFilter[1]

    if(isNaN(year) || isNaN(month) || month < 1 || month > 12 || year > 2030){
        return {
            props : {
                hadError : true
            }
        }
    }
   
    const filteredEvents = await getFilteredEvents({ year , month })

    if(!filteredEvents || filteredEvents.length == 0){
        return {
            props : {
                noEvents: true
            }
        }
    }

    return {
        props : {
            date : {
                year ,
                month
            } ,
            filteredEvents
        }
    }
}

export default withRouter(FilteredEvents) ;
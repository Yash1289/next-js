import { getFeaturedEvents } from "../seed-data";
import EventsList from "../components/events-list/events-list.component";

const HomePage = () => {
    //console.log(getAllEvents())
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventsList items={featuredEvents}/>
        </div>
    )
}
  


export default HomePage;  
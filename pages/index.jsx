import Head from "next/head"

import EventsList from "../components/events-list/events-list.component";
import getFeaturedEvents from "../utils/utils-func";
import NewsletterRegistration from "../components/input/newsletter-registration"

const HomePage = ({ events }) => {
    const featuredEvents = events;

    return (
        <div>
            <Head>
                <title>NextJs Events</title>
                <meta
                    name = "description" 
                    content = "Find a lot of great events to improve yourself...."
                />
            </Head>
            <NewsletterRegistration />
            <EventsList items={featuredEvents}/>
        </div>
    )
}
  
 export async function getStaticProps(){
    return {
            props : {
                events : await getFeaturedEvents()
            },
            revalidate : 3600 
        }
} 

export default HomePage;  
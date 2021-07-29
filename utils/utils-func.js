import database from "../firebase"

const getFeaturedEvents = async () => {
    const dbRef = database.ref("events");
    const featuredEvents = []
    const snapshot = await dbRef.orderByChild("isFeatured").equalTo(true).once("value")
    snapshot.forEach((childSnapshot) => {
                featuredEvents.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                })
        })
    return featuredEvents
    
}

export const getEventById = async (id) => {
    const dbRef = database.ref("events");
    const event = await dbRef.child(id).once("value")
    return event.val()
}

export const getAllEventsID = async () => {
    const dbRef = database.ref("events")
    const eventsID = []
    const snapshot = await dbRef.orderByChild("isFeatured").equalTo(true).once("value")
     snapshot.forEach((childSnapshot) => {
                eventsID.push({
                    params : {
                        eventID : childSnapshot.key
                    }
                })
        })
    return eventsID
}

export const getAllEvents = async () => {
    const dbRef = database.ref("events")
    const events = []
    const snapshot = await dbRef.once("value")
      snapshot.forEach((childSnapshot) => {
                events.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                })
        })
    return events
}

export const getFilteredEvents = async ( dateFilter ) => {
    console.log
    const { year ,month } = dateFilter ;
    const events = await getAllEvents()

    let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents
}

export default getFeaturedEvents;
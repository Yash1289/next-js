const handler = (req ,res) => {
    if(req.method === 'POST') {
        const eventID = req.query.eventID;
        const newComment = {
            id : new Date().toISOString(),
            ...req.body
        }
        res.status(201).json({ message : "Added Comment" , comment : newComment})
    }
    if(req.method === "GET") {
        const dummyList = [
            { id : "c1" , name : "Yash" , text: "Just a dummy comment"},
            { id : "c2" , name : "Rohan" , text: "A very much real comment"},
        ]

        res.status(200).json({
            comments : dummyList
        });
    }
   // res.json({ message : "This works"})
}

export default handler;
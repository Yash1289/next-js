const handler = (req, res) => {
    console.log("called")
    if(req.method === 'POST') {
    const body = req.body

    console.log(body);
    res.status(201).json({ status : "received"}) ;
    }
}

export default handler;
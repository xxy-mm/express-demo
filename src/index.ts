import express from "express";

const app = express()
const port = 3333

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})
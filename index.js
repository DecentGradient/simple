const express = require('express')
var path = require('path');

const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
//TODO keep the password out of this file
const uri = "mongodb+srv://friedmanym:Jbb1zg9zTfhWN3mU@cluster0.mimfj.mongodb.net/simple?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("simple").collection("names");
    collection.insertMany(
            [{name:'Jacob'},{name:'Will'},{name:'Mark'},{name:'Ben'},{name:'Josh'},
                {name:'Aron'},{name:'Jesse'},{name:'Irina'},{name:'Sam'},{name:'Katie'},{name:'Lyla'}]

    )
});




app.get('/names', (req, res) => {
    client.connect(err => {
        const collection = client.db("simple").collection("names");
        collection.find({}).toArray((err,docs)=>{
            console.log(docs)
            res.send(docs)
            client.close()
        })

    });


})
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Listening at Port: ${port}`)
})

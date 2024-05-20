const express = require('express');
const cors = require('cors');


const app=express()
const port=process.env.PORT || 5000;



//middleware
app.use(cors())
app.use(express.json())

// mongo db connection 







const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:45qevT39nxBvIWIg@cluster0.crlsfbw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('Bistro Boss Server is Running')
});

app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
})

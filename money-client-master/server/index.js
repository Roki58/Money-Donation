const express=require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId=require("mongodb").ObjectId;

const app=express();
app.use(cors());
app.use(express.json())

//mongo connecting string
//const uri = "mongodb+srv://sajeeb:123456sajeeb@cluster0.wiibo.mongodb.net/?retryWrites=true&w=majority";
const uri="mongodb+srv://purna:2470purna@cluster0.z2een.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


//server home page
app.get("/",(req,res)=>{
    res.send("Hello Open my server");
})




async function run() {
  try {
    await client.connect();
    console.log("connetc")
   //database name
    const database = client.db("money-donating");
    //collection name
    const helpDataCollection = database.collection("help-data");
    const moneyCollection = database.collection("money-data");

    //post helping people data
    app.post("/helppost",async(req,res)=>{
        
      const result = await helpDataCollection.insertOne(req.body);
         //console.log(result)
          res.json(result)
    })

    //get helping people data
    app.get("/help", async(req,res)=>{
        const cursor = helpDataCollection.find({})
        const result = await cursor.toArray()
        res.send(result)
    })

    //get single helping people data
    app.get("/help/:id", async (req,res)=>{
       //console.log(req.params.id)
       // const result = await productCollection.findOne({id:req.params.id})
       const result = await helpDataCollection.findOne({ _id:ObjectId(req.params.id)})
        res.send(result)
    })

    app.get("/products/:id", async (req,res)=>{
       // console.log(req.params.id)
        const result = await productCollection.findOne({ _id:ObjectId(req.params.id) })
      // const result = await productCollection.findOne({product_name:req.params.id})
        res.send(result)
        //console.log(result)
    })
    //delete product
    app.delete("/product/:id", async (req,res)=>{
        //console.log(req.params.id)
        const result = await productCollection.deleteOne({_id:ObjectId(req.params.id)});
        res.send(result);
    })

    //get data by email
    app.get('/product/my/:email', async (req,res)=>{
        console.log(req.params.email)
        //console.log(req.params.name)

         const cursor =  productCollection.find({email:req.params.email})
         const result = await cursor.toArray()
         res.send(result)
         //console.log(result)
    })
//data update
    app.put("/donate/:id", async(req,res)=>{
        const product = req.body;
        let sum=0;
        sum+=req.body.
        console.log(product)
        console.log(req.params.id)
            const filter = { _id:ObjectId(req.params.id) };
            const options = { upsert: true };
            
            const updateDoc = { $set: {
                

            } };
            //const result = await helpDataCollection.updateOne(filter, updateDoc,options);
            // console.log(result)
            //res.send(result)
            res.json("done")
    })

    //post admin
    //post user data

    app.post('/donatemoney/:id', async (req, res) => {
        const user = req.body;
        console.log(user)
       const result = await moneyCollection.insertOne(user)
        console.log(result)
        res.json("result")
    })

    //get money
    app.get('/money',async(req,res)=>{
         const cursor = moneyCollection.find({})
          const result = await cursor.toArray()
          res.send(result)
      })
   
    console.log("database connected");
  } finally {
   
  }
}
run().catch(console.dir);




//server port
app.listen(5000,()=>{
    console.log("server starts");
})
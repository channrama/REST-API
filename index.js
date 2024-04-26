express=require("express")
model=require("./product.module.js")
server=express()
const mongoose=require("mongoose")
server.use(express.json())


  server.get("/products", async (req, res) => {
    try {
      const models = await model.find({});
      res.json(models);
      
    } catch (error) {
      res.status(500).send("Internal Server Error: " + error.message);
    }
  })
  server.post("/products", async (req, res) => {
    try {

      const models = await model.create(req.body);
      res.json(models);
      console.log(models);
    } catch (error) {
      res.status(500).send("Internal Server Error: " + error.message);
    }
  });

mongoose.connect("mongodb+srv://dschannappa93:JAYFn7ZsBFYTi5XZ@database.5rkqv3i.mongodb.net/?retryWrites=true&w=majority&appName=Database")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.error("ERROR !! Database is not connected:", error);
  });
server.listen(3000,()=>{
    try {
        console.log("server is started at port 3000"); 
        
    } 
    catch (error) {
       console.log("ERROR!!! while starting the server"); 
    }
});





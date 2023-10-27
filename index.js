import express from "express";
import cors from "cors";
import petsRoute  from "./routes/pets.routes.js"

const app = express();

app.use(express.json({urlencoded: true}))
app.use(cors())


// Routing

app.use("/pets", petsRoute)
const PORT = 3000;




if(process.env.NODE_ENV !== "test"){
app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
})
}


export default app
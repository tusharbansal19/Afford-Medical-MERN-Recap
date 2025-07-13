const express = require("express");
const app = express();
const cors=require("cors")
const port = 4000;
const router=require("./routes");
const {connect}=require("./Connect");
connect();
console.log('Attempting to connect to the database...');
app.use(cors(
    {
        origin:"*"
    }
));

// console.log('CORS middleware enabled for all origins');
app.use(express.json());
// console.log('Express JSON middleware enabled');
app.use("/api", router);
// console.log('API routes mounted at /api');
app.listen(port, ()=>{
    console.log('server is rinning on port no', 3000)
    console.log(`Server started successfully! Access it at http://localhost:${port}`);
}
);


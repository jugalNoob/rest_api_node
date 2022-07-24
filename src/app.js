const express = require('express');

require('./db/conn')
const   Register=require('./model/student')
const app = express();

app.use(express.json());


const port=process.env.PORT ||  9000;


app.get("",(req,res) => {


    res.send("hello jugal sharma")

})


app.post("/Post",async(req,res) => {


    try {

        const userdat=new Register(req.body)

        const one=await userdat.save()

        res.status(200).json({error:"good_io"})
        

        console.log(one)

    } catch (error) {

        console.error(error)
        res.status(401).json({error:"not_good_io"})
        
    }


})


//get data line


// app.get("/Info",async(req,res) => {



//     try {

//         const getdata=await Register.find({})



//         res.send(getdata)
//         res.status(200).json({error:"good_io"})
//     } catch (error) {
        

//         console.error(error)
//         res.status(401).json({error:"not_good_io"})

//     }
// })




app.get("/Post", async(req, res) => {



    try {
        
        const check=await Register.find({})

        res.send(check)

    } catch (error) {

        console.log(error)

        res.status(401).json({error:"not_good_io"})
    }


})




// id response of get data with

app.get("/Post/:id", async(req, res) => {



    try {


        const _id=req.params.id;
        const checks=await Register.findById({_id})

        res.send(checks)

    } catch (error) {

        console.log(error)

        res.status(401).json({error:"not_good_io"})
    }


})


//patch response with update




app.patch("/Post/:id", async(req, res) => {



    try {

        const _id=req.params.id;
        
        const checkes=await Register.findByIdUpdate(_id,req.body,{

            new:true,

        });

        res.send(checkes)

    } catch (error) {

        console.log(error)

        res.status(500).json({error:"not_good_io"})
    }


})

//delete data rest Api



app.delete("/Post/:id", async(req, res) => {



    try {

        const _id=req.params.id;
        
        const checkesr=await Register.findByIdDelete(_id);

        res.send(checkesr)

    } catch (error) {

        console.log(error)

        res.status(500).json({error:"not_good_io"})
    }


})



//last row class line start class
app.listen(port , ()=>{

    console.log("this is port " + port)
})
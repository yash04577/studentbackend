const express = require("express");
const router = new express.Router();
const student = require("../model/studentSchema");



router.get("/", (req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.json("router home page")
})

// creating student here
router.post("/createstudent", async(req,res)=>{

    try{
        res.set('Access-Control-Allow-Origin', '*');
        const {firstName,lastName,email,standard ,number , address, rollnumber} = req.body;
        const findStudent = await student.findOne({firstName,lastName,email,standard ,number , address, rollnumber});
        
        // checking wheather student is already present or not
        if(findStudent){
            res.statusCode = 200;
            res.json("student already present");
        }
    
        else{
            res.statusCode = 200;
            const newStudent = new student({firstName,lastName,email,standard, rollnumber ,number , address});
            await newStudent.save();
            res.json("student registered");
        }
    }

    // sending error if user send a bad request
    catch(err){
        res.statusCode = 400;
        res.json(err);
    }

})

// sending students data here
router.get("/getstudents", async(req,res)=>{

    try{
        res.set('Access-Control-Allow-Origin', '*');
        const students = await student.find({});
        res.statusCode = 200;
        res.json(students);
    }
    catch(err){
        console.log("error , ", err)
        res.statusCode = 400;
        res.json(err);
    }
})

// deleting students data here
router.delete("/deletestudent", async(req,res)=>{

    try{
        res.set('Access-Control-Allow-Origin', '*');
        // finding and deleting student
        const {firstName,lastName,email,standard ,number , address} = req.body;
        await student.deleteOne({firstName:firstName, lastName:lastName})
        res.statusCode = 200;
        res.json("deleted sucessfully");
    }
    catch(err){
        res.statusCode = 400;
        res.json(err);
    }
})


// renaming students data here
router.patch("/updatestudent", async(req,res)=>{

    try{
        res.set('Access-Control-Allow-Origin', '*');
        // finding and updating student data
        const {firstName,lastName,email,standard ,number , address, rollnumber,id} = req.body;
        await student.findOneAndUpdate({_id:id}, {
            firstName:firstName,
            lastName:lastName,
            email:email,
            standard:standard,
            number:number,
            address:address,
            rollnumber:rollnumber
        })
    
        res.statusCode = 200;
        res.json("renamed done");
    }
    catch(err){
        res.statusCode = 400;
        res.json(err);
    }
})

module.exports = router;


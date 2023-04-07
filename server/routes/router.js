const express = require ('express');//require express
const router = express.Router();//require express router
const User = require('../models/userSchema');//require userschema

//register user(use postman for testing)
router.post('/register',async (req,res)=>{
    const{name,email,age,mobile,work,address,desc,linkedin,other,skills,experience,edu}=req.body;
    if(!name || !email || !age || !mobile || !work || !address || !desc || !linkedin || !other || !skills || !experience || !edu){
        return res.status(422).json({error:"plz fill all field properly"});
    }

    try{
     const preuser = await User.findOne({ email: email});
     console.log(preuser);
     if(preuser){
        return res.status(422).json({error:"email already exist"});
     }
     else{
        const user = new User({name,email,age,mobile,work,address,desc,linkedin,other,skills,experience,edu});
        await user.save();
  
       //res.status(201).json({message:"User registered sucessful"});
       res.status(201).json(user);
       console.log(user);
     }
        
    }catch(err){
        res.status(422).json(error)
    }
       
})


//get userdata(use postman for testing)
router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await User.find();
        res.status(201).json(userdata);
        console.log(userdata);
    }
    catch(err){
        res.status(422).json(error)
    }
})
//get individual user(use postman for testing)
router.get("/getuser/:id",async(req,res)=>{
    try{
        
        console.log(req.params);
        const {id}=req.params;
        const userindividual = await User.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    }
    catch(err){
        res.status(422).json(error)
    }
})

//update user data
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const updateuser = await User.findByIdAndUpdate(id,req.body,{
            new:true
        }); 
        console.log(updateuser);
        res.status(201).json(updateuser);
    }
    catch(error){
        res.status(422).json(error);
    }
})

//delete user data
router.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteuser = await User.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    }
    catch(error){
        res.status(422).json(error);
    }
})


module.exports = router;



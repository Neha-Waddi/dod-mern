import User from "../models/user.model.js";

const signup = async(req,res)=>{
  try{
    const {userName,password,domainName,url}=req.body;

    const exist=await User.findOne({where:{userName:userName}});
    if(exist){
      return res.status(400).json({message:"username already taken"})
    }
    const user = await User.create({userName,password,domainName,url});
    res.status(200).json({user});
  }catch(err){
    res.status(500).send("error while signing up",err)
    console.error("error while signing up",err);
  }
}

export {signup};


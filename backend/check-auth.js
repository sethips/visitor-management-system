const JWT=require('jsonwebtoken');

module.exports=(req,res,next)=>{
  try{
    const token=req.headers.authorization.split(" ")[1];
    const decoded=JWT.verify(token,process.env.JWT_SECRET);
    next();
  }catch(error){
    return res.status(401).json({
      errors:'Auth Failed'
    });
  }
};
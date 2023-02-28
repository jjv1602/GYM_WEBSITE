import Programs from  '../../../Backend/models/Program';
import connectDB from '../../../Backend/config/db';
const handler=async(req,res)=>{
    if(req.method=='GET'){
        const result=await Programs.find();
        res.status(201).json(result);
    }
    if(req.method=='POST'){    
        const {title,info,path}=req.body;
        const add_tst=new Programs({title,info,path});
        const added=await add_tst.save();
        res.status(201).json(added);    
    }
    
}
export default connectDB(handler);
import Plans from  '../../../Backend/models/Plans';
import connectDB from '../../../Backend/config/db';
const handler=async(req,res)=>{
    if(req.method=='GET'){
        const result=await Plans.find();
        res.status(201).json(result);
    }
    if(req.method=='POST'){    
        // for(let i=0;i<req.body.length;i++){
            // const {name,desc,price,features}=req.body[i];
            const {name,desc,price,features}=req.body;
        const add_tst=new Plans({name,desc,price,features});
        const added=await add_tst.save();
        res.status(201).json(added);    
 
    }
}
export default connectDB(handler);
import Program from  '../../../Backend/models/Program';
import connectDB from '../../../Backend/config/db';

const handler=async(req,res)=>{
    
    if(req.method=='GET'){
        const prg_id=req.query.prg_id;
        
        const single=await Program.findById(prg_id);  

        res.status(201).json(single);
    }
    if(req.method=='PUT'){
        const prg_id=req.query.prg_id;
        
        const single=await Program.findById(prg_id);  
        
         const {title,info,path}=req.body;
            single.title=title;
            single.info=info;
            single.path=path;
            const updatedprg=await single.save();
            res.status(201).json(updatedprg);
    }
    if(req.method=='DELETE'){
        const prg_id=req.query.prg_id;
   
            await Program.deleteOne({_id:prg_id});
            res.status(201).json({ok:"Deleted Successfully"});
    }
}
export default connectDB(handler);
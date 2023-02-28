import Testimonials from  '../../../Backend/models/Testimonials';
import connectDB from '../../../Backend/config/db';

const handler=async(req,res)=>{
    
    if(req.method=='GET'){
        const tstmt_id=req.query.tstmt_id;
        
        const single=await Testimonials.findById(tstmt_id);  

        res.status(201).json(single);
    }
    if(req.method=='PUT'){
        const tstmt_id=req.query.tstmt_id;
        
        const single=await Testimonials.findById(tstmt_id);  
        
         const {name,quote,job}=req.body;
            single.name=name;
            single.quote=quote;
            single.job=job;
            const updatedfaq=await single.save();
            res.status(201).json(updatedfaq);
    
    }
    
}
export default connectDB(handler);
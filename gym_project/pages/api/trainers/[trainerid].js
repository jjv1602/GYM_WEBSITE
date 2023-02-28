import Trainers from  '../../../Backend/models/Trainers';
import connectDB from '../../../Backend/config/db';
import { useRouter } from 'next/router';

const handler=async(req,res)=>{
    
    if(req.method=='GET'){
        const trainer_id=req.query.trainerid;
        
        const single=await Trainers.findById(trainer_id);  

        res.status(201).json(single);
    }
    if(req.method=='PUT'){
        const trainer_id=req.query.trainerid;
        
        const single=await Trainers.findById(trainer_id);  
        
         const {name,image,job}=req.body;
            single.name=name;
            single.image=image;
            single.job=job;
            const updatedfaq=await single.save();
            res.status(201).json(updatedfaq);
    
    }
    
}
export default connectDB(handler);
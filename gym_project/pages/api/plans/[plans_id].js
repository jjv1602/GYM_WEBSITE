import Plans from  '../../../Backend/models/Plans';
import connectDB from '../../../Backend/config/db';

const handler=async(req,res)=>{
    
    if(req.method=='GET'){
        const plans_id=req.query.plans_id;
        
        const single=await Plans.findById(plans_id);  

        res.status(201).json(single);
    }
    if(req.method=='PUT'){
        const plans_id=req.query.plans_id;
        
        const single=await Plans.findById(plans_id);  
        
         const {name,desc,price,features}=req.body;
            single.name=name;
            single.desc=desc;
            single.price=price;
            single.features=features;
            const updatedplan=await single.save();
            res.status(201).json(updatedplan);
    
    }
    if(req.method=='DELETE'){
        const plans_id=req.query.plans_id;
   
            await Faqs.deleteOne({_id:plans_id});
            res.status(201).json({ok:"Deleted Successfully"});
    }
    
}
export default connectDB(handler);
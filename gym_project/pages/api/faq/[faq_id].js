import Plans from  '../../../Backend/models/Plans';
import connectDB from '../../../Backend/config/db';
import Faqs from '@/Backend/models/Faqs';
const handler=async(req,res)=>{
    
    if(req.method=='GET'){
        const faq_id=req.query.faq_id;
        
        const single=await Faqs.findById(faq_id);  

        res.status(201).json(single);
    }
    if(req.method=='PUT'){
        const faq_id=req.query.faq_id;
        const {question,answer}=req.body;
        const temp=await Faqs.findById(faq_id);
        temp.question=question;
        temp.answer=answer;
        const updatedfaq=await temp.save();
        res.status(201).json(updatedfaq);
    }
    if(req.method=='DELETE'){
        const faq_id=req.query.faq_id;
   
            await Faqs.deleteOne({_id:faq_id});
            res.status(201).json({ok:"Deleted Successfully"});
    }
    
}
export default connectDB(handler);
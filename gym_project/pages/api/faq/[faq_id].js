import Plans from  '../../../Backend/models/Plans';
import connectDB from '../../../Backend/config/db';

const handler=async(req,res)=>{
    
    if(req.method=='GET'){
        const faq_id=req.query.faq_id;
        
        const single=await Faqs.findById(faq_id);  

        res.status(201).json(single);
    }
    if(req.method=='PUT'){
        const faq_id=req.query.faq_id;
        const {question,answer}=req.body;
        const thisfaq=await Faqs.findById(faq_id);
        thisfaq.question=question;
        thisfaq.answer=answer;
        const updatedfaq=await thisfaq.save();
        res.status(201).json(updatedfaq);
    }
    
}
export default connectDB(handler);
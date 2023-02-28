import Faqs from  '../../../Backend/models/Faqs';
import connectDB from '../../../Backend/config/db';
const handler=async(req,res)=>{
    if(req.method=='GET'){
        const allfaqs=await Faqs.find();
        res.status(201).json(allfaqs);
    }
    if(req.method=='POST'){
        const { question,answer}=req.body;
        const newfaq=new Faqs({question,answer});
        const added=await newfaq.save();
        res.status(201).json(added);
}
}
export default connectDB(handler);
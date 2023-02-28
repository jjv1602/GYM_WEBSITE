import Testimonials from  '../../../Backend/models/Testimonials';
import connectDB from '../../../Backend/config/db';
import Trainers from  '../../../Backend/models/Trainers';
const handler=async(req,res)=>{
    if(req.method=='GET'){
        const result=await Testimonials.find();
        res.status(201).json(result);
    }
    if(req.method=='POST'){    
        const {name,quote,job}=req.body;
        const add_tst=new Testimonials({name,quote,job});
        const added=await add_tst.save();
        res.status(201).json(added);
    }
}
export default connectDB(handler);
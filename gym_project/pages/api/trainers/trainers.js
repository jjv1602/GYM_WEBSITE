import Trainers from  '../../../Backend/models/Trainers';
import connectDB from '../../../Backend/config/db';
import Trainers from  '../../../Backend/models/Trainers';
const handler=async(req,res)=>{
    if(req.method=='GET'){
        const Alltrainers=await Trainers.find();
        res.status(201).json(Alltrainers);
    }
    if(req.method=='POST'){
        const handler=async(req,res)=>{
            if(req.method=='POST'){
                const {name,image,job}=req.body;
                const add_trn=new Trainers({name,image,job});
                const added=await add_trn.save();
                res.status(201).json(added);
            }
            
        }
    }
}
export default connectDB(handler);
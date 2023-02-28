const mongoose = require('mongoose')
const ProgramsSchema = mongoose.Schema(
    {
        
        // icon same 
        title: {
            type: String,
            required: true,
        },
        info:{
            type:String,
        },
        path: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
mongoose.models={}
export default mongoose.model("Programs",ProgramsSchema);

const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const TrainersSchema = mongoose.Schema(
    {
      
        name: {
            type: String,
            required: true,
        },
        image:{
            type:String,
        },
        job: {
            type: String,
            required: true,
        },
        socials: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);


mongoose.models={}
export default mongoose.model("Trainers",TrainersSchema);
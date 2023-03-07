const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const testimonialsSchema = mongoose.Schema(
    {
       
        name: {
            type: String,
            required: true,
        },
        quote: {
            type: String,
            required: true,
        },
        job: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

mongoose.models={}
export default mongoose.model("Tst",testimonialsSchema);
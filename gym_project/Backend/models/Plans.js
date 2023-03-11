const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const PlansSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
        },
        desc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        features:{
           type:[String],
        },
    },
    {
        timestamps: true,
    }
);
mongoose.models={}
export default mongoose.model("Plans",PlansSchema);
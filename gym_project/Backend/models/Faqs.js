const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const faqSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            unique: true,  //with unique two questions with same cannot be entered
        },
        answer: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);
mongoose.models={}
export default mongoose.model("Faqs",faqSchema);

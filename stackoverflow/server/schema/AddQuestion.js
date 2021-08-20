import mongoose from 'mongoose';

const question = new mongoose.Schema( {
    tag:{
        type: String,
        // required: true,
        // trim:true
    },
    body:{
        type: String,
        // required: true
    },
    username: {
        type: String,
         required: true,
         trim: true,
        index: true,
        lowercase: true
    }
});


const AddQuestion = mongoose.model('question', question);

export default AddQuestion;
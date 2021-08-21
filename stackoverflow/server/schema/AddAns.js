import mongoose from 'mongoose';

const answer = new mongoose.Schema( {
   
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
    },
    questionId :{
        type: String,
         required: true,
        trim:true

    }
});


const AddAns = mongoose.model('answer', answer);

export default AddAns;
import express from 'express';
import AddQuestion from '../schema/AddQuestion.js';
import User from '../schema/user.js';
// import Medicine from '../schema/'

const router = express.Router();


router.post('/signin', async (req,res,next) => {
    const exist = await User.findOne({ username: req.body.username });
    
    if(exist){
        return res.status(401).json('Username already exist');
    } 
    User.create(req.body)
    .then(data => res.json(data))
    .catch(next => console.log(next));
})

router.post('/login', async (req, res, next) => {
    const user = await User.findOne({username: req.body.username, password: req.body.password});
    console.log(req.body.username);
    if(user)
    {
        return res.status(200).json(`${req.body.username} login successfull`);
    }
    else
    {
        return res.status(401).json('Invalid Login');
    }
})
router.post('/AddQuestion', async (req,res,err) => {
    const exist = await AddQuestion.findOne({username: req.body.username})
    console.log(exist);
    if(exist){
        await AddQuestion.updateOne({"_id":exist._id},{$set:{tag:req.body.tag, body:req.body.body }});
        console.log("Data updated Successfully");
    }else{
        AddQuestion.create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err))
    } 
})



router.get('/user/search', async(req,res,err) => {
    const exist = await User.find(req.query)
    if(exist)
    {
        return res.json(exist);
    }
    else 
    {
        return res.json('user not found');
    }
})




export default router;
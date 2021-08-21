

import { Form, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { questionAdder } from './servise/service.js';
import { LoginContext } from './controller/LoginState';
import { answerAdder } from './servise/service.js';

const AddAns = (questionid) => {
const queid = questionid.queid;

console.log(questionid);
    const {account, setAccount} = useContext(LoginContext);

    const ansInitialValues = {
        questionId : queid,
        body: '',
        username: account
    };

    const [ans, setans] = useState(ansInitialValues);

    const onInputChange = (e) => {
        setans({ ...ans, [e.target.name]: e.target.value});
    }

    const history = useHistory();
    
    const clickHandler = async (ans) => {
        console.log(ans);
        let response = await answerAdder(ans);
        if(!response) {
            alert("invalid question");
            setans({ ...ans, body: ''});
            return;  
        }
        setans(ansInitialValues);
    }

    return (
        <div style={{ display: 'block', 
        width: '100%',
        margin: '50px auto',
        borderRadius: '5px',
        background: 'rgba(255,255,255, 0.15)',
        padding: 80,
        }} className="col-8">
            <h4 style={{color: 'black', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 20}}>
                Add Answer
            </h4>
            <h4 style={{color: 'black', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 20}}>
             question :    {questionid.Qbody}
            </h4>
            <Form className="my-4">
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Answer</span>
                        </Form.Label>
                        <Form.Control onChange={(e) => onInputChange(e)} value={ans.body} name="body" type="text" placeholder="enter the tag of the answer"/>
                    </Form.Group>
                </Row>
                <Button size="lg" variant="success" onClick={() => clickHandler()} style={{marginLeft: '45%', marginTop: 40}}>
                    Submit
                </Button>
            </Form>
        </div>
    ) 
}

export default  AddAns;
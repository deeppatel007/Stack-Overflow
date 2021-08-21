

import { Form, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { questionAdder } from './servise/service.js';
import {LoginContext} from './controller/LoginState.jsx';
import {LoginState} from './controller/LoginState';

const AddQuestion = () => {

    const {account,setAccount} = useContext(LoginContext);

    const questionInitialValues = {
        tag: '',
        body: '',
        username: account
    };

    const [question, setquestion] = useState(questionInitialValues);

    const onInputChange = (e) => {
        setquestion({ ...question, [e.target.name]: e.target.value});
    }

    const history = useHistory();
    
    const clickHandler = async () => {
        console.log(question);
        let response = await questionAdder(question);
        if(!response) {
            alert("invalid question");
            setquestion({ ...question, body: ''});
            return;  
        }
        setquestion(questionInitialValues);
    }

    return (
        <div style={{ display: 'block', 
        width: '100%',
        margin: '50px auto',
        borderRadius: '5px',
        background: 'rgba(255,255,255, 0.15)',
        padding: 80,
        }} className="col-8">
            <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 20}}>
                Add Question
            </h4>
            <Form className="my-4">
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Question Tag</span>
                        </Form.Label>
                        <Form.Control onChange={(e) => onInputChange(e)} value={question.tag} name="tag" type="text" placeholder="enter the tag of the question"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Type Your Question</span>
                        </Form.Label>
                        <Form.Control onChange={(e) => onInputChange(e)} value={question.body} name="body"  as="textarea" placeholder="enter the question"/>
                    </Form.Group>
                </Row>
                <Button size="lg" variant="success" onClick={() => clickHandler()} style={{marginLeft: '45%', marginTop: 40}}>
                    Submit
                </Button>
            </Form>
        </div>
    ) 
}

export default AddQuestion;
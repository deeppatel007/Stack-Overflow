  
import { Col, Row, Card, Spinner, Button } from 'react-bootstrap';
import { useEffect, useState} from 'react';
import {FaRegQuestionCircle} from 'react-icons/fa';
import {FcIdea} from 'react-icons/fc'
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const url = 'http://localhost:2000/api';

const Answer = (props) => {
    console.log(props.questionid);
    const [ queid, setqueid ] = useState(props.questionid);
    var [ answerdata, setAnswerdata ] = useState([]);

    

    const answerfinder = async (queid) => {
        console.log(queid);
        try {
            await axios.get(`${url}/answer/search`,{'params':{questionId: queid._id}})
            .then ((res) => {
                setAnswerdata([...answerdata, res.data]);
                console.log(answerdata);
            })
        }catch(err) {
            console.log('Error while finding User',err);
        }
    }

    useEffect(() => {
        answerfinder(queid);
    }, [])
console.log(answerdata);
    return (
        <div>
        {
           
                answerdata.length=== 0 ?
                // <Child  />
                <div className="d-flex justify-content-center">
                    <Alert msg={"Answer not found"} color={'warning'}/>
                </div>
                :
                <Row xs={1} md={2} className="g-4" style={{margin: '3% 3%'}}>
                    {
                        answerdata[0].map((ans,index) => (
                            <Col className = "mb-3">
                                <Card border="success" style = {{backgroundColor: 'rgba(255,255,255, 0.15)', color: '#ffffff', borderWidth: '2px'}}>
                                    <Card.Body> 
                                        <Card.Title style={{textTransform: 'uppercase'}}>Answers</Card.Title>
                                        <Card.Text>
                                            <span style={{color:'#5cb85c'}}>Answer Given By: </span > <span style={{color:'black'}}>{ans.username}</span>
                                            <br/>
                                            <span style={{color:'#5cb85c'}}>Given Answer: </span><span style={{color:'black'}}>{ans.body}</span>
                                            <br/>
                                            
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
           
        }
        </div>
    )
}


export default Answer;

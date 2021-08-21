import { Col, Row, Card, Spinner, Button, Container } from 'react-bootstrap';
import { useEffect, useState, useContext} from 'react';
import {FaRegQuestionCircle} from 'react-icons/fa';
import axios from 'axios';
import Alert from './Alert';
import {LoginContext} from './controller/LoginState';
import AddAns from '../src/AddAns';

const url = 'http://localhost:2000/api';

const Output = () => {
    var [ questiondata, setQuestiondata ] = useState([]);

    // const {account, setAccount} = useContext(LoginContext);

    const [ clickdone, setClickdone ] = useState(false);

    const [ clickquestionid, setClickquestionid ] =  useState();

   

  

    const questionSaver = async () => {
        try {
            await axios.get(`${url}/question/search`)
            .then ((res) => {
                console.log(res.data);
                setQuestiondata(questiondata => ([...questiondata, res.data]));
            // console.log(questiondata);
            })
        }catch(err) {
            console.log('Error while finding User',err);
        }
    }
    console.log(questiondata[0]);


    useEffect(() => {
        questionSaver();
    }, [])
   
    

    return (
        <div>
        {
            (clickdone === false) ? 
            <div>
            {
                // component for all the questions output
                <Row xs={1} md={2} className="g-4" style={{margin: '3% 3%'}}>
                {
                    (questiondata[0] === undefined)?
                        <div></div>:
                        questiondata[0].map((question) => (
                            <Col className = "mb-3">
                                <Card border="success" style = {{backgroundColor: 'rgba(255,255,255, 0.15)', color: 'black', borderWidth: '2px'}}>
                                    <Card.Body> 
                                        <Card.Title>Tag: {question.tag}</Card.Title>
                                        <Card.Text>
                                            <span style={{color:'black'}}>Question: </span>{question.body}
                                            <br/>
                                            <span style={{color:'black'}}>Asked By: {question.username}</span>
                                        </Card.Text>
                                        <div className="d-flex justify-content-around">
                                            <Button  size="sm" id="seeanswer" onClick={() => {setClickdone("seeanswer"); setClickquestionid(question)}}>
                                                See Answers
                                            </Button>
                                            <Button  size="sm" id="addanswer" onClick={() => {setClickdone("addanswer"); setClickquestionid(question)}}>
                                                Add Answer
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                }
                </Row>
            }
            </div>
            :
            <div>
            {
                (clickdone === "seeanswer")?
                <div>
                    
                </div>
                : 
                <div>
                    <AddAns queid={clickquestionid._id} Qbody={clickquestionid.body} Quser = {clickquestionid.username}/>
                </div>
            }
            </div>
        }
        </div>
    )
}



export default Output;



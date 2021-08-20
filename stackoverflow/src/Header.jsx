import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap';
import { useContext } from 'react';

import {IoMdPower} from 'react-icons/io';
import {FaRegHandPeace} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { LoginContext } from './controller/loginstate';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const { account,setAccount } = useContext(LoginContext);
    
    const history = useHistory();

    const clickHandler = () => {
        history.push('/');
        setAccount('');
    }

        return (
            <Navbar style={{height: 50, background: 'orange', marginTop: 15}} sticky="top">
            <Link to='/' className="mx-auto">
                <Navbar.Brand>
               
                    {/* <GiMedicines className="mb-2" style={{color: '#5cb85c'}}/> */}
                    <span style={{color:'white', fontWeight: 600}}>Stack</span>
                    <span style={{color:'white', fontWeight: 600}}>Overflow</span>
                    </Navbar.Brand>
            </Link>
            {
                account === '' ?
                // login pachinu
                <Nav className="ml-auto mx-auto">
                        <Link to='/Signup'>
                            <Nav.Item  className="mr-4">
                                <Button variant="outline-success">
                                    AdminSignup
                                </Button>
                            </Nav.Item>
                        </Link>
                        <Link to='/Login'>
                            <Nav.Item style = {{color: 'white'}}>
                                <Button variant="success">
                                    AdminLogin
                                </Button>
                            </Nav.Item>
                        </Link>
                </Nav>
                :
                // login pelanu default
                <Nav className="ml-auto mx-auto">
                    <Link to='/AddQuestion'>
                        <Nav.Item  className="mr-4">
                            <Button variant="outline-success">
                                AddQuestion
                            </Button>
                        </Nav.Item>
                    </Link>
                    <Link to='/Update'>
                        <Nav.Item style = {{color: 'white'}} className="mr-4">
                            <Button variant="outline-success">
                                Update/Delete
                            </Button>
                        </Nav.Item>
                    </Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {account}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={clickHandler}>
                                <IoMdPower style={{marginRight: 10}}/>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav> 
            }
        </Navbar>
        )
}





    


export default Header;



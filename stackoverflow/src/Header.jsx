import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {


        return (
            <Navbar style={{height: 50, background: 'orange'}} sticky="top" display="flex">
                <Navbar.Brand className="mx-auto">
                    <span style={{color:'white', fontWeight: 600}}>StackOverflow</span>
                </Navbar.Brand>

                <Nav className="d-flex mx-auto" display="flex">
                    <Nav.Item  className="mr-4">
                    <Link to='/Signup'>
                        <Button variant="outline-success">
                            Signup
                        </Button>
                        </Link>
                        
                    </Nav.Item>
                    <Nav.Item style = {{color: 'white'}}>
                    <Link to='/Login'>

                        <Button variant="success">
                            Login
                        </Button>
                        </Link>    
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
}





    


export default Header;



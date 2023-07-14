
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NewsCategories from '../NewsCategories/NewsCategories';
import { useContext } from 'react';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';



const Header = () => {
  const {user, ProviderLog_out} = useContext(AuthContex)

  const google_logout = ()=>{
    ProviderLog_out(google_logout)
    .then( () =>{
      alert('Sign-out successful.')
    })
    .catch( () =>{
      
    })
  }
    return (
      <>
      <div className='text-center my-4'>
          <h1>THE WORLD TIMES</h1>
          <h4>The perfect theme for news and magazine</h4>
      </div>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="text-sm-start navbar shadow p-3 mb-5 bg-body rounded">
    <Container>
      <Navbar.Brand><Link style={{ textDecoration: 'none' }} to='/'><h3>Newspaper</h3></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Nav.Link>
          <Nav.Link><Link ><NewsCategories></NewsCategories></Link></Nav.Link>
          <Nav.Link><Link className='link-underline-light' to="/about">About</Link></Nav.Link>
        </Nav>
        <Nav>
       {user?.uid?
         
           <Nav.Link><button onClick={google_logout} style={{ textDecoration: 'none' }} className='btn btn-link py-0'>Log out</button></Nav.Link>
           
        : <> 
          <Nav.Link><Link style={{ textDecoration: 'none' }} to="/login">Log in</Link></Nav.Link>
          <Nav.Link><Link style={{ textDecoration: 'none' }} to="/register">Register</Link></Nav.Link>
          </>
         }
          <Nav.Link eventKey={2}>
            <div className='py-0'>
              <span className='pe-2'>{user?.displayName}</span>
              <img style={{width: 30, height: 'auto'}} className='rounded-circle' src={user?.photoURL} alt="" />
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
    );
};

export default Header;


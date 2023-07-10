
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NewsCategories from '../NewsCategories/NewsCategories';


const Header = () => {
    return (
      <>
      <div className='text-center my-4'>
          <h1>THE WORLD TIMES</h1>
          <h4>The perfect theme for news and magazine</h4>
      </div>
      <Navbar sticky="top" collapseOnSelect expand="lg" className=" navbar shadow p-3 mb-5 bg-body rounded">
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
          <Nav.Link><Link style={{ textDecoration: 'none' }} to="/login">Log in</Link></Nav.Link>
          <Nav.Link><Link style={{ textDecoration: 'none' }} to="/logout">Log out</Link></Nav.Link>
          <Nav.Link><Link style={{ textDecoration: 'none' }} to="/register">Register</Link></Nav.Link>
          <Nav.Link eventKey={2}>
            <div>
              <img src="" alt="" />
              <span>Profile name</span>
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


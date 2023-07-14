import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import NewsCategories from '../NewsCategories/NewsCategories';
import { AiFillTwitterCircle,AiOutlineFacebook,AiOutlineSkype,AiFillGoogleCircle,AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className=' p-5 mb-2 bg-dark text-white'>
            <Row>
        <Col sm={6} md={4}>
          <div>
            <h4>The World Times</h4>
            <p>World Times is a newspaper / magazine style highly content focus theme for ghost blogging platform. You can remove this text and add text you want. May be you can show small text about your site.</p>
          </div>
        </Col>
        <Col sm={6} md={4}>
          <div>
            <h4>Tags</h4>
            <div>
            <Link><NewsCategories></NewsCategories></Link>
            </div>
            <div className='pt-3'>
                <h4>Navigation</h4>
            </div>
            <div className='d-flex align-items-center'>
                <p className='pe-2'>Terms</p>
                <p className='pe-2'>Privacy</p>
                <p className='pe-2'>About</p>
                <p className='pe-2'>Contact</p>
            </div>
          </div>
        </Col>
        <Col sm={6} md={4}>
          <div>
            <h4>Subscribe</h4>
            <p>Get all the latest posts delivered straight to your inbox.</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className='d-flex align-items-center'>
                <a href="https://www.facebook.com/mnhRomjanAli/"><p className='pe-2'><AiOutlineFacebook /></p></a>
                <a  href="https://www.linkedin.com/in/romjan-ali-01b53a283/"><p className='pe-2'><AiOutlineLinkedin /></p></a>
                <p className='pe-2'><AiFillTwitterCircle /></p>
                <p className='pe-2'><AiOutlineSkype /></p>
                <p className='pe-2'><AiFillGoogleCircle /></p>
                

            </div>
          </div>
        </Col>
      </Row>
      <p className='d-flex justify-content-center my-2'>Copyright © 2023 The World Times - All right Reserved. Published with Ghost</p>
        </div>
    );
};

export default Footer;
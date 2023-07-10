
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContex } from '../contex/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {ProviderLogin} = useContext(AuthContex);
    const googleprovider = new GoogleAuthProvider();

    const googleLogin = () =>{
        ProviderLogin(googleprovider)
        .then( (result) =>{
            const user = result.user;
            console.log(user)
        })
    } 
    return (
        <div className='d-flex justify-content-center'>
      <Form className='w-50 p-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
          <Form.Text className="text-muted">
          Log in with <Button onClick={googleLogin} className='py-0' variant="outline-primary" size="sm"> <FcGoogle/> Google</Button> Don’t have a account <Link style={{ textDecoration: 'none' }} to='/register'>Register now</Link>
        </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
 
    );
};

export default Login;
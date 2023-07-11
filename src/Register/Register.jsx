import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContex } from '../contex/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const {createUser} = useContext(AuthContex);
  const navegat = useNavigate()

  const handelRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    console.log(name, email, password)

    createUser(email,password)
    .then( (userCredential) =>{
      const user = userCredential.user;
      form.reset()
      navegat('/')

    })
    .catch( (error) =>{
      const errorCode = error.code;
       const errorMessage = error.message;
       })

  }

    return (
        <div className='d-flex justify-content-center'>
    <Form onSubmit={handelRegister} className='w-50 p-3'>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
            
        </div>
    );
};

export default Register;
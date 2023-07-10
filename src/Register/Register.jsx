
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {

    return (
        <div className='d-flex justify-content-center'>
    <Form className='w-50 p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" name='text' placeholder="Your name" required />
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
        Submit
      </Button>
    </Form>
            
        </div>
    );
};

export default Register;
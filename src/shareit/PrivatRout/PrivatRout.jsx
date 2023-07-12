import { useContext } from "react";
import { AuthContex } from "../../contex/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const PrivatRout = ({children}) => {

    const {user ,loading} = useContext(AuthContex);
    const location = useLocation();

    if(loading){
        return <>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </>
    }


    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }

    return children;

};

export default PrivatRout;
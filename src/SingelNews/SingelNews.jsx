import { Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";


const SingelNews = () => {
    const singelNews = useLoaderData();
    const {title,description,image, author, published_at } = singelNews;
    return (
      <Container>
          <Card className=" p-3 col border-0 shadow mb-5">
        <Card.Body className="card border-0">
          <img className='mb-5' src={image} alt="" />
          <Card.Title> {title} </Card.Title>
          <Card.Text> {description} </Card.Text>
          <div className="d-flex justify-content-between">
          <Card.Text>Author : {author} </Card.Text>
          <Card.Text>Date : {published_at} </Card.Text>

          </div>
        </Card.Body>
      </Card>
      </Container>
      
    );
};

export default SingelNews;
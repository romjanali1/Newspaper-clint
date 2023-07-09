import { Card } from 'react-bootstrap';
const News = ({news}) => {
    const {title,description,image } = news;
    return (
        <Card className="col border-0 shadow p-3 mb-5">
        <Card.Body className="card border-0">
          <img className='mb-5' src={image} alt="" />
          <Card.Title> {title} </Card.Title>
          <Card.Text> {description} </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default News;
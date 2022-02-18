import CardData from './../common/CardData';
import { Container, Row } from 'react-bootstrap';

function Main({ data }) {
  console.log(data);
  return (
    <Container>
      <Row xs={1} md={6} className="g-6">
        {data && data.map((item) => <CardData key={item.id} item={item} />)}
      </Row>
    </Container>
  );
}
export default Main;

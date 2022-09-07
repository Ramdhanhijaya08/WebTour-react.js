import { Col, Container, Row, Button, } from "react-bootstrap";

const Intro = () => {
  return (
    <div className=" intro">
      <Container
        className="text-white d-flex justify-content-center
         align-item-center">
        <Row>
          <Col>
            <div className="title">DISINI SENANG </div>
            <div className="title">DISANA SENANG </div>
            <div className="title2">DISINI TEMPATNYA JALAN - JALAN</div>
            <div className="introButton mt-4 text-center">
              <Button variant="light" href="#terpopuler">
                Lihat semua destinasi
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

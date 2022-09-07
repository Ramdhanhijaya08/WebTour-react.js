import { Navbar, Container, Nav, Button,Badge } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div class="container">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">jalanjalan.com</Navbar.Brand>
          <Nav>
            <Nav.Link href="#terpopuler">Terpopuler</Nav.Link>
            <Nav.Link href="#internasional ">Internasional</Nav.Link>
          </Nav>
          <div>
            <Button variant="outline-light me-4 mt-1 ">Masuk</Button>
            <Button variant="primary me-4 mt-1">Daftar</Button>
            {/* <Badge pill bg="primary me-4 mt-1 w-80 h-300 t-20">Primary</Badge> */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;

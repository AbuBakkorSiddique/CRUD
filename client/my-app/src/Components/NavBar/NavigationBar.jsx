import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar() {
  return (
<>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CRUD-PROJECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/read">READ</Nav.Link>
            <Nav.Link href="/create">CREATE</Nav.Link>
            <Nav.Link href="/update">UPDATE</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>






</>
  )
}

export default NavigationBar
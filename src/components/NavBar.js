import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import '../csss.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-danger p-3 text-white">
      <Container fluid>
        <Navbar.Brand className="animated-text" style={{ marginLeft: '9%', color: 'white', fontSize: '23px', fontWeight: 'bolder' }} href="/">Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='justify-content-end'>
          <Nav.Link style={{ marginRight: '5%' }} href="/Pokedex">About</Nav.Link>
          <div className="d-flex flex-row align-items-center">
            <Button className="btn-responsive mr-3" href='/Pokedex' variant='light'>Search Pokemon!</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

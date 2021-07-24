
import { Nav, Container, Navbar } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import '../App.css'


export const Navi = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="" variant="dark" fixed="top" style={{background:'#051937', opacit:'0.5'}}>
    <Container>
    <Navbar.Brand href="#page-top"><img src={logo} alt="" style={{ width: '100%', borderRadius: '6px', height:'50px' }} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       
        
        
      </Nav>
      <Nav>
         <Nav.Link href="#about" id="navLinks" >About</Nav.Link>
        <Nav.Link href="#services" id="navLinks">Services</Nav.Link>
        <Nav.Link href="#portfolio" id="navLinks">Gallery</Nav.Link>
        <Nav.Link href="#contact" id="navLinks">Contact</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
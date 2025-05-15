import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navebar() {
  return (
    // <Navbar expand="lg" >
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto" >
    //         <Nav.Link href="#">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


<div className='nav'>
    



<ul>      
              <li className="nav-item-help">
                <span>Help</span>
                <div className="dropdown-help">
                  <a to="/help#flower-care" >Flower Care</a>
                  <a to="/help#help-center" >Help Center</a>
                </div>
              </li>
        <li>home</li>
         <li>about</li>
          <li>contact</li>
           
</ul>
</div>





  );
}

export default Navebar;
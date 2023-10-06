import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const  Navbar= () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
    }  
}
    window.addEventListener("scroll", onScroll)
}, [])

    return ( 
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">
                    <img src={""} alt="logo"></img>
                    React-Bootstrap
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <span className='navbar-toggler-icon'></span>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                  </Nav>
                  <span className='navbar-text'>
                    <div>
                        <a href='#'><img src={""} alt=''></img>/</a>
                        <a href='#'><img src={""} alt=''></img>/</a>
                        <a href='#'><img src={""} alt=''></img>/</a>
                    </div>                   
                    <button className='vvd' onClick={() => console.log("connect")} ><span>Lrt#s connect </span>
                    </button> 
                     </span>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
 
export default Navbar;
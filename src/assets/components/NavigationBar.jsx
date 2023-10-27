
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav>
                            <Link to="/" className="text-white p-2 ">🏠Home</Link>
                            <Link to="/Contact" className="text-white p-2 " >📒Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="" className="text-white p-2"> Happy Cake 🍰</Link>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
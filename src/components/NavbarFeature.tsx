import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavbarFeature(): JSX.Element {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="https://www.cis.udel.edu/" target="popup">
                    UD CISC
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link
                            href="https://catalog.udel.edu/preview_program.php?catoid=47&poid=34727"
                            target="popup"
                        >
                            CS BS
                        </Nav.Link>
                        <Nav.Link
                            href="https://catalog.udel.edu/preview_program.php?catoid=47&poid=34726"
                            target="popup"
                        >
                            CS BA
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PeerXp</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/DashboardPage">
                <Nav.Link href="#DashboardPage"> DashboardPage</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/PostPage">
                <Nav.Link href="#PostPage">Posts Page</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/LinksPage">
                <Nav.Link href="#LinksPage">Links Page</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

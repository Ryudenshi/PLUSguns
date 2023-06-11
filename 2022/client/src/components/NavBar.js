import React, { useContext, useState } from "react";
import { Context } from "../index";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import './NavBar.css';
import { Button, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE } from "../utils/const"
import FAQ from "../components/modals/FAQ";

const NavigationBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();
  const [FAQModalVisible, setFAQVisible] = useState(false);

  const logOut = () => {
    user.setRole({})
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    window.location.reload();
  }

  return (
    <NavBar bg="dark" variant="dark" collapseOnSelect expand="lg">

      <Container>

        <Navbar.Brand className="">
          <span className="plusL">PLUS </span>
          <span className="gunsL">guns</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="mt-2 basenav" onClick={() => history(MAIN_ROUTE)}>Home</Nav.Link>
            <Nav.Link className="mt-2 basenav" onClick={() => history(SHOP_ROUTE)}>Shop</Nav.Link>
            <Nav.Link className="mt-2 basenav">Blog</Nav.Link>
            <Nav.Link className="mt-2 basenav" onClick={() => setFAQVisible(true)}>FAQ</Nav.Link>
            <FAQ show={FAQModalVisible} onHide={() => setFAQVisible(false)} />
          </Nav>
        </Navbar.Collapse>

        {user.isAuth ?
          <Nav className="navigationBar">
            {user.isRole === 'ADMIN' ?
              <Button className="navButton" onClick={() => history(ADMIN_ROUTE)}>Admin panel</Button>
              :
              <Button className="navButton" onClick={() => history(BASKET_ROUTE)}>Cart</Button>
            }
            <Button className="navButton" onClick={() => logOut()}>Logout</Button>
          </Nav>
          :
          <Nav className="navigationBar">
            <Button className="navButton" onClick={() => history(LOGIN_ROUTE)}>Autorisation</Button>
          </Nav>
        }

      </Container>

    </NavBar>
  );
});

export default NavigationBar;
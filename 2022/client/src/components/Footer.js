import React, { useState } from "react";
import {Container, Col, Row, Nav } from "react-bootstrap";
import './NavBar.css';
import { MAIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import { NavLink, useNavigate } from "react-router-dom";
import FAQ from "./modals/FAQ";


const Footer = () => {

    const history = useNavigate()
    const [FAQModalVisible, setFAQVisible] = useState(false);

    return (
        <footer className="text-white bg-dark mt-4">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col md={2}>
                        <h1 className="font-weight-bold mt-5 pt-2 footlogo">PLUS <span className="plusLfoot">guns</span></h1>
                    </Col>

                    <Col md={5}>
                        <h4>CONTACTS</h4>
                        <hr className="footer"/>
                        <p>Address: 17 Weapon Road, Great bullet, UA</p>
                        <p>Phone: +380-67-89-276, +380-96-12-089</p>
                        <p>Email: pluasguns@gmail.com</p>
                        <p><a href="#Instagram" className="footnavRev">Instagram</a></p>
                        <p><a href="#Facebook" className="footnavRev">Facebook</a></p>
                        <p><a href="#Telegram" className="footnavRev">Telegram</a></p>
                        <p>Copyright: © All Rights Reserved</p>
                    </Col>

                    <Col md={5}>
                        <h4>NAVIGATION</h4>
                        <hr className="footer"/>
                        <Nav className="d-block">
                            <Nav.Link className="mt-1 footnav" onClick={() => history(MAIN_ROUTE)}>Home</Nav.Link>
                            <Nav.Link className="mt-1 footnav" onClick={() => history(SHOP_ROUTE)}>Shop</Nav.Link>
                            <Nav.Link className="mt-1 footnav">Blog</Nav.Link>
                            <Nav.Link className="mt-1 footnav" onClick={() => setFAQVisible(true)}>FAQ</Nav.Link>
                            <FAQ show={FAQModalVisible} onHide={() => setFAQVisible(false)} />
                        </Nav>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;
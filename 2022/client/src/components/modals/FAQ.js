import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../NavBar.css';

const FAQ = ({show, onHide}) => {
    
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contacts
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <h4>To discuss any issues you can contuct us:</h4>
                    <ul>
                        <li className="FAQlists">Telegram: @PLAUSguns</li>
                        <li className="FAQlists">Email: plusguns@gmail.com</li>
                        <li className="FAQlists">Kyivstar: 067-89-276</li>
                        <li className="FAQlists">Vodafone: 096-12-089</li>
                    </ul>
                    <h4>or find us:</h4>
                    <ul>
                        <li className="FAQlists">
                            Address: 17 Weapon Road, Great Bullet, UA
                        </li>
                    </ul>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FAQ
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BigRatingStar from '../assets/BigRatingStar.png'
import { addToBasket, fetchOneWeapon } from '../http/weaponsAPI';
import './weaponPage.css';
import { FaRegHeart } from "react-icons/fa";


const WeaponPage = () => {
    const [weapons, setWeapons] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneWeapon(id).then(data => setWeapons(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('weaponId', id)
        addToBasket(formData).then(response => alert(weapons.name + 'was added to yuor basket!'))
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={5} >
                    <Row>
                        <Card>
                            <Row>
                                <Image width={525} height={300} src={process.env.REACT_APP_API_URL + weapons.img} fluid />
                            </Row>
                            <Row>
                                <div className='d-flex m-2'>
                                    <a href='https://www.instagram.com/'><div className='instaLogo d-flex'></div></a>
                                    <a href='https://web.telegram.org/'><div className='teleLogo d-flex mx-2'></div></a>
                                    <a href='https://uk-ua.facebook.com/'><div className='faceLogo d-flex'></div></a>
                                </div>
                            </Row>
                        </Card>
                        <Row className="my-2">
                            <h2>{weapons.name}</h2>
                        </Row>
                    </Row>
                    <Row>
                        <Card className="mb-2 mt-4">
                            <h1 className="mb-3 p-3">Information</h1>
                            <nav className="sidebar">
                                <div className="weaponInfo-scrollBox" style={{
                                    overflowY: "auto",
                                    maxHeight: "200px",
                                    overflowX: "hidden",
                                }}>
                                    {weapons.info.map((info, index) => (
                                        <Row
                                            key={info.id}
                                            style={{
                                                background: index % 2 === 0 ? "lightgray" : "transparent",
                                                padding: 10,
                                            }}
                                        >
                                            {info.title}: {info.description}
                                        </Row>
                                    ))}
                                </div>
                            </nav>
                        </Card>
                    </Row>
                    <Row>
                        <Card bg='light'>
                            <Row className='d-flex justify-content-center mt-2'><h3>Write a review</h3></Row>
                            <Row className='my-2'>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter your name</Form.Label>
                                        <Form.Control type="name" placeholder="ex: Evgen Lets" />
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row className='my-2'>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter your email</Form.Label>
                                        <Form.Control type="email" placeholder="ex: evgenL@gmail.com" />
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row className='my-2'>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control type="name" placeholder="ex: 1 to 5" />
                                    </Form.Group>
                                </Form>
                            </Row>
                            <Row className='mt-2 mb-4'>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>With textarea</Form.Label>
                                    <Form.Control as="textarea" type="name" placeholder="ex: Nice weapon to shoot some russian!" />
                                </Form.Group>
                            </Row>
                        </Card>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6} >
                            <Card>
                                <Form className="d-flex flex-column align-items-center">
                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{ background: `url(${BigRatingStar}) no-repeat center center`, width: 300, height: 300, backgroundSize: 'cover', fontSize: 40 }}
                                    >
                                        {weapons.rating}
                                    </div>
                                </Form>
                            </Card>
                        </Col>
                        <Col md={5} >
                            <Card
                                className="d-flex flex-column justify-content-around"
                                style={{ width: 400, height: 300, fontSize: 32 }}
                            >
                                <h1 className='m-5'>₴ {weapons.price}</h1>
                                <div className="d-flex flex-column">
                                    <div>
                                        <Button onClick={add} className="addToCart m-3" style={{ height: 44 }}>Add to cart</Button>
                                        <Button className='like' >
                                            <FaRegHeart style={{ width: 20, height: 30 }} />
                                        </Button>
                                    </div>
                                    <Button className="m-3 buyItNow" style={{ height: 44 }}>Buy it NOW!</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={12}>
                            <Card className="d-flex flex-column justify-content-around">
                                <Row>
                                    <Row className='d-flex justify-content-center m-2'><h3>What people says about this product</h3></Row>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WeaponPage;
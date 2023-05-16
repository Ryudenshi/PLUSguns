import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
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
                </Col>
                <Col md={3} >
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
                <Col md={3} >
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
            <Row>
                <Col md={5}>
                    <Row>

                        <Card className="mb-2">
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
                        <Card>
                            <Row className='d-flex justify-content-center'><h3>Write a review</h3></Row>
                            <Row className='my-2'>
                                <div><h5>Write your name</h5></div>
                            </Row>
                            <Row className='my-2'>
                                <div><h5>Your email</h5></div>
                            </Row>
                            <Row className='my-2'>
                                <div><h5>Rating</h5></div>
                            </Row>
                            <Row className='my-2'>
                                <div><h5>Reviews</h5></div>
                            </Row>
                        </Card>
                    </Row>
                </Col>
                <Col md={6}>

                </Col>
            </Row>
        </Container>
    );
};

export default WeaponPage;
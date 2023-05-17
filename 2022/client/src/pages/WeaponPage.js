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
                            <div
                                className="weaponInfo-scrollBox"
                                style={{
                                    overflowY: 'auto',
                                    maxHeight: '200px',
                                    overflowX: 'hidden',
                                }}
                            >
                                {weapons.info.map((info, index) => (
                                    <Row
                                        key={info.id}
                                        className={index % 2 === 0 ? 'bg-light' : ''}
                                        style={{ padding: 10 }}
                                    >
                                        {info.title}: {info.description}
                                    </Row>
                                ))}
                            </div>
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
                            <Card style={{ height: 300, width: 300 }}>
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundImage: `url(${BigRatingStar})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center center",
                                        backgroundSize: "100% 100%",
                                        width: "100%",
                                        height: "100%",
                                        fontSize: 40,
                                    }}
                                >
                                    {weapons.rating}
                                </div>
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
                    <Row className='mt-3 justify-content-center' style={{ width: 755 }}>
                        <Col md={12}>
                            <Card className='p-4'>
                                <Row>
                                    <Row className='justify-content-center mb-3'><h3>What people says about this product</h3></Row>
                                    <hr className='' style={{ width: 750 }} />
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <h5 className='mt-2'>Sort by</h5>
                                    </Col>
                                    <Col md={3}>
                                        <div className='border p-2' style={{ height: 40 }}><p>Most recent</p></div>
                                    </Col>
                                </Row>
                                <Row className='border mt-3'>
                                    <Col>
                                        <Row>
                                            <Col md={2}>
                                                <Row style={{ width: 80 }} className='mt-2'>
                                                    <Image className='m-1' height={50} src='https://cdn-icons-png.flaticon.com/512/552/552721.png' />
                                                </Row>
                                            </Col>
                                            <Col md={3}>
                                                <Row>
                                                    <h4>User 1</h4>
                                                </Row>
                                                <Row>
                                                    <p className='gray'>Apr 3 2023</p>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.</p>
                                        </Row>
                                        <Row>
                                            <Col md={2}>
                                                <Button className=' comments m-2' style={{ height: 32, width: 100 }}><h6>Like</h6></Button>
                                            </Col>
                                            <Col>
                                                <Button className=' comments m-2' style={{ height: 32, width: 100 }}><h6>Reply</h6></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='border mt-3'>
                                    <Col>
                                        <Row>
                                            <Col md={2}>
                                                <Row style={{ width: 80 }} className='mt-2'>
                                                    <Image className='m-1' height={50} src='https://cdn-icons-png.flaticon.com/512/552/552721.png' />
                                                </Row>
                                            </Col>
                                            <Col md={3}>
                                                <Row>
                                                    <h4>User 2</h4>
                                                </Row>
                                                <Row>
                                                    <p className='gray'>Apr 3 2023</p>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.</p>
                                        </Row>
                                        <Row>
                                            <Col md={2}>
                                                <Button className=' comments m-2' style={{ height: 32, width: 100 }}><h6>Like</h6></Button>
                                            </Col>
                                            <Col>
                                                <Button className=' comments m-2' style={{ height: 32, width: 100 }}><h6>Reply</h6></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='border mt-3'>
                                    <Col>
                                        <Row>
                                            <Col md={2}>
                                                <Row style={{ width: 80 }} className='mt-2'>
                                                    <Image className='m-1' height={50} src='https://cdn-icons-png.flaticon.com/512/552/552721.png' />
                                                </Row>
                                            </Col>
                                            <Col md={3}>
                                                <Row>
                                                    <h4>User 3</h4>
                                                </Row>
                                                <Row>
                                                    <p className='gray'>Apr 3 2023</p>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.</p>
                                        </Row>
                                        <Row>
                                            <Col md={2}>
                                                <Button className=' comments m-2' style={{ height: 32, width: 100 }}><h6>Like</h6></Button>
                                            </Col>
                                            <Col>
                                                <Button className=' comments m-2' style={{ height: 32, width: 100 }}><h6>Reply</h6></Button>
                                            </Col>
                                        </Row>
                                    </Col>
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
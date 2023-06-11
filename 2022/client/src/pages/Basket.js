import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { deleteFromBasket, getBasket } from '../http/weaponsAPI';

const Basket = observer(() => {
    const { weapons } = useContext(Context)

    useEffect(() => {
        getBasket().then(data => weapons.setBaskets(data))
    }, [])

    const delFromBasket = async () => {
        try {
            await deleteFromBasket(weapons.basket.id);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting from basket:', error);
        }
    };

    let prices = 0
    weapons.basket.map(price =>
        prices += Number(price.weapon.price)
    )

    return (
        <Container
            className="mt-3"
        >
            <Row className='mb-3'>
                <h1 className="pd-2">Basket</h1>
            </Row>
            <Row>
                <Col md={8}>
                    {weapons.basket.map(product =>
                        <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                            <Row className="d-flex w-100">
                                <Col>
                                    <div className="d-flex flex-row align-items-center">
                                        <img src={process.env.REACT_APP_API_URL + product.weapon.img} width={200} alt="WeaponImg" />
                                        <h4 className="pl-3">{product.weapon.name}</h4>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                        <h4 className="font-weight-light">{product.weapon.price} grivnas</h4>
                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    )}
                </Col>
                <Col md={4}>

                    <Card className="d-flex flex-row p-2 justify-content-between align-items-center mb-2">
                        <h4>Busket</h4>
                        <div className='d-flex flex-row justify-content-between'>
                            <h5 className="pr-2">Summary:</h5>
                            <h5 className="mx-2">{prices}</h5>
                            <h5>₴</h5>
                        </div>
                    </Card>
                    <hr />
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <Button variant="success">Confirm purchase</Button>
                        <Button variant="outline-danger" onClick={delFromBasket}>Clear All</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default Basket;
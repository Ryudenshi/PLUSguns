import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import { deleteFromBasket, getBasket } from '../http/weaponsAPI';

const Basket = observer(() =>{
    const {weapons} = useContext(Context)

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

    return(
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
        <h1 className="pd-2">Basket</h1>

        <Card className="d-flex flex-row p-2 justify-content-between align-items-center mb-2">
            <h1 className="pr-2">$</h1>
            <h3 className="pl-2">{prices}</h3>
        </Card>
        <hr/>
        <Card>
            <Col>
                <Button variant="outline-danger" onClick={delFromBasket}>Clear All</Button>
            </Col>
        </Card>
        <hr/>

        {weapons.basket.map(product =>
        <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
            <Row className="d-flex w-100">
                <Col>
                    <div className="d-flex flex-row align-items-center">
                        <img src={process.env.REACT_APP_API_URL + product.weapon.img} width={50} alt="WeaponImg"/>
                        <h1 className="pl-3">{product.weapon.name}</h1>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                        <h2 className="font-weight-light">{product.weapon.price} dollars</h2>
                    </div>
                </Col>

            </Row>
        </Card>    
        )}

       </Container>
    );
});

export default Basket;
import React, { useContext, useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import WeaponsList from '../components/WeaponsList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchBrands, fetchTypes, fetchWeapons } from '../http/weaponsAPI'
import Pages from '../components/Pages'
import './pages.css'

const Shop = observer(() =>{
    const {weapons} = useContext(Context)

    useEffect(() => {
        fetchTypes().then((data) => weapons.setTypes(data))
        fetchBrands().then((data) => weapons.setBrands(data))
        fetchWeapons(null, null, 1, 2).then((data) => {
            weapons.setWeapons(data.rows)
            weapons.setTotalCount(data.count)
        })
    }, []);

    useEffect(() => {
        if (weapons.selectedType && weapons.selectedBrand) {
            fetchWeapons(
              weapons.selectedType.id,
              weapons.selectedBrand.id,
              weapons.page,
              12
            ).then((data) => {
              weapons.setWeapons(data.rows);
              weapons.setTotalCount(data.count);
            });
          }
    }, [weapons.page, weapons.selectedType, weapons.selectedBrand]);

    return(
        <Container> 
            <Form className="mt-2 d-flex">
                <Col md={2} className="magin-right-30px">
                    <Row>
                        <h3>Types</h3>
                        <TypeBar/>
                    </Row>
                    <br/>
                    <Row>
                        <h3>Brands</h3>
                        <BrandBar/>
                    </Row>
                </Col>
                <Col md={10}>
                    <Row className="weaponList">
                        <WeaponsList/>
                        <Row className="mx-4">
                            <Pages/>
                        </Row>
                    </Row>
                    <br/>
                </Col>
            </Form>
        </Container>
    );
});

export default Shop;
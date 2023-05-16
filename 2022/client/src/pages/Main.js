import { Col, Container, Form, Row} from "react-bootstrap";
import MainCarousel from "../components/MainCarousel";
import Pages from "../components/Pages";
import { useContext, useEffect } from "react";
import { fetchWeapons } from "../http/weaponsAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import MainWeaponsList from "../components/MainWeaponList";
import AboutUs from "../components/AboutUs";
import MainBanner from "../components/MainBanner";
import './pages.css'

const Main = observer(() => {

    const {weapons} = useContext(Context)

    useEffect(() => {
        fetchWeapons(null, null, 1, 2).then(data => {
            weapons.setWeapons(data.rows)
            weapons.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        if (weapons.selectedType && weapons.selectedBrand) {
            fetchWeapons(
              weapons.selectedType.id,
              weapons.selectedBrand.id,
              weapons.page,
              4
            ).then((data) => {
              weapons.setWeapons(data.rows);
              weapons.setTotalCount(data.count);
            });
          }
    }, [weapons.page, weapons.selectedType, weapons.selectedBrand]);


    return (
        <Container>
            <Form className="d-flex">
                <Col>
                    <Row>
                        <MainBanner/>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        <MainCarousel/>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row>
                        <AboutUs/>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row className="weaponList">
                        <MainWeaponsList/>
                        <Row className="mx-4">
                            <Pages/>
                        </Row>
                    </Row>
                    <hr/>
                    
                </Col>
            </Form>
        </Container>
    );
});
export default Main;
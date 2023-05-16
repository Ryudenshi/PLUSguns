import { Col, Row } from "react-bootstrap"

const AboutUs = () => {
    return (
        <Row>
            <Col>
                <img 
                    width={450}
                    src="https://stvol.ua/storage/settings/home/medium/anKBOJffVKPuxUbl7GeiM1nZZjhy0gFBos6zIZ59.jpg.webp"
                    alt="AboutUsImg"
                />
            </Col>
            <Col className="square border">
                <br/>
                <Row><h2 className=" text-center">ABOUT US</h2></Row>
                <br/>
                <Row><p className="lead fw-bold">Only the most famous weapon manufacturers.</p></Row>
                <br/>
                <Row><p className="lead">Welcome to pur weapon shop.Welcome to pur weapon shop.Welcome to pur weapon shop.Welcome to pur weapon shop.Welcome to pur weapon shop.</p></Row>
            </Col>
            <Col>

            </Col>
        </Row>
    )
}

export default AboutUs
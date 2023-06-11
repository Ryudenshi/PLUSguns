import { Button, Col, Row } from "react-bootstrap"
import "./NavBar.css"

const AboutUs = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col className="text-center">
                <img 
                    width={450}
                    src="https://stvol.ua/storage/settings/home/medium/anKBOJffVKPuxUbl7GeiM1nZZjhy0gFBos6zIZ59.jpg.webp"
                    alt="AboutUsImg"
                />
            </Col>
            <Col>
                <Row>
                    <img
                        src="https://californiahealthline.org/wp-content/uploads/sites/3/2019/06/9mm-bullets_GettyImages-174077869.jpg"
                        alt="ammoIMAGE"
                    />
                </Row>
                <Row className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                    <Col className="text-center">
                        <Row className="mb-4">
                            <h3>Stocktake up to 60% off</h3>
                        </Row>
                            <Button className="AboutUsButton mt-4">Contact Us</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AboutUs
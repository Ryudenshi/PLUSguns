import { Container, Image, Row } from "react-bootstrap";
import './NavBar.css';

const MainBanner = () => {
    return(
        <Container>

            <div className="mainbg align-middle d-flex">
                <span className="logoFirstPart">gu</span>
                <span className="logoSecondPart">PLUS</span>
                <span className="logoThirdPart">ns</span>
            </div>

        </Container>
    );
};

export default MainBanner;
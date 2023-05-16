import { Carousel } from "react-bootstrap";
import React from "react";

export default function MainCarousel() {
    return(
        <Carousel fade >
            <Carousel.Item>
                <img
                    className="d-block w-100 ml-2 mr-2"
                    width={700}
                    height={600}
                    src="https://i.ytimg.com/vi/B0lr8ZzxJ30/maxresdefault.jpg"
                    alt="Beretta"
                />
                <Carousel.Caption>
                    <h3>Beretta</h3>
                    <p>The winning edge</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={700}
                    height={600}
                    className="d-block w-100 ml-2 mr-2"
                    src="https://www.franchi.com/wp-content/uploads/2017/01/foto-Affinity-white-emo2.jpg"
                    alt="Franchi"
                />

                <Carousel.Caption>
                    <h3>Franchi</h3>
                    <p>Be in focus</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        width={700}
                        height={600}
                        className="d-block w-100 ml-2 mr-2"
                        src="https://i.ytimg.com/vi/i5_7qn5jW1s/maxresdefault.jpg"
                        alt="Mossberg"
                    />
                <Carousel.Caption>
                    <h3>Mossberg</h3>
                    <p>
                        Load your instinct
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                        width={700}
                        height={600}
                        className="d-block w-100 ml-2 mr-2"
                        src="https://st1.myideasoft.com/idea/by/11/myassets/products/579/benelli-montefeltro-beccaccia-3.jpg?revision=1483805461"
                        alt="Benelli"
                    />
                <Carousel.Caption>
                    <h3>Benelli</h3>
                    <p>
                        Chouse your own comrad
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
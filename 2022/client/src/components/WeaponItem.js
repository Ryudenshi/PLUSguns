import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import { useNavigate } from "react-router-dom";
import RatingStar from '../assets/RatingStar.png'
import { WEAPON_ROUTE } from "../utils/const";

const WeaponItem = ({weapons}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className="mt-3 rounded" onClick={() => navigate(WEAPON_ROUTE + '/' + weapons.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} heigth={150} src={process.env.REACT_APP_API_URL + weapons.img} />
                <div className="text-black-50 m-2 d-flex justify-content-between align-items-center">
                    <div>PLUSguns</div>
                    <div className="mt-1 d-flex align-items-center">
                        <div>{weapons.rating}</div>
                        <Image width={20} height={20} src={RatingStar} />
                    </div>
                </div>
                <div className="m-2">{weapons.name}</div>
            </Card>
        </Col>
    );
};

export default WeaponItem;
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import {Context} from "../index"
import WeaponItem from "./WeaponItem"

const WeaponsList = observer(() => {
    const {weapons} = useContext(Context)
    return (
        <Row className="d-flex m-3">
                {weapons.weapons.map(weapons =>
                    <WeaponItem key={weapons.id} weapons={weapons} />
                )}
        </Row>
    )
});

export default WeaponsList;
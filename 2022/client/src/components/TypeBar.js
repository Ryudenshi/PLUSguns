import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from 'react-bootstrap/ListGroup'
import "./WeaponCSS.css";

const TypeBar = observer(() => {
    const {weapons} = useContext(Context)
    return (
        <ListGroup>
            {weapons.types.map(type =>
                <ListGroup.Item
                    className="typeStyle"
                    active={type.id === weapons.selectedType.id}
                    onClick={() => weapons.setSelectedType(type)}
                    key={type.id}
                    border={type.id === weapons.selectedBrand.id ? 'danger' : 'light'}
                >
                    {type.name}
                </ListGroup.Item>    
            )}
        </ListGroup>
    );
});

export default TypeBar;
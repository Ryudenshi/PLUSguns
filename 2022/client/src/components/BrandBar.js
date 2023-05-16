import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Card, Form, ListGroup } from "react-bootstrap";
import "./WeaponCSS.css"

const TypeBar = observer(() => {
    const {weapons} = useContext(Context)
    return (
        <ListGroup>
            {weapons.brands.map(brand =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-2 brandStyle"
                    onClick={() => weapons.setSelectedBrand(brand)}
                    border={brand.id === weapons.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </ListGroup.Item>    
            )}
        </ListGroup>
    );
});

export default TypeBar;
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createWeapon, fetchBrands, fetchTypes } from "../../http/weaponsAPI";
import { Context } from "../../index";

const CreateWeapon = observer( ({show, onHide}) => {
    const {weapons} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => weapons.setTypes(data))
        fetchBrands().then(data => weapons.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo =(number) =>{
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i ))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addWeapon = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', weapons.selectedBrand.id)
        formData.append('typeId', weapons.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createWeapon(formData).then(data => onHide())
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new weapon
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{weapons.selectedType.name || "Choose type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {weapons.types.map(type =>
                                <Dropdown.Item 
                                onClick={() => weapons.setSelectedType(type)} 
                                key={type.id}
                            >
                                {type.name}</Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{weapons.selectedBrand.name || "Choose brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {weapons.brands.map(brand =>
                                <Dropdown.Item 
                                onClick={() => weapons.setSelectedBrand(brand)} 
                                key={brand.id}
                            >
                                {brand.name}</Dropdown.Item>    
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter weapon name"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Enter weapon price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button variant="outline-dark" onClick={addInfo}>Add new trait</Button>
                    {info.map(i =>
                        <Row className="mt-3" key={i.number}>
                            <Col md-4>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Enter info name"
                                />
                            </Col>
                            <Col md-4>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                     placeholder="Enter info descreption"
                                />
                            </Col>
                            <Col md-4>
                                <Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>Delete</Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addWeapon}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateWeapon
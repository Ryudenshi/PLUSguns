import React, { useContext, useEffect } from "react"
import { Button, Dropdown, Form } from "react-bootstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap"
import { Context } from "../../index";
import { deleteBrand, fetchBrands } from "../../http/weaponsAPI";

const DeleteBrand = ({show, onHide}) => {
    const {weapons} = useContext(Context)

    useEffect(() => {
        fetchBrands().then(data => weapons.setBrands(data))
    }, [])

    const delBrand = () => {
        deleteBrand(weapons.selectedBrand.id).then(data => {
            onHide()
        })
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle>Delete brand</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
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
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-success" onClick={onHide}>Close</Button>
                <Button variant="outline-danger" onClick={delBrand}>Delete</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteBrand
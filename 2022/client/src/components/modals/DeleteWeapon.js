import { useContext, useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap"
import { Button, Form } from "react-bootstrap";
import { deleteWeapon, fetchWeapons } from "../../http/weaponsAPI";
import { Context } from "../../index"

const DeleteWeapon = ({show, onHide}) =>{
    const {weapons} = useContext(Context)

    useEffect(() => {
        fetchWeapons().then(data => weapons.setSelectedWeapon(data))
    }, [])

    const delWeapon = () => {
        deleteWeapon()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <ModalHeader closeButton>
                <ModalTitle>Delete weapon</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>

                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-success" onClick={onHide}>Close</Button>
                <Button variant="outline-danger" onClick={delWeapon}>Delete</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteWeapon
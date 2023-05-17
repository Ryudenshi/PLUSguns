import { useContext, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Form } from "react-bootstrap";
import { deleteWeapon, fetchWeapons } from "../../http/weaponsAPI";
import { Context } from "../../index";

const DeleteWeapon = ({ show, onHide }) => {
    const { weapons } = useContext(Context);
    const [selectedWeapon, setSelectedWeapon] = useState(null);

    useEffect(() => {
        fetchWeapons().then(data => weapons.setSelectedWeapon(data));
    }, []);

    const delWeapon = async () => {
        if (selectedWeapon) {
            try {
                await deleteWeapon(selectedWeapon.id);
                onHide();
            } catch (error) {
                console.error("Error deleting weapon:", error);
            }
        }
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <ModalHeader closeButton>
                <ModalTitle>Delete Weapon</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Group controlId="weaponSelect">
                        <Form.Label>Select weapon:</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedWeapon ? selectedWeapon.id : ""}
                            onChange={(e) => {
                                const selectedId = parseInt(e.target.value);
                                const weapon = weapons.weapons.find(weapons => weapons.id === selectedId);
                                setSelectedWeapon(weapon);
                            }}
                        >
                            <option value="">Choose weapon</option>
                            {weapons.weapons.map((weapon) => (
                                <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-success" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="outline-danger" onClick={delWeapon}>
                    Delete
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteWeapon;

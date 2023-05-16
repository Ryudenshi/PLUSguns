import { useContext, useEffect } from "react"
import { Context } from "../../index"
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap"
import { Button, Dropdown, Form } from "react-bootstrap";
import { deleteType, fetchTypes } from "../../http/weaponsAPI";

const DeleteType  = ({show, onHide}) => {
    const {weapons} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => weapons.setTypes(data))
    }, [])

    const delType = () => {
        deleteType(weapons.selectedType.id).then(data => {
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
                <ModalTitle>Delete type</ModalTitle>
            </ModalHeader>
            <ModalBody>
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
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-success" onClick={onHide}>Close</Button>
                <Button variant="outline-danger" onClick={delType}>Delete</Button>
            </ModalFooter>
        </Modal>
    )
}
export default DeleteType
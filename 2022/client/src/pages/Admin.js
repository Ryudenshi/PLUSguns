import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateWeapon from '../components/modals/CreateWeapon';
import DeleteBrand from '../components/modals/DeleteBrand';
import DeleteType from '../components/modals/DeleteType';
import DeleteWeapon from '../components/modals/DeleteWeapon';

const Admin = () =>{
    const [brandModalVisible, setBrandVisible] = useState(false)
    const [typeModalVisible, setTypeVisible] = useState(false)
    const [weaponModalVisible, setWeaponVisible] = useState(false)
    const [deleteBrandModalVisible, setDeleteBrandVisible] = useState(false)
    const [deleteTypeModalVisible, setDeleteTypeVisible] = useState(false)
    const [deleteWeaponModalVisible, setDeleteWeaponVisible] = useState(false)
    return(
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-3 p-2" style={{fontSize: 22}} onClick={() => setTypeVisible(true)}>Add type</Button>
            <Button variant={"outline-dark"} className="mt-3 p-2" style={{fontSize: 22}} onClick={() => setBrandVisible(true)}>Add brand</Button>
            <Button variant={"outline-dark"} className="mt-3 p-2" style={{fontSize: 22}} onClick={() => setWeaponVisible(true)}>Add weapon</Button>
            <Button variant={"outline-dark"} className="mt-3 p-2" style={{fontSize: 22}} onClick={() => setDeleteBrandVisible(true)}>Delete brand</Button>
            <Button variant={"outline-dark"} className="mt-3 p-2" style={{fontSize: 22}} onClick={() => setDeleteTypeVisible(true)}>Delete type</Button>
            <Button variant={"outline-dark"} className="mt-3 p-2" style={{fontSize: 22}} onClick={() => setDeleteWeaponVisible(true)}>Delete weapon</Button>
            <CreateBrand show={brandModalVisible} onHide={() => setBrandVisible(false)} />
            <CreateType show={typeModalVisible} onHide={() => setTypeVisible(false)} />
            <CreateWeapon show={weaponModalVisible} onHide={() => setWeaponVisible(false)} />
            <DeleteBrand show={deleteBrandModalVisible} onHide={() => setDeleteBrandVisible(false)}/>
            <DeleteType show={deleteTypeModalVisible} onHide={() => setDeleteTypeVisible(false)}/>
            <DeleteWeapon show={deleteWeaponModalVisible} onHide={() => setDeleteWeaponVisible(false)}/>
        </Container>
    );
};

export default Admin;
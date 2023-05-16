import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from "react-router-dom"
import { Context } from '../index';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/const";

const Auth = observer( () =>{
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setRole(data.role)
            user.setUser(data)
            user.setIsAuth(true)
            history(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }        
    }

    return(
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Autorisation' : 'Registration'} </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />   
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={"password"}
                    />
                    <Form className="d-flex justify-content-between mt-3">
                        { isLogin ?
                            <div>
                                Not registered? <NavLink className="mt-3" to={REGISTRATION_ROUTE}>Register</NavLink>
                            </div>
                            :
                            <div>
                                Already have account? <NavLink className="mt-3" to={LOGIN_ROUTE} >Login</NavLink>
                            </div>
                        }
                        <Button 
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Login' : 'Registration'}
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
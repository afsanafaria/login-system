import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
import './Home.css'

const Home = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    console.log(password.length, password, newPassword);



    const handleSubmit = e => {
        e.preventDefault();
        if (password === newPassword) {
            if (password.length < 8) {
                setError('Your password is less than 8')
            }
            else if (!/[a-zA-Z]/.test(password)) {
                setError('You have to use one alphabet');
            }
            else {
                alert('You has changed your password')
                setError('')
                setPassword('')
                setNewPassword('')
            }

        }
        else if (password !== newPassword) {
            setError('Password do not match')
        }
    }

    return (
        <div>
            <Row className="w-100">
                <Col className="d-flex mt-5 justify-content-center align-items-center">
                    <Form onSubmit={handleSubmit}>
                        <h4 className="mt-2 my-3">Password Reset</h4>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>NEW PASSWORD</Form.Label>
                            <Form.Control type="password"
                                className="pass"
                                onBlur={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>RE-ENTER NEW PASSWORD</Form.Label>
                            <Form.Control type="password"
                                className={error ? "pass-new" : "pass"}
                                onBlur={(e) => setNewPassword(e.target.value)}
                                // {...register("newPassword")}
                                placeholder="Confirm your Password" />
                            {
                                error && <small className="text fw-bold">{error}</small>
                            }
                        </Form.Group>

                        <Button className="bg-dark border-0 text-white" type="submit">
                            RESET PASSWORD
                        </Button>
                    </Form>
                </Col>
            </Row>

        </div>
    );
};

export default Home;
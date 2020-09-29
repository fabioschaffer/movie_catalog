import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function CategoryEdit() {
    const [description, setDescription] = useState('');

    const SaveHandler = (e) => {
        e.preventDefault();

        const data = {
            description: description
        };

        const token = localStorage.getItem('token');

        const urlInsert = 'https://moviecatalog-3aa25.firebaseio.com/category.json?auth=';
        axios.post(urlInsert + token, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                alert(error.response.data.error);
            });
    };

    return (
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Descrição</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" onClick={SaveHandler}>Salvar</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default CategoryEdit;
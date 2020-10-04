import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function MovieEdit(props) {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [comment, setComment] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');
        const urlGetCategories = 'https://moviecatalog-3aa25.firebaseio.com/category.json?auth=' + token;
        axios.get(urlGetCategories).then(
            resp => {
                if (resp.data) {
                    const items = [];
                    Object.keys(resp.data).map(function (key, index) {
                        items.push({
                            value: key,
                            display: resp.data[key].description
                        });
                        return false;
                    });
                    setCategories([{ value: "", display: "" }].concat(items));
                }
            }
        );

        if (props.id !== '') {
            const urlGet = 'https://moviecatalog-3aa25.firebaseio.com/movie/' + props.id + '.json?auth=' + token;
            axios.get(urlGet).then(
                resp => {
                    setName(resp.data.name);
                    setNote(resp.data.note);
                    setComment(resp.data.comment);
                    setCategory(resp.data.category);
                }
            );
        }
    }, [props.id]);

    const SaveHandler = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const data = { name: name, category: category, note: note, comment: comment };
        if (props.id === '') {
            const urlInsert = 'https://moviecatalog-3aa25.firebaseio.com/movie.json?auth=';
            axios.post(urlInsert + token, data)
                .then(response => { })
                .catch(error => { alert(error.response.data.error); });
        } else {
            const urlUpdate = 'https://moviecatalog-3aa25.firebaseio.com/movie/' + props.id + '.json?auth=';
            axios.put(urlUpdate + token, data)
                .then(response => { })
                .catch(error => {
                    alert(error.response.data.error);
                });
        }
    };

    return (
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Nome</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                <Form.Label column sm={2}>Categoria</Form.Label>
                <Col sm={10}>
                    <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categories.map(cat => (
                            <option
                                key={cat.value}
                                value={cat.value}
                            >
                                {cat.display}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Nota</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Comentário</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
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

export default MovieEdit;
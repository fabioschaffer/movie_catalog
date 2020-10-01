import React, { useState, useCallback } from 'react';
import axios from 'axios';
import classes from './Category.module.css';
import CategoryEdit from './CategoryEdit';
import CategoryList from './CategoryList';

function Category() {
    const [add, setAdd] = useState(false);
    const [list, setList] = useState(true);
    const [id, setId] = useState('');
    const [idRemoved, setIdRemoved] = useState('');

    function ListHandler() {
        setId('');
        setList(true);
        setAdd(false);
    }

    function AddHandler() {
        setId('');
        setList(false);
        setAdd(true);
    }

    const SetIdHandler = useCallback((id) => {
        setId(id);
    }, []);

    function EditHandler() {
        setList(false);
        setAdd(true);
    }

    function DeleteHandler() {
        if (!window.confirm("Confirma exclusão?")) return false;
        const token = localStorage.getItem('token');
        const urlDelete = 'https://moviecatalog-3aa25.firebaseio.com/category/' + id + '.json?auth=';
        axios.delete(urlDelete + token)
            .then((response) => {
                setIdRemoved(id);
                setId('');
            })
            .catch(error => { alert(error); });
    }

    return (
        <React.Fragment>
            <div className={classes.Actions}>
                <i className="material-icons" title="Listagem" onClick={ListHandler}>list</i>
                <i className="material-icons" title="Novo" onClick={AddHandler}>add</i>
                <i className="material-icons" title="Editar" onClick={EditHandler}>edit</i>
                <i className="material-icons" title="Excluir" onClick={DeleteHandler}>delete</i>
                <i className="material-icons" title="Pesquisar">search</i>
            </div>
            {add && <CategoryEdit id={id} />}
            {list && <CategoryList idRemoved={idRemoved} SetIdHandler={SetIdHandler} />}
        </React.Fragment>
    )
};

export default Category;
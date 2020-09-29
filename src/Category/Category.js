import React, { useEffect, useState,useCallback  } from 'react';
//import axios from 'axios';
import classes from './Category.module.css';
import CategoryEdit from './CategoryEdit';
import CategoryList from './CategoryList';

function Category() {
    const [add, setAdd] = useState(false);
    const [list, setList] = useState(true);
    const [id, setId] = useState('');

    useEffect(() => {

        // const data = {
        //     description: 'ação 1 b'
        // };

        //const token = localStorage.getItem('token');

        //insert
        // const urlInsert = 'https://moviecatalog-3aa25.firebaseio.com/category.json?auth=';
        // axios.post(urlInsert + token, data)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         alert(error.response.data.error);
        //     });


        //update
        // const urlUpdate = 'https://moviecatalog-3aa25.firebaseio.com/category/-MIBONWkSTtTdvYjtlfJ.json?auth=';
        // axios.put(urlUpdate + token, data)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         alert(error.response.data.error);
        //     });


        //delete
        // const urlDelete = 'https://moviecatalog-3aa25.firebaseio.com/category/-MIBONWkSTtTdvYjtlfJ.json?auth=';
        // axios.delete(urlDelete + token)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         alert(error.response.data.error);
        //     });

        //get
        // const urlGet = 'https://moviecatalog-3aa25.firebaseio.com/category.json?auth=';
        // axios.get(urlGet + token)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         alert(error.response.data.error);
        //     });

    }, []);

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
        alert(id);
      }, []);

    function EditHandler(){
        setList(false);
        setAdd(true);
    }

    return (
        <React.Fragment>
            <div className={classes.Actions}>
                <i className="material-icons" title="Listagem" onClick={ListHandler}>list</i>
                <i className="material-icons" title="Novo" onClick={AddHandler}>add</i>
                <i className="material-icons" title="Editar" onClick={EditHandler}>edit</i>
                <i className="material-icons" title="Excluir">delete</i>
                <i className="material-icons" title="Pesquisar">search</i>
            </div>
            {add && <CategoryEdit id = {id} />}
            {list && <CategoryList Id = {SetIdHandler} />}
        </React.Fragment>
    )
};

export default Category;
import React, { useEffect } from 'react';
//import axios from 'axios';

function Category() {

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

    return (
        <div>category</div>
    )
};

export default Category;
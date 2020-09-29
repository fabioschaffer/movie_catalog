import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import $ from 'jquery';
import classes from './CategoryList.module.css';

function CategoryList(props) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const id = props.Id;

    useEffect(() => {
        const token = localStorage.getItem('token');
        const urlGet = 'https://moviecatalog-3aa25.firebaseio.com/category.json?auth=' + token;
        axios.get(urlGet).then(
            resp => {
                const items = [];
                Object.keys(resp.data).map(function (key, index) {
                    items.push({
                        id: key,
                        name: resp.data[key].description
                    });
                    return false;
                });
                setList(items);
                setLoading(false);
            }
        );
    }, []);


    useEffect(() => {
        if (!loading) {
            $("#tableCust tr").click(function () {
                $(this).addClass(classes.selected).siblings().removeClass(classes.selected);
                id($(this).attr("key2"));
            });
        }

    }, [loading, id]);



    const TableRows = list.map(i => {
        return <tr key={i.id} key2={i.id}>
            <td>{i.name}</td>
        </tr>;
    });

    return (
        <React.Fragment>
            {loading && <p className="text-center">Carregando...</p>}
            {!loading &&
                <Table id="tableCust" bordered size="sm" className={classes} >
                    <thead>
                        <tr>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TableRows}
                    </tbody>
                </Table>
            }
        </React.Fragment>
    )
}

export default CategoryList;
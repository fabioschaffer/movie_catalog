import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import $ from 'jquery';
import classes from './MovieList.module.css';

function MovieList(props) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const SetIdHandler = props.SetIdHandler;

    useEffect(() => {
        const token = localStorage.getItem('token');
        const urlGet = 'https://moviecatalog-3aa25.firebaseio.com/movie.json?auth=' + token;
        axios.get(urlGet).then(
            resp => {
                if (resp.data) {
                    const items = [];
                    Object.keys(resp.data).map(function (key, index) {
                        items.push({
                            id: key,
                            name: resp.data[key].name,
                            note: resp.data[key].note
                        });
                        return false;
                    });
                    setList(items);
                }
                setLoading(false);
            }
        );
    }, []);

    useEffect(() => {
        if (!loading) {
            $("#tableCust tr").click(function () {
                $(this).addClass(classes.selected).siblings().removeClass(classes.selected);
                SetIdHandler($(this).attr("key2"));
            });
        }
    }, [loading, SetIdHandler]);

    useEffect(() => {
        if (props.idRemoved !== '') {
            let row = $("#tableCust tbody tr[key2='" + props.idRemoved + "']");
            row.remove();
        }
    }, [props.idRemoved]);

    const TableRows = list.map(i => {
        return <tr key={i.id} key2={i.id}>
            <td>{i.name}</td>
            <td>{i.note}</td>
        </tr>;
    });

    return (
        <React.Fragment>
            {loading && <p className="text-center">Carregando...</p>}
            {!loading &&
                <Table id="tableCust" bordered size="sm" className={classes} >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nota</th>
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

export default MovieList;
import Axios from "axios";
import React, { useState } from "react"

export default function Cards(props) {
    const [livroValue,setListaLivros] = useState({
        id: props.id,
        nome: props.nome,
        editora: props.editora,
        author: props.author,
        ano: props.ano
    });

    const handleDeleteLivro = () => {
        Axios.delete(`http://localhost:3001/api/livros/${livroValue.id}`)
        .then(() => {
            props.setListaCard(
                props.listCard.filter((value) =>{
                    return value.id != livroValue.id;
                })
            );
        });
    };


    return (
        <div className="card m-2 col-4 border border-primary">
            <div className="card-body">
                <h4 className="card-title">{livroValue.nome}</h4>
                <p className="card-text">{livroValue.editora}</p>
                <p className="card-text">{livroValue.author}</p>
                <h5 className="card-text">{livroValue.ano}</h5>
                <button className="btn btn-danger w-100" onClick={() => handleDeleteLivro()}>Delete</button>
            </div>
        </div>
    );
}
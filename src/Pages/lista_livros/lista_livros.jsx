import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Axios from 'axios';
import Cards from '../../Components/cards';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function ListaLivros() {
  const [listaLivros, setListaLivros] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/livros")
      .then((response) => {
        setListaLivros(response.data);
      });
  }, []);

  return (
    <div className='row m-2 d-flex justify-content-center'>
      <h1 className='d-flex justify-content-center'>Lista de Livros</h1>
      {typeof listaLivros !== "undefined" && listaLivros.map((value) => {
        return (
          <Cards
            key={value.id}
            listCard={listaLivros}
            setListaCard={setListaLivros}
            id={value.id}
            nome={value.nome}
            editora={value.editora}
            author={value.author}
            ano={value.ano}
          ></Cards>
        );
      })}
      <div className="d-flex justify-content-center mt-4">
        <Link to="/">
          <button className="btn btn-success">Voltar</button>
        </Link>
      </div>
    </div>
  );
}

export default ListaLivros;
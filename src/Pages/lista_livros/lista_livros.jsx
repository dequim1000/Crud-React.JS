import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Axios from 'axios';
import Cards from '../../Components/cards';
import { useEffect } from 'react';

function ListaLivros() {
  const [listaLivros, setListaLivros] = useState();

  useEffect(() => {
    Axios.get("https://localhost:3001/getCards")
      .then((response) => {
        setListaLivros(response.data);
      });
  }, []);

  return (
    <div className='row m-2 d-flex justify-content-center'>
      {typeof listaLivros !== "undefined" && listaLivros.map((value) => {
        return (
          <Cards
            key={value.id}
            listCard={listaLivros}
            setListaCard={setListaLivros}
            id={value.id}
            nome={value.nome}
            editora={value.editora}
            autor={value.autor}
            lancamento={value.lancamento}
          ></Cards>
        );
      })}
    </div>
  );
}

export default ListaLivros;
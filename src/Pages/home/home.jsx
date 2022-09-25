import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost/register", {
      nome: values.nome,
      editora: values.editora,
      autor: values.autor,
      lancamento: values.lancamento
    }).then((response) => {
      console.log(response)
    });
  };

  const visualizarLivros = () => {

  }

  return (
    <div className="App">
      <div className="d-flex justify-content-center mt-5">
        <div className="w-25">
          <div className="form-group mt-3">
            <label htmlFor="nomeLivro">Nome do Livro</label>
            <input type="text" name="nome" className="form-control" id="nomeLivro" placeholder="Digite o nome do Livro" onChange={handleChangeValues} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="nomeEditora">Nome da Editora</label>
            <input type="text" name="editora" className="form-control" id="nomeEditora" placeholder="Digite o nome da Editora" onChange={handleChangeValues} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="nomeAutor">Nome Autor(a)</label>
            <input type="text" name="autor" className="form-control" id="nomeAutor" placeholder="Digite o nome do autor(a)" onChange={handleChangeValues} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="anoLancamento">Ano Lançamento</label>
            <input type="text" name="lancamento" className="form-control" id="anoLancamento" placeholder="Digite o ano de lançamento" onChange={handleChangeValues} />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary" onClick={() => handleClickButton()} >Cadastrar</button>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/lista">
              <button className="btn btn-success" onClick={() => visualizarLivros()} >Visualizar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

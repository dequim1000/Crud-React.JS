import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Pages/home/home";
import ListaLivros from "./Pages/lista_livros/lista_livros";

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/lista" element={<ListaLivros />} />
            </Routes>
        </Router>
    )
}

export default Rotas;
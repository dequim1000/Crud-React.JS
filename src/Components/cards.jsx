import React from "react"

export default function Cards(props) {
    return (
        <div className="card m-2 col-3 border border-primary">
            <div className="card-body">
                <h4 className="card-title">A historia do gay</h4>
                <p className="card-text">Nao Sei</p>
                <p className="card-text">Algum</p>
                <h5 className="card-text">2018</h5>
            </div>
            {/* <div class="card-body">
                <h4 class="card-title">{props.nome}</h4>
                <p class="card-text">{props.editora}</p>
                <p class="card-text">{props.autor}</p>
                <h5 class="card-text">{props.lancamento}</h5>
            </div> */}
        </div>
    );
}
import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const Type = () => {
  return (
    <>
      <div className="container-fluid">
        <Header create="newtype" nameButton="Novo Tipo" />
        <section className="userContainer">
          <div className="nave container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Tipos</li>
              </ol>
            </nav>
            <div className="card shadow-sm bg-white rounded item">
              <div className="card-body">
                <p className="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link to="#">
                  <h4 className="card-title">Descrição: Filme</h4>
                </Link>
                <div className="botoes">
                  <Link to="/edittype/1" className="btn btn-info" role="button">Editar</Link>&nbsp;
                  <button className="btn btn-danger" type="button">Excluir</button>
                </div>
              </div>
            </div>
            <div className="card shadow-sm bg-white rounded item">
              <div className="card-body">
                <p className="card-subtitle mb2 text-muted">
                  <span>Id: 2</span>
                </p>
                <Link to="#">
                  <h4 className="card-title">Descrição: Série</h4>
                </Link>
                <div className="botoes">
                  <Link to="/edittype/2" className="btn btn-info" role="button">Editar</Link>&nbsp;
                  <button className="btn btn-danger" type="button">Excluir</button>
                </div>
              </div>
            </div>
            <div className="card shadow-sm bg-white rounded item">
              <div className="card-body">
                <p className="card-subtitle mb2 text-muted">
                  <span>Id: 3</span>
                </p>
                <Link to="#">
                  <h4 className="card-title">Descrição: Livro</h4>
                </Link>
                <div className="botoes">
                  <Link to="/edittype/3" className="btn btn-info" role="button">Editar</Link>&nbsp;
                  <button className="btn btn-danger" type="button">Excluir</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Type;

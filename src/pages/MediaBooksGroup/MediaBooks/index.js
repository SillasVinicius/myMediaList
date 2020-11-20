import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../../../components/Header';

import './styles.css';

const MediaBooks = () => {
  return (
    <>
      <div className="container-fluid">
        <Header create="newbook" nameButton="Novo Livro" />
        <section className="userContainer">
          <div className="nave container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Livros</li>
              </ol>
            </nav>
            <div className="card shadow-sm bg-white rounded item">
              <div className="card-body">
                <p className="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link to="#">
                  <h4 className="card-title">Titulo: Harry Potter e a Pedra Filosofal</h4>
                  <h5 className="card-thirdSubtitle">Qtd de páginas: 264</h5>
                </Link>
                <div className="botoes">
                  <Link to="/editmediabook/1" className="btn btn-info" role="button">Editar</Link>&nbsp;
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

export default MediaBooks;

import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const MediaMovies = () => {
  return (
    <div className="container-fluid">
      <Header create="newmovie" nameButton="Novo Filme" />
      <section className="userContainer">
        <div className="nave container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Filmes</li>
            </ol>
          </nav>
          <div className="card shadow-sm bg-white rounded item">
            <div className="card-body">
              <p className="card-subtitle mb2 text-muted">
                <span>Id: 1</span>
              </p>
              <Link to="#">
                <h4 className="card-title">Titulo: Star Wars</h4>
                <h5 className="card-thirdSubtitle">Minutagem: 121 m</h5>
              </Link>
              <div className="botoes">
                <Link to="/editmediamovie/1" className="btn btn-info" role="button">Editar</Link>&nbsp;
                <button className="btn btn-danger" type="button">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaMovies;
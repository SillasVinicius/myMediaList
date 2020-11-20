import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const MediaMoviesForm = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section>
          <div className="cadastro container">
            <nav aria-label="breadcrumb">
              <ol className="cadastro-ol breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/filmes">Filmes</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Filme</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form method="get" action="#">
                <div className="form-group">
                  <input type="text" className="form-control" name="titulo" placeholder="Titulo *" required/>
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="minutagem" min="1" placeholder="Minutagem *" required/>
                </div>
                <button type="submit" className="btn btn-primary">Publish</button>&nbsp;
                <button type="reset" className="btn btn-outline-secondary">Limpar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MediaMoviesForm;

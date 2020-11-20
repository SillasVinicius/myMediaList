import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const FavoritesForm = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section>
          <div className="cadastro container">
            <nav aria-label="breadcrumb">
              <ol className="cadastro-ol breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/biblioteca">Bibliotecas</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Nova Biblioteca</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form method="get" action="#">
                <div className="form-group">
                  <input type="number" className="form-control" name="user_id" min="1" placeholder="Id Usuário *" required/>
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="media_id" min="1" placeholder="Id Media*" required/>
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="status_id" min="1" placeholder="Id Status*" required/>
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

export default FavoritesForm;

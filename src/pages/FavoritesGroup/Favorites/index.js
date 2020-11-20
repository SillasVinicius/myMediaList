import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../../../components/Header';
import './styles.css';

const Favorites = () => {
  return (
    <>
      <div className="container-fluid">
        <Header create="newfavorite" nameButton="Nova Biblioteca" />
        <section className="userContainer">
          <div className="nave container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Bibliotecas</li>
              </ol>
            </nav>
            <div className="card shadow-sm bg-white rounded item">
              <div className="card-body">
                <p className="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link to="#">
                  <h4 className="card-title">User_id: 1</h4>
                  <h5 className="card-thirdSubtitle">Media_id: 1</h5>
                  <span >Status_id: 2</span>
                </Link>
                <div className="botoes">
                  <Link to="/editfavorite/1" className="btn btn-info" role="button">Editar</Link>&nbsp;
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
                  <h4 className="card-title">User_id: 2</h4>
                  <h5 className="card-thirdSubtitle">Media_id: 3</h5>
                  <span >Status_id: 1</span>
                </Link>
                <div className="botoes">
                  <Link to="/editfavorite/2" className="btn btn-info" role="button">Editar</Link>&nbsp;
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

export default Favorites;

import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const Status = () => {
  return (
    <>
      <div className="container-fluid">
        <Header create="newstatus" nameButton="Novo Status" />
        <section className="userContainer">
          <div className="nave container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Status</li>
              </ol>
            </nav>
            <div className="card shadow-sm bg-white rounded item">
              <div className="card-body">
                <p className="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link to="#">
                  <h4 className="card-title">Descrição: Assistindo</h4>
                </Link>
                <div className="botoes">
                  <Link to="/editstatus/1" className="btn btn-info" role="button">Editar</Link>&nbsp;
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
                  <h4 className="card-title">Descrição: Terminado</h4>
                </Link>
                <div className="botoes">
                  <Link to="/editstatus/2" className="btn btn-info" role="button">Editar</Link>&nbsp;
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

export default Status;

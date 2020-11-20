import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const TypeForm = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section>
          <div className="cadastro container">
            <nav aria-label="breadcrumb">
              <ol className="cadastro-ol breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/tipo">Tipos</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Tipo</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form method="get" action="#">
                <div className="form-group">
                  <input type="text" className="form-control" name="descricao" placeholder="Descrição *" required/>
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

export default TypeForm;

import React from 'react';
import Header from './../../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const UserForm = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section>
          <div className="cadastro container">
            <nav aria-label="breadcrumb">
              <ol className="cadastro-ol breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/user">Usuários</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Usuário</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form method="get" action="#">
                <div className="form-group">
                  <input type="text" className="form-control" name="nome" placeholder="Nome *" required/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" placeholder="Email *" required/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="senha" placeholder="Senha *" required/>
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

export default UserForm;

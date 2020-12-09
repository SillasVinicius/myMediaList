import React, { useState, useEffect } from 'react';
import Header from './../../../components/Header';
import Loading from './../../../components/Loading';
import { Confirm, Alert } from 'react-st-modal';

import { Link } from 'react-router-dom';
import api from './../../../services/api';

import './styles.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [atualizarPage, setAtualizarPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await api.get('/usuario', api.auth).then(r => {
        setUsers(r.data);
      });
    }

    fetchData();
  }, [atualizarPage]);

  if (!users) {
    return <Loading />;
  }

  return (
    <>
      <div className="container-fluid">
        <Header create="newuser" nameButton="Novo Usuário" />
        <section className="userContainer">
          <div className="nave container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Usuários</li>
              </ol>
            </nav>
            {
              users.length !== 0
                ? users.map(u => {
                  return (
                    <div className="card shadow-sm bg-white rounded item" key={u.id}>
                      <div className="card-body">
                        <p className="card-subtitle mb2 text-muted">
                          <span>Id: {u.username}</span>
                        </p>
                        <Link to="#">
                          <h4 className="card-title">Username: {u.username}</h4>
                          <h5 className="card-thirdSubtitle">Email: {u.email}</h5>
                          <span >Password: {u.password}</span>
                        </Link>
                        <div className="botoes">
                          <Link to={`/edituser/${u.username}`} className="btn btn-info" role="button">Editar</Link>&nbsp;
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={async () => {
                              const result = await Confirm(
                                'Tem certeza que deseja excluir esse item ?',
                                'Você não poderá voltar atrás'
                              );

                              if (result) {
                                await api.delete(`/usuario/${u.username}`, api.auth).catch(error => {
                                  Alert('Verifique se esse item não está relacionado a algum registro em outra entidade!', error.message);
                                });
                                setAtualizarPage(u.username);
                              }
                            }}
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
                : <p>Sem resultados...</p>
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default User;

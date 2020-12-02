import React, { useState, useEffect } from 'react';
import Header from './../../../components/Header';
import Loading from './../../../components/Loading';
import { Confirm, Alert } from 'react-st-modal';

import { Link } from 'react-router-dom';
import api from './../../../services/api';

import './styles.css';

const Status = () => {
  const [status, setStatus] = useState([]);
  const [atualizarPage, setAtualizarPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await api.get('/status').then(r => {
        setStatus(r.data);
      });
    }

    fetchData();
  }, [atualizarPage]);

  if (!status) {
    return <Loading />;
  }

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

            {
              status.length !== 0
                ? status.map(s => {
                  return (
                    <div className="card shadow-sm bg-white rounded item" key={s.id}>
                      <div className="card-body">
                        <p className="card-subtitle mb2 text-muted">
                          <span>Id: {s.id}</span>
                        </p>
                        <Link to="#">
                          <h4 className="card-title">Descrição: {s.descricao}</h4>
                        </Link>
                        <div className="botoes">
                          <Link to={`/editstatus/${s.id}`} className="btn btn-info" role="button">Editar</Link>&nbsp;
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={async () => {
                              const result = await Confirm(
                                'Tem certeza que deseja excluir esse item ?',
                                'Você não poderá voltar atrás'
                              );

                              if (result) {
                                await api.delete(`/status/${s.id}`).catch(error => {
                                  Alert('Verifique se esse item não está relacionado a algum registro em outra entidade!', error.message);
                                });
                                setAtualizarPage(s.id);
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

export default Status;

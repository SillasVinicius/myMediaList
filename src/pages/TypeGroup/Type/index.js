import React, { useState, useEffect } from 'react';
import Header from './../../../components/Header';
import Loading from './../../../components/Loading';
import { Confirm, Alert } from 'react-st-modal';

import { Link } from 'react-router-dom';
import api from './../../../services/api';

import './styles.css';

const Type = () => {
  const [types, setTypes] = useState([]);
  const [atualizarPage, setAtualizarPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await api.get('/tipo', api.auth).then(r => {
        setTypes(r.data);
      });
    }

    fetchData();
  }, [atualizarPage]);

  if (!types) {
    return <Loading />;
  }

  return (
    <>
      <div className="container-fluid">
        <Header create="newtype" nameButton="Novo Tipo" />
        <section className="userContainer">
          <div className="nave container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Tipos</li>
              </ol>
            </nav>

            {
              types.length !== 0
                ? types.map(t => {
                  return (
                    <div className="card shadow-sm bg-white rounded item" key={t.id}>
                      <div className="card-body">
                        <p className="card-subtitle mb2 text-muted">
                          <span>Id: {t.id}</span>
                        </p>
                        <Link to="#">
                          <h4 className="card-title">Descrição: {t.descricao}</h4>
                        </Link>
                        <div className="botoes">
                          <Link to={`/edittype/${t.id}`} className="btn btn-info" role="button">Editar</Link>&nbsp;
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={async () => {
                              const result = await Confirm(
                                'Tem certeza que deseja excluir esse item ?',
                                'Você não poderá voltar atrás'
                              );

                              if (result) {
                                await api.delete(`/tipo/${t.id}`, api.auth).catch(error => {
                                  Alert('Verifique se esse item não está relacionado a algum registro em outra entidade!', error.message);
                                });
                                setAtualizarPage(t.id);
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

export default Type;

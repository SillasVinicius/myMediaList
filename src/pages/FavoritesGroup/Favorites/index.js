import React, { useState, useEffect } from 'react';
import Header from './../../../components/Header';
import Loading from './../../../components/Loading';
import { Confirm, Alert } from 'react-st-modal';

import { Link } from 'react-router-dom';
import api from './../../../services/api';

import './styles.css';


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [atualizarPage, setAtualizarPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await api.get('/biblioteca', api.auth).then(r => {
        setFavorites(r.data);
      });
    }

    fetchData();
  }, [atualizarPage]);

  if (!favorites) {
    return <Loading />;
  }

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
            {
              favorites.length !== 0
                ? favorites.map(f => {
                  return (
                    <div className="card shadow-sm bg-white rounded item" key={f.id}>
                      <div className="card-body">
                        <p className="card-subtitle mb2 text-muted">
                          <span>Id: {f.id}</span>
                        </p>
                        <Link to="#">
                          <h4 className="card-title">User: {f.usuario.nome}</h4>
                          <h5 className="card-thirdSubtitle">Media: {f.media.titulo}</h5>
                          <span >Status: {f.status.descricao}</span>
                        </Link>
                        <div className="botoes">
                          <Link to={`/editfavorite/${f.id}`} className="btn btn-info" role="button">Editar</Link>&nbsp;
                          <button
                              className="btn btn-danger"
                              type="button"
                              onClick={async () => {
                                const result = await Confirm(
                                  'Tem certeza que deseja excluir esse item ?',
                                  'Você não poderá voltar atrás'
                                );

                                if (result) {
                                  await api.delete(`/biblioteca/${f.id}`, api.auth).catch(error => {
                                    Alert('Verifique se esse item não está relacionado a algum registro em outra entidade!', error.message);
                                  });
                                  setAtualizarPage(f.id);
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

export default Favorites;

import React, { useState, useEffect } from 'react';
import Header from './../../../components/Header';
import Loading from './../../../components/Loading';
import { Confirm, Alert } from 'react-st-modal';

import { Link } from 'react-router-dom';
import api from './../../../services/api';

import './styles.css';

const MediaMovies = () => {
  const [movies, setMovies] = useState([]);
  const [atualizarPage, setAtualizarPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await api.get('/media/Movie', api.auth).then(r => {
        setMovies(r.data);
      });
    }

    fetchData();
  }, [atualizarPage]);

  if (!movies) {
    return <Loading />;
  }
  return (
    <div className="container-fluid">
      <Header create="newmovie" nameButton="Novo Filme" />
      <section className="userContainer">
        <div className="nave container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Filmes</li>
            </ol>
          </nav>
          {
            movies.length !== 0
              ? movies.map(m => {
                return (
                  <div className="card shadow-sm bg-white rounded item" key={m.id}>
                    <div className="card-body">
                      <p className="card-subtitle mb2 text-muted">
                        <span>Id: {m.id}</span>
                      </p>
                      <Link to="#">
                        <h4 className="card-title">Titulo: {m.titulo}</h4>
                        <h5 className="card-thirdSubtitle">Minutagem: {m.minutagem} m</h5>
                      </Link>
                      <div className="botoes">
                        <Link to={`/editmediamovie/${m.id}`} className="btn btn-info" role="button">Editar</Link>&nbsp;
                          <button
                          className="btn btn-danger"
                          type="button"
                          onClick={async () => {
                            const result = await Confirm(
                              'Tem certeza que deseja excluir esse item ?',
                              'Você não poderá voltar atrás'
                            );

                            if (result) {
                              await api.delete(`/media/${m.id}`, api.auth).catch(error => {
                                Alert('Verifique se esse item não está relacionado a algum registro em outra entidade!', error.message);
                              });
                              setAtualizarPage(m.id);
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
  );
};

export default MediaMovies;

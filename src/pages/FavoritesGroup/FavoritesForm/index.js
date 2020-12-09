import React, { useState } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const FavoritesForm = () => {
  const history = useHistory();

  const [userId, setUserId] = useState('');
  const [mediaId, setMediaId] = useState('');
  const [statusId, setStatusId] = useState('');

  function limpar() {
    setUserId('');
    setMediaId('');
    setStatusId('');
  }

  async function createFavorite(e) {
    e.preventDefault();

    console.log({
      userId,
      mediaId,
      statusId
    });

    await api.post('/biblioteca', {
      usuario: {
        username: userId
      },
      media: {
        id: mediaId
      },
      status: {
        id: statusId
      }, 
    },api.auth).then(async () => {
      await Alert('Cadastro Realizado com Sucesso!', 'Cadastro de Biblioteca');
      history.push('/biblioteca');
    }).catch(error => {
      Alert('Erro ao cadastrar Biblioteca', error.message);
    });
  }

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
              <form onSubmit={createFavorite} >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="user_id"
                    min="1"
                    placeholder="Id Usuário *"
                    value={userId}
                    onChange={(e) => { setUserId(e.target.value) }}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="media_id"
                    min="1"
                    placeholder="Id Media*"
                    value={mediaId}
                    onChange={(e) => { setMediaId(e.target.value) }}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="status_id"
                    min="1"
                    placeholder="Id Status*"
                    value={statusId}
                    onChange={(e) => { setStatusId(e.target.value) }}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Publish</button>&nbsp;
                <button type="reset" className="btn btn-outline-secondary" onClick={limpar}>Limpar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FavoritesForm;

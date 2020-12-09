import React, { useState, useEffect } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const FavoritesFormUpdate = () => {
  const history = useHistory();

  const { id } = useParams();
  const [userId, setUserId] = useState('');
  const [mediaId, setMediaId] = useState('');
  const [statusId, setStatusId] = useState('');

  useEffect(() => {
    async function fetchData() {
      await api.get(`/biblioteca/${id}`, api.auth).then(r => {
        setUserId(r.data.usuario.id);
        setMediaId(r.data.media.id);
        setStatusId(r.data.status.id);
      }).catch((error) => {
        Alert('Erro ao carregar biblioteca', error.message);
        history.push('/biblioteca');
      });
    }

    fetchData();
  }, [id]);

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

    await api.put(`/biblioteca/${id}`, {
      usuario: {
        id: userId
      },
      media: {
        id: mediaId
      },
      status: {
        id: statusId
      },
    }, api.auth).then(async () => {
      await Alert('Registro Atualizado com Sucesso!', 'Edição de Biblioteca');
      history.push('/biblioteca');
    }).catch(error => {
      Alert('Erro ao editar Biblioteca', error.message);
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
                    type="number"
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

export default FavoritesFormUpdate;

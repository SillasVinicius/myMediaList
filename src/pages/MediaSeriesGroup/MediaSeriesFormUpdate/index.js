import React, { useState, useEffect } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const MediaSeriesFormUpdate = () => {
  const history = useHistory();

  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [qtdEpisodios, setQtdEpisodios] = useState('');

  useEffect(() => {
    async function fetchData() {
      await api.get(`/media/${id}`).then(r => {
        setTitulo(r.data.titulo);
        setQtdEpisodios(r.data.qtd_episodios);
      }).catch((error) => {
        Alert('Erro ao carregar série', error.message);
        history.push('/series');
      });
    }

    fetchData();
  }, [id]);

  function limpar() {
    setTitulo('');
    setQtdEpisodios('');
  }

  async function createSerie(e) {
    e.preventDefault();

    console.log({
      titulo,
      qtdEpisodios
    })

    await api.put(`/media/${id}`, {
      titulo: titulo,
      tipo: {
        id: 4
      },
      qtd_episodios: qtdEpisodios
    }).then(async () => {
      await Alert('Registro Atualizado com Sucesso!', 'Edição de Série');
      history.push('/series');
    }).catch(error => {
      Alert('Erro ao editar série', error.message);
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
                <li className="breadcrumb-item"><Link to="/series">Séries</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Nova Série</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form onSubmit={createSerie}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="titulo"
                    placeholder="Titulo *"
                    value={titulo}
                    onChange={(e) => { setTitulo(e.target.value) }}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    name="episodios"
                    min="1"
                    placeholder="Qtd de Episódios *"
                    value={qtdEpisodios}
                    onChange={(e) => { setQtdEpisodios(e.target.value) }}
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

export default MediaSeriesFormUpdate;

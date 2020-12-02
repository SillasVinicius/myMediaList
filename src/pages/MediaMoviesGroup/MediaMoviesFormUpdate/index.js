import React, { useState, useEffect } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const MediaMoviesFormUpdate = () => {
  const history = useHistory();

  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [minutagem, setMinutagem] = useState('');

  useEffect(() => {
    async function fetchData() {
      await api.get(`/media/${id}`).then(r => {
        setTitulo(r.data.titulo);
        setMinutagem(r.data.minutagem);
      }).catch((error) => {
        Alert('Erro ao carregar filme', error.message);
        history.push('/filmes');
      });
    }

    fetchData();
  }, [id]);

  function limpar() {
    setTitulo('');
    setMinutagem('');
  }

  async function createMovie(e) {
    e.preventDefault();

    console.log({
      titulo,
      minutagem
    })

    await api.put(`/media/${id}`, {
      titulo: titulo,
      tipo: {
        id: 3
      },
      minutagem: minutagem
    }).then(async () => {
      await Alert('Registro Atualizado com Sucesso!', 'Edição de Filme');
      history.push('/filmes');
    }).catch(error => {
      Alert('Erro ao editar filme', error.message);
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
                <li className="breadcrumb-item"><Link to="/filmes">Filmes</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Filme</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form onSubmit={createMovie}>
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
                    name="minutagem"
                    min="1"
                    placeholder="Minutagem *"
                    value={minutagem}
                    onChange={(e) => { setMinutagem(e.target.value) }}
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

export default MediaMoviesFormUpdate;

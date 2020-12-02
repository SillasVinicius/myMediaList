import React, { useState, useEffect } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const MediaBooksFormUpdate = () => {
  const history = useHistory();

  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [qtdPaginas, setQtdPaginas] = useState('');

  useEffect(() => {
    async function fetchData() {
      await api.get(`/media/${id}`).then(r => {
        setTitulo(r.data.titulo);
        setQtdPaginas(r.data.qtd_paginas);
      }).catch((error) => {
        Alert('Erro ao carregar livro', error.message);
        history.push('/livros');
      });
    }

    fetchData();
  }, [id]);

  function limpar() {
    setTitulo('');
    setQtdPaginas('');
  }

  async function createBook(e) {
    e.preventDefault();

    console.log({
      titulo,
      qtdPaginas
    })

    await api.put(`/media/${id}`, {
      titulo: titulo,
      tipo: {
        id: 7
      },
      qtd_paginas: qtdPaginas
    }).then(async () => {
      await Alert('Registro Atualizado com Sucesso!', 'Edição de Livro');
      history.push('/livros');
    }).catch(error => {
      Alert('Erro ao editar livro', error.message);
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
                <li className="breadcrumb-item"><Link to="/livros">Livros</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Livro</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form onSubmit={createBook}>
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
                    name="qtdPagina"
                    min="1"
                    placeholder="Qtd de Páginas *"
                    value={qtdPaginas}
                    onChange={(e) => { setQtdPaginas(e.target.value) }}
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

export default MediaBooksFormUpdate;

import React, { useState } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const MediaBooksForm = () => {
  const history = useHistory();

  const [titulo, setTitulo] = useState('');
  const [qtdPaginas, setQtdPaginas] = useState('');

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

    await api.post('/media', {
      titulo: titulo,
      tipo: {
        id: 7
      },
      qtd_paginas: qtdPaginas
    },api.auth).then(async () => {
      await Alert('Cadastro Realizado com Sucesso!', 'Cadastro de Livro');
      history.push('/livros');
    }).catch(error => {
      Alert('Erro ao cadastrar livro', error.message);
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

export default MediaBooksForm;

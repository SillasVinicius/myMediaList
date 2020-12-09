import React, { useState } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const TypeForm = () => {

  const history = useHistory();

  const [descricao, setDescricao] = useState('');

  function limpar() {
    setDescricao('');
  }

  async function createType(e) {
    e.preventDefault();

    await api.post('/tipo', {
      descricao
    }, api.auth).then(async () => {
      await Alert('Cadastro Realizado com Sucesso!', 'Cadastro de Tipo');
      history.push('/tipo');
    }).catch(error => {
      Alert('Erro ao cadastrar tipo', error.message);
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
                <li className="breadcrumb-item"><Link to="/tipo">Tipos</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Tipo</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form onSubmit={createType}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="descricao"
                    placeholder="Descrição *"
                    value={descricao}
                    onChange={(e) => { setDescricao(e.target.value) }}
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

export default TypeForm;

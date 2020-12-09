import React, { useState, useEffect } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const TypeFormUpdate = () => {

  const history = useHistory();
  
  const { id } = useParams();
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    async function fetchData() {
      await api.get(`/tipo/${id}`, api.auth).then(r => {
        setDescricao(r.data.descricao);
      }).catch((error) => {
        Alert('Erro ao carregar tipo', error.message);
        history.push('/tipo');
      });
    }

    fetchData();
  }, [id]);

  function limpar() {
    setDescricao('');
  }

  async function createType(e) {
    e.preventDefault();

    await api.put(`/tipo/${id}`, {
      descricao
    }, api.auth).then(async () => {
      await Alert('Registro Atualizado com Sucesso!', 'Edição de Tipo');
      history.push('/tipo');
    }).catch(error => {
      Alert('Erro ao editar Tipo', error.message);
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

export default TypeFormUpdate;

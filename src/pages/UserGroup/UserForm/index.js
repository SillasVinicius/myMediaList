import React, { useState } from 'react';
import { Alert } from 'react-st-modal';
import { Link, useHistory } from 'react-router-dom';
import Header from './../../../components/Header';
import api from './../../../services/api';
import './styles.css';

const UserForm = () => {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function limpar() {
    setNome('');
    setEmail('');
    setSenha('');
  }

  async function createUser(e) {
    e.preventDefault();

    console.log({
      nome,
      email,
      senha
    })

    await api.post('/usuario', {
      nome,
      email,
      senha
    }, api.auth).then(async () => {
        await Alert('Cadastro Realizado com Sucesso!', 'Cadastro de Usuário' );
        history.push('/user');
    }).catch(error => {
      Alert('Erro ao cadastrar usuário', error.message);
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
                <li className="breadcrumb-item"><Link to="/user">Usuários</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Novo Usuário</li>
              </ol>
            </nav>
            <div className="form-cad">
              <form onSubmit={createUser}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    placeholder="Nome *"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="senha"
                    placeholder="Senha *"
                    value={senha}
                    onChange={(e) => { setSenha(e.target.value) }}
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

export default UserForm;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import './styles.css';

const User = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section className="userContainer">
          <div class="nave container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Usuários</li>
              </ol>
            </nav>
            <div class="card shadow-sm bg-white rounded item">
              <div class="card-body">
                <p class="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link href="#">
                  <h4 class="card-title">Nome: Sillas Vinícius Barbosa Braga</h4>
                  <h5 class="card-thirdSubtitle">Email: sillas@sillas.com</h5>
                  <span >Senha: 12324m34mk412k43214</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default User;

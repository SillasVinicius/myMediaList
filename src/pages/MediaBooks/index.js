import React from 'react';
import Header from './../../components/Header';
import { Link } from 'react-router-dom';

import './styles.css';

const MediaBooks = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section className="userContainer">
          <div class="nave container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Livros</li>
              </ol>
            </nav>
            <div class="card shadow-sm bg-white rounded item">
              <div class="card-body">
                <p class="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link href="#">
                  <h4 class="card-title">Titulo: Harry Potter e a Pedra Filosofal</h4>
                  <h5 class="card-thirdSubtitle">Qtd de páginas: 264</h5>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MediaBooks;

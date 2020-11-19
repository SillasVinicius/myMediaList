import React from 'react';
import Header from './../../components/Header';
import { Link } from 'react-router-dom';
import './styles.css';

const Status = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section className="userContainer">
          <div class="nave container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Status</li>
              </ol>
            </nav>
            <div class="card shadow-sm bg-white rounded item">
              <div class="card-body">
                <p class="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link href="#">
                  <h4 class="card-title">Descrição: Assistindo</h4>
                </Link>
              </div>
            </div>
            <div class="card shadow-sm bg-white rounded item">
              <div class="card-body">
                <p class="card-subtitle mb2 text-muted">
                  <span>Id: 2</span>
                </p>
                <Link href="#">
                  <h4 class="card-title">Descrição: Terminado</h4>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Status;

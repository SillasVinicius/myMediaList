import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';

const Favorites = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <section className="userContainer">
          <div class="nave container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Biblioteca</li>
              </ol>
            </nav>
            <div class="card shadow-sm bg-white rounded item">
              <div class="card-body">
                <p class="card-subtitle mb2 text-muted">
                  <span>Id: 1</span>
                </p>
                <Link href="#">
                  <h4 class="card-title">User_id: 1</h4>
                  <h5 class="card-thirdSubtitle">Media_id: 1</h5>
                  <span >Status_id: 2</span>
                </Link>
              </div>
            </div>
            <div class="card shadow-sm bg-white rounded item">
              <div class="card-body">
                <p class="card-subtitle mb2 text-muted">
                  <span>Id: 2</span>
                </p>
                <Link href="#">
                  <h4 class="card-title">User_id: 2</h4>
                  <h5 class="card-thirdSubtitle">Media_id: 3</h5>
                  <span >Status_id: 1</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Favorites;

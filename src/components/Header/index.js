import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/"><strong>Admin</strong>MyMediaList</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active"><Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/user">Usuários</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/filmes">Filmes</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/series">Séries</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/livros">Livros</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/biblioteca">Biblioteca</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/status">Status</Link>
            </li>
            <li class="nav-item"><Link class="nav-link" to="/tipo">Tipo</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

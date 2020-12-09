import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({create, nameButton}) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><strong>Admin</strong>MyMediaList</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"><Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/user">Usuários</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/filmes">Filmes</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/series">Séries</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/livros">Livros</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/biblioteca">Bibliotecas</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/status">Status</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/tipo">Tipos</Link>
            </li>
          </ul>
        </div>
        {create && <Link to={`/${create}`} className="btn btn-primary" role="button">{nameButton}</Link>}
      </nav>
    </header>
  );
}

export default Header;

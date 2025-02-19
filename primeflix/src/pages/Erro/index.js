import { Link } from 'react-router-dom';
import './erro.css';

function Error() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>Página não encontrada</h3>
      <Link to="/">Veja todos os filmes</Link>
    </div>
  );
}

export default Error;
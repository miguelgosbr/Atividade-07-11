import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
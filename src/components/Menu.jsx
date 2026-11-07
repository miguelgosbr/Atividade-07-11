import { Link } from 'react-router-dom';

export default function Menu() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#555',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'color 0.2s'
  };

  return (
    <nav>
      <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/produtos" style={linkStyle}>Produtos</Link></li>
        <li><Link to="/sobre" style={linkStyle}>Sobre</Link></li>
        <li><Link to="/contato" style={linkStyle}>Contato</Link></li>
      </ul>
    </nav>
  );
}
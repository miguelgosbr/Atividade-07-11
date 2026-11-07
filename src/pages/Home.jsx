import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '75vh', 
      textAlign: 'center', 
      padding: '20px',
      backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff'
    }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        padding: '50px', 
        borderRadius: '16px',
        maxWidth: '800px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
        <h2 style={{ fontSize: '3rem', margin: '0 0 20px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Bem-vindo ao Catálogo Tech!
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '30px', lineHeight: '1.5' }}>
          Eleva o teu nível. Encontra os melhores equipamentos, periféricos e acessórios para o teu setup de desenvolvimento e gaming.
        </p>
        <Link to="/produtos" style={{
          display: 'inline-block',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '15px 35px',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer'
        }}>
          Explorar Produtos
        </Link>
      </div>
    </main>
  );
}
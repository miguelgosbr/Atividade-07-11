import Button from './Button';

export default function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div style={{ 
      backgroundColor: '#fff',
      border: '1px solid #eaeaea', 
      borderRadius: '12px', 
      width: '280px', 
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.2s ease-in-out'
    }}>
      <img 
        src={imagem} 
        alt={titulo} 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '1.2rem' }}>{titulo}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.4' }}>{descricao}</p>
        <p style={{ fontSize: '1.1rem', color: '#007bff', marginBottom: '20px' }}>
          <strong>R$ {preco}</strong>
        </p>
        <Button texto="Comprar" onClick={() => alert(`${titulo} adicionado ao carrinho!`)} />
      </div>
    </div>
  );
}
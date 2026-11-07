import Button from './Button';

export default function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center' }}>
      <img src={imagem} alt={titulo} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
      <h3>{titulo}</h3>
      <p style={{ color: '#555' }}>{descricao}</p>
      <p><strong>R$ {preco}</strong></p>
      <Button texto="Comprar" onClick={() => alert(`${titulo} adicionado ao carrinho!`)} />
    </div>
  );
}
import Card from '../components/Card';

export default function Produtos() {
  const listaProdutos = [
    { id: 1, titulo: 'Notebook Pro', descricao: 'Processador rápido e muita memória.', preco: '4500,00', imagem: 'https://via.placeholder.com/250?text=Notebook' },
    { id: 2, titulo: 'Smartphone X', descricao: 'Câmera de 108MP e bateria duradoura.', preco: '2500,00', imagem: 'https://via.placeholder.com/250?text=Smartphone' },
    { id: 3, titulo: 'Teclado Mecânico', descricao: 'Switches azuis com iluminação RGB.', preco: '350,00', imagem: 'https://via.placeholder.com/250?text=Teclado' },
    { id: 4, titulo: 'Mouse Gamer sem Fio', descricao: 'Alta precisão e ergonomia.', preco: '200,00', imagem: 'https://via.placeholder.com/250?text=Mouse' },
    { id: 5, titulo: 'Monitor Ultrawide', descricao: 'Tela de 29 polegadas Full HD.', preco: '1200,00', imagem: 'https://via.placeholder.com/250?text=Monitor' },
    { id: 6, titulo: 'Headset 7.1', descricao: 'Som surround e microfone com cancelamento de ruído.', preco: '300,00', imagem: 'https://via.placeholder.com/250?text=Headset' }
  ];

  return (
    <main style={{ padding: '20px' }}>
      <h2>Nossos Produtos</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {listaProdutos.map((produto) => (
          <Card 
            key={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </main>
  );
}
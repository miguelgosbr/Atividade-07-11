import Card from '../components/Card';

export default function Produtos() {
  const listaProdutos = [
    { id: 1, titulo: 'Notebook Pro', descricao: 'Processador rápido e muita memória para desenvolvimento.', preco: '4500,00', imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80' },
    { id: 2, titulo: 'Smartphone X', descricao: 'Câmera de 108MP, tela AMOLED e bateria duradoura.', preco: '2500,00', imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80' },
    { id: 3, titulo: 'Teclado Mecânico', descricao: 'Switches azuis com iluminação RGB personalizável.', preco: '350,00', imagem: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80' },
    { id: 4, titulo: 'Mouse Gamer', descricao: 'Alta precisão de DPI e design ergonômico sem fio.', preco: '200,00', imagem: 'https://images.unsplash.com/photo-1527814050087-379381547939?w=500&q=80' },
    { id: 5, titulo: 'Monitor Ultrawide', descricao: 'Tela de 29 polegadas Full HD para máxima produtividade.', preco: '1200,00', imagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' },
    { id: 6, titulo: 'Headset 7.1', descricao: 'Som surround imersivo e microfone com cancelamento de ruído.', preco: '300,00', imagem: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' }
  ];

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#333', fontSize: '2rem' }}>Nossos Produtos</h2>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
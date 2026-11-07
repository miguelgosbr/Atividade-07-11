export default function Sobre() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', minHeight: '75vh' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
        
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Sobre o Projeto</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>
            O <strong>Catálogo Tech</strong> é uma aplicação web moderna desenvolvida como atividade prática avaliativa. O objetivo principal é demonstrar o domínio sobre os pilares fundamentais do desenvolvimento com <strong>React</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
            Durante a construção deste projeto, foram aplicados conceitos cruciais como:
          </p>
          <ul style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '20px' }}>
            <li><strong>Componentização:</strong> Criação de interfaces modulares e reutilizáveis (Headers, Cards, Buttons).</li>
            <li><strong>Props:</strong> Passagem dinâmica de dados entre componentes, garantindo flexibilidade.</li>
            <li><strong>React Router Dom:</strong> Implementação de navegação fluida (Single Page Application) sem recarregamento da página.</li>
          </ul>
        </div>

        <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80" 
            alt="React Code" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }} 
          />
        </div>

      </div>
    </main>
  );
}
export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#ffffff',
      padding: '40px 20px', 
      marginTop: 'auto', 
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>
          <span style={{ color: '#007bff' }}>Catálogo</span> Tech
        </h3>
      </div>
      <p style={{ color: '#888', fontSize: '0.9rem', margin: '10px 0 0 0' }}>
        &copy; 2026 Catálogo Tech. Desenvolvido para a Atividade Prática de React.
      </p>
    </footer>
  );
}
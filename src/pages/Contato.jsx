export default function Contato() {
  const inputStyle = {
    padding: '12px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit'
  };

  return (
    <main style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '15px', color: '#333', fontSize: '2rem' }}>Fale Conosco</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px', lineHeight: '1.5' }}>
          Tem alguma dúvida sobre os nossos produtos? Envie uma mensagem e responderemos o mais rápido possível!
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Seu Nome completo" required style={inputStyle} />
          <input type="email" placeholder="Seu melhor E-mail" required style={inputStyle} />
          <textarea placeholder="Como podemos ajudar?" required rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          <button type="submit" style={{ 
            padding: '15px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'background-color 0.2s'
          }}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </main>
  );
}
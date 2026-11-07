export default function Contato() {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Contato</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
        <input type="text" placeholder="Seu Nome" required style={{ padding: '10px' }} />
        <input type="email" placeholder="Seu E-mail" required style={{ padding: '10px' }} />
        <textarea placeholder="Sua Mensagem" required rows="5" style={{ padding: '10px' }}></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>Enviar Mensagem</button>
      </form>
    </main>
  );
}
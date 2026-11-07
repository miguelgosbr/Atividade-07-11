export default function Button({ texto, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
      {texto}
    </button>
  );
}
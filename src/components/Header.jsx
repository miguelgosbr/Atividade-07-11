import Menu from './Menu';

export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 50px', 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #eaeaea',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#333' }}>
        <span style={{ color: '#007bff' }}>Catálogo</span> Tech
      </h1>
      <Menu />
    </header>
  );
}
import Menu from './Menu';

export default function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc', backgroundColor: '#f8f9fa' }}>
      <h1>Catálogo Tech</h1>
      <Menu />
    </header>
  );
}
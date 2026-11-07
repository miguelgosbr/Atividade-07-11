import { useState } from 'react';

export default function Button({ texto, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      onClick={onClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        padding: '12px 20px', 
        cursor: 'pointer', 
        backgroundColor: isHovered ? '#0056b3' : '#007bff', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'all 0.2s ease',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 123, 255, 0.3)' : 'none',
        width: '100%'
      }}
    >
      {texto}
    </button>
  );
}
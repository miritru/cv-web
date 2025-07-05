import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

export default function SeccionDesplegable({ titulo, children, abierto, setAbierto, icono }) {
  const [isOpen, setIsOpen] = useState(abierto || false);
  const isCurrentlyOpen = abierto !== undefined ? abierto : isOpen;

  function toggle() {
    if (setAbierto) {
      setAbierto();
    } else {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2
        onClick={toggle}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          userSelect: 'none',
          color: '#1D4E4A',
        }}
      >
        {/* Flecha primero */}
        {isCurrentlyOpen ? <FaChevronDown /> : <FaChevronRight />}
        {/* Icono después */}
        {icono && <span style={{ display: 'flex', alignItems: 'center' }}>{icono}</span>}
        {/* Título al final */}
        {titulo}
      </h2>
      {isCurrentlyOpen && <div style={{ marginLeft: 24, marginTop: 10 }}>{children}</div>}
    </div>
  );
}

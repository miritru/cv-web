import React, { useState, useRef, useEffect } from 'react';

export default function MenuTresPuntos({ secciones, onSeleccionar }) {
  const [abierto, setAbierto] = useState(false);
  const refMenu = useRef(null);

  // Para cerrar el menú si clicas fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (refMenu.current && !refMenu.current.contains(event.target)) {
        setAbierto(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={refMenu} style={{ position: 'relative' }}>
      <button
        onClick={() => setAbierto(!abierto)}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: 30,
          cursor: 'pointer',
          userSelect: 'none',
          lineHeight: 1,
        }}
        aria-label="Menú de tres líneas"
      >
        &#x2630; {/* Este es un icono unicode para hamburguesa */}
      </button>

      {abierto && (
        <ul
          style={{
            position: 'absolute',
            top: '110%',
            right: 0,
            backgroundColor: 'white',
            color: 'black',
            listStyle: 'none',
            margin: 0,
            padding: '8px 0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            borderRadius: 4,
            minWidth: 140,
            zIndex: 100,
          }}
        >
          {secciones.map(({ id, titulo }) => (
            <li
              key={id}
              onClick={() => {
                onSeleccionar(id);
                setAbierto(false);
              }}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseDown={e => e.preventDefault()} // evitar perder foco al clicar rápido
            >
              {titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

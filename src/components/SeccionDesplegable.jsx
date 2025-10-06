import React, { useState, useRef, useEffect } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

export default function SeccionDesplegable({ titulo, children, abierto, setAbierto, icono }) {
  // Soporta controlado (prop `abierto`) o no controlado (estado local)
  const [localOpen, setLocalOpen] = useState(Boolean(abierto));
  const isOpen = abierto !== undefined ? abierto : localOpen;

  // referencia al contenido interior para medir su altura real
  const contentInnerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const node = contentInnerRef.current;
    if (!node) return;
    const measure = () => setContentHeight(node.scrollHeight);
    measure();

    let ro;
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      ro = new ResizeObserver(measure);
      ro.observe(node);
    } else {
      window.addEventListener('resize', measure);
    }

    return () => {
      if (ro && ro.disconnect) ro.disconnect();
      else window.removeEventListener('resize', measure);
    };
  }, [children]);

  function toggle() {
    if (typeof setAbierto === 'function') setAbierto();
    else setLocalOpen(prev => !prev);
  }

  return (
    <div style={{ marginTop: 20 }}>
      <div>
        <button
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={`seccion-${titulo}`}
          className="seccion-btn"
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            userSelect: 'none',
            color: '#1D4E4A',
            background: 'transparent',
            border: 'none',
            padding: 0,
            fontSize: '1.05rem',
            fontWeight: 600,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', transition: 'transform 200ms' }}>
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}
          </span>
          {icono && <span style={{ display: 'flex', alignItems: 'center' }}>{icono}</span>}
          <span>{titulo}</span>
        </button>
      </div>

      <div
        id={`seccion-${titulo}`}
        role="region"
        aria-hidden={!isOpen}
        style={{
          overflow: 'hidden',
          transition: 'max-height 280ms ease, opacity 220ms ease',
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          marginLeft: 24,
          marginTop: 10,
        }}
      >
        <div ref={contentInnerRef} style={{ paddingBottom: 6 }}>{children}</div>
      </div>
    </div>
  );
}

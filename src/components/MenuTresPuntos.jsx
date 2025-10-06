import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function MenuTresPuntos({ secciones, onSeleccionar, nombre, redes, onChangeIdioma, idioma }) {
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

  // detect mobile via matchMedia so we can show extended menu only on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(max-width: 480px)');
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    return () => { mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler); };
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
        <div
          style={{
            position: 'absolute',
            top: '110%',
            right: 0,
            backgroundColor: 'white',
            color: 'black',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            borderRadius: 8,
            minWidth: 200,
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          {isMobile ? (
            <>
              <div style={{ padding: 12, borderBottom: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontWeight: 700 }}>{nombre}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {redes?.filter(r=>r.type!=='email').map((r, i) => (
                    <a key={i} href={r.href} target="_blank" rel="noopener noreferrer" title={r.title} style={{ color: '#333' }}>
                      {r.icon}
                    </a>
                  ))}
                </div>
                <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaEnvelope />
                  <a href={`mailto:${redes?.find(r=>r.type==='email')?.href || ''}`} style={{ color: '#333', textDecoration: 'none' }}>{redes?.find(r=>r.type==='email')?.label || ''}</a>
                </div>
                <div style={{ marginTop: 6 }}>
                  <button onClick={() => onChangeIdioma && onChangeIdioma('es')} style={{ marginRight: 6, padding: '6px 8px' }} aria-pressed={idioma==='es'}>ES</button>
                  <button onClick={() => onChangeIdioma && onChangeIdioma('en')} style={{ padding: '6px 8px' }} aria-pressed={idioma==='en'}>EN</button>
                </div>
              </div>

              <ul style={{ listStyle: 'none', margin: 0, padding: 8 }}>
                {secciones.map(({ id, titulo }) => (
                  <li
                    key={id}
                    onClick={() => {
                      onSeleccionar(id);
                      setAbierto(false);
                    }}
                    style={{
                      padding: '10px 12px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      borderRadius: 6,
                    }}
                    onMouseDown={e => e.preventDefault()}
                  >
                    {titulo}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 8 }}>
              {secciones.map(({ id, titulo }) => (
                <li
                  key={id}
                  onClick={() => {
                    onSeleccionar(id);
                    setAbierto(false);
                  }}
                  style={{ padding: '8px 12px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                  onMouseDown={e => e.preventDefault()}
                >
                  {titulo}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

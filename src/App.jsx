import React, { useState, useRef, useEffect } from 'react';
import MenuTresPuntos from './components/MenuTresPuntos';
import SeccionDesplegable from './components/SeccionDesplegable';
import { FaGraduationCap, FaBriefcase, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import fotocv from './assets/fotocv.jpg';

const colors = {
  primary: '#3B8E8C',
  dark: '#1D4E4A',
  text: '#333',
  background: '#E6F7F7',
};

export default function App() {
  const [abiertoPerfil, setAbiertoPerfil] = useState(false);
  const [abiertoFormacion, setAbiertoFormacion] = useState(false);
  const [abiertoExperiencia, setAbiertoExperiencia] = useState(false);
  const [abiertoContacto, setAbiertoContacto] = useState(false);
  const [idioma, setIdioma] = useState('es');
  const [idiomaDropdownAbierto, setIdiomaDropdownAbierto] = useState(false);

  const idiomaRef = useRef(null);
  const perfilRef = useRef(null);
  const formacionRef = useRef(null);
  const experienciaRef = useRef(null);
  const contactoRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (idiomaRef.current && !idiomaRef.current.contains(event.target)) {
        setIdiomaDropdownAbierto(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const textos = {
    es: {
      perfil: 'Perfil',
      formacion: 'Formación',
      experiencia: 'Experiencia',
      contacto: 'Contacto',
      nombre: 'Mirian Trujillo Merino',
      contactoDatos: {
        telefono: '627 31 80 30',
        email: 'mtm.mirian@gmail.com',
        ubicacion: 'Fuengirola (Málaga)',
      },
      secciones: {
        perfil: (
          <>
      <p>Full Stack Developer en formación | Estudiante de Ingeniería Informática | Java, PHP, Laravel, MySQL, Python</p>
            <p>En constante desarrollo y aprendizaje, con el objetivo de continuar mi trayectoria profesional en el sector informático.</p>
            <p>Soy una persona proactiva, resolutiva ante conflictos y con facilidad de adaptación a los cambios.</p>
          </>
        ),
        formacion: (
          <>
            <p><strong>Grado en Ingeniería Informática</strong></p>
            <p>2022 - Actualidad - Universidad Nacional de Educación a Distancia</p>
            <p><strong>Máster en Avances en Seguridad alimentaria</strong></p>
            <p>2018 - 2020 - Universidad de Jaén</p>
            <p><strong>Máster en Profesorado de ESO y Bachillerato, FP y Enseñanza de Idiomas</strong></p>
            <p>2018 - 2020 - Universidad de Jaén</p>
            <p><strong>Grado en Ciencia y Tecnología de los Alimentos</strong></p>
            <p>2013 - 2017 - Universidad de Granada</p>
            <p><strong>Formación complementaria:</strong> Inglés B1, Java, Python, Haskell, C, VHDL</p>
          </>
        ),
        experiencia: (
          <>
            <p><strong>Colaboradora en desarrollo de aplicaciones</strong></p>
            <p>Proyecto Colaborativo (Septiembre 2025 - Actualidad)</p>
            <p>Proyecto Booksycle:</p>
            <p>Colaboración en el desarrollo de Booksycle, una aplicación para Android, iOS y Web centrada en la compra y venta de libros de segunda mano.</p>
            <p>Participación en todo el proceso desde la idea hasta el MVP, utilizando React, Laravel, PHP y MySQL (Full Stack).</p>
            <p>Trabajo en equipo con otros desarrolladores en un entorno ágil y colaborativo.</p>
            <p><a href="https://www.booksycle.com" target="_blank" rel="noopener noreferrer">www.booksycle.com</a></p>

            <p><strong>Técnico de Calidad y Seguridad Alimentaria</strong></p>
            <p>Embutidos Moreno Plaza (Febrero 2020 - Julio 2025)</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Gestión de proveedores.</li>
              <li>Control de trazabilidad.</li>
              <li>Auditorías (IFS, Sanidad, Ibérico).</li>
              <li>
                Control de calidad en planta (buenas prácticas de
                manipulación, verificación de puntos de control, puntos críticos y limpiezas, control de materia
                prima, producto intermedio y producto final).
              </li>
              <li>Gestión de incidencias. Control documental.</li>
              <li>Formulación. Fichas técnicas. Etiquetado.</li>
              <li>Elaboración y verificación de diagramas de flujo.</li>
              <li>Toma de muestras. Estudios de vida útil.</li>
              <li>Optimización de controles. Formación.</li>
            </ul>
            <p><strong>Técnico de Calidad</strong></p>
            <p>Avomix (Noviembre 2019 - Enero 2020)</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Control de calidad en planta y documental.</li>
            </ul>
            <p><strong>Técnico de Calidad</strong></p>
            <p>Puleva Food (Febrero 2017 - Noviembre 2017)</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Control de Calidad orientado a limpiezas (CIP).</li>
            </ul>
          </>
        ),
      },
    },
    en: {
      perfil: 'Profile',
      formacion: 'Education',
      experiencia: 'Experience',
      contacto: 'Contact',
      nombre: 'Mirian Trujillo Merino',
      contactoDatos: {
        telefono: '+34 627 31 80 30',
        email: 'mtm.mirian@gmail.com',
        ubicacion: 'Fuengirola (Málaga)',
      },
      secciones: {
        perfil: (
          <>
            <p>Full Stack Developer in training | Computer Engineering student | Java, PHP, Laravel, MySQL, Python</p>
            <p>Constantly developing and learning, with the goal of continuing my professional career in the IT sector.</p>
            <p>I am proactive, conflict-resolving, and adapt easily to changes.</p>
          </>
        ),
        formacion: (
          <>
            <p><strong>Bachelor's Degree in Computer Engineering</strong></p>
            <p>2022 - Present - National University of Distance Education</p>
            <p><strong>Master's in Advances in Food Safety</strong></p>
            <p>2018 - 2020 - University of Jaén</p>
            <p><strong>Master's in Teaching ESO and Bachillerato, Vocational Training and Language Teaching</strong></p>
            <p>2018 - 2020 - University of Jaén</p>
            <p><strong>Bachelor's Degree in Food Science and Technology</strong></p>
            <p>2013 - 2017 - University of Granada</p>
            <p><strong>Additional training:</strong> English B1, Java, Python, Haskell, C, VHDL</p>
          </>
        ),
        experiencia: (
          <>
            <p><strong>Collaborator — Application Development</strong></p>
            <p>Project Booksycle: Collaborative Project (September 2025 - Present)</p>
            <p>Project Booksycle:</p>
            <p>Collaboration in the development of Booksycle, an Android, iOS, and Web application focused on buying and selling second-hand books.</p>
            <p>Participation in the entire process from the idea to the MVP, using React, Laravel, PHP and MySQL (Full Stack).</p>
            <p>Teamwork with other developers in an agile and collaborative environment.</p>
            <p><a href="https://www.booksycle.com" target="_blank" rel="noopener noreferrer">www.booksycle.com</a></p>

            <p><strong>Food Quality and Safety Technician</strong></p>
            <p>Embutidos Moreno Plaza (February 2020 - July 2025)</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Supplier management.</li>
              <li>Traceability control.</li>
              <li>Audits (IFS, Health, Iberian).</li>
              <li>
                Quality control in the plant (good handling practices, verification of control points,
                critical points and cleaning, control of raw materials,
                intermediate product and final product).
              </li>
              <li>Incident management. Document control.</li>
              <li>Formulation. Technical sheets. Labeling.</li>
              <li>Preparation and verification of flow diagrams.</li>
              <li>Sampling. Shelf-life studies.</li>
              <li>Control optimization. Training.</li>
            </ul>
            <p><strong>Quality Technician</strong></p>
            <p>Avomix (November 2019 - January 2020)</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Plant and documentary quality control.</li>
            </ul>
            <p><strong>Quality Technician</strong></p>
            <p>Puleva Food (February 2017 - November 2017)</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Quality control focused on cleaning (CIP).</li>
            </ul>
          </>
        ),
      },
    },
  };

  const secciones = [
    { id: 'perfil', titulo: textos[idioma].perfil },
    { id: 'formacion', titulo: textos[idioma].formacion },
    { id: 'experiencia', titulo: textos[idioma].experiencia },
    { id: 'contacto', titulo: textos[idioma].contacto },
  ];

  function handleSeleccionar(id) {
    setAbiertoPerfil(prev => (id === 'perfil' ? !prev : false));
    setAbiertoFormacion(prev => (id === 'formacion' ? !prev : false));
    setAbiertoExperiencia(prev => (id === 'experiencia' ? !prev : false));
    setAbiertoContacto(prev => (id === 'contacto' ? !prev : false));


    // const refMap = {
    //   perfil: perfilRef,
    //   formacion: formacionRef,
    //   experiencia: experienciaRef,
    //   contacto: contactoRef,
    // };

    // refMap[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // ESTILOS RESPONSIVE
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: 20,
    lineHeight: 1.6,
    color: colors.text,
    backgroundColor: colors.background,
    boxSizing: 'border-box',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Para que en pantallas pequeñas se ajusten verticalmente
    alignItems: 'center',
    gap: 20,
    marginBottom: 30,
    backgroundColor: colors.primary,
    color: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  };

  const headerLeftStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 20,
    flex: '1 1 300px',
  };

  const fotoStyle = {
    borderRadius: 10,
    width: 140,
    height: 140,
    objectFit: 'cover',
    border: `3px solid ${colors.dark}`,
    flexShrink: 0,
  };

  const nombreYredesStyle = {
    flex: '1 1 200px',
    minWidth: 200,
  };

  const redesStyle = {
    display: 'flex',
    gap: 12,
    marginTop: 8,
    flexWrap: 'wrap',
  };

  const idiomaMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 10,
  };

  const buttonIdiomaStyle = {
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white',
    borderRadius: 4,
    padding: '4px 8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    zIndex: 20,
  };

  const idiomaDropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    color: colors.text,
    border: `1px solid ${colors.primary}`,
    borderRadius: 4,
    overflow: 'hidden',
    zIndex: 30,
    fontSize: 14,
    width: '100%',
    boxSizing: 'border-box',
  };

  // Media queries en inline styles no existen nativamente, así que para media queries usaremos estilos CSS en <style> al final

  return (
    <>
      

      {/* Floating navbar */}
      <div className="nav-float" style={{ width: '100%' }}>
        <div style={{ width: '100%', backgroundColor: colors.primary, padding: 18 }}>
          <div className="container" style={{ maxWidth: containerStyle.maxWidth, margin: '0 auto' }}>
            <header className="header d-flex flex-wrap align-items-center justify-content-between" style={{ ...headerStyle, backgroundColor: 'transparent', padding: 0, borderRadius: 0, marginBottom: 0 }}>
            <div className="header-left d-flex align-items-center flex-grow-1" style={headerLeftStyle}>
            <img
              src={fotocv}
              alt="Mirian Trujillo Merino"
              className="foto"
              style={fotoStyle}
            />
            <div className="nombre-wrapper" style={nombreYredesStyle}>
              {/* Split name into two spans so we can force two lines on mobile via CSS */}
              {(() => {
                const fullName = textos[idioma].nombre || '';
                const parts = fullName.split(' ');
                const first = parts[0] || fullName;
                const rest = parts.slice(1).join(' ');
                return (
                  <h1 className="nombre" style={{ margin: 0 }}>
                    <span className="nombre-first">{first}</span>
                    <span className="nombre-last">{rest ? ` ${rest}` : ''}</span>
                  </h1>
                );
              })()}
              <div className="redes" style={redesStyle}>
                <a href="https://www.linkedin.com/in/miriantrujillomerino" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedin size={24} color="white" />
                </a>
                <a href="https://github.com/miritru" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub size={24} color="white" />
                </a>
                <a href="mailto:mtm.mirian@gmail.com" title="Enviar correo">
                  <FaEnvelope size={24} color="white" />
                </a>
              </div>
            </div>
          </div>

            <div className="d-flex align-items-center ms-3 header-controls">
                {/* Desktop-only language toggle (hidden on small screens) */}
                {/* (Removed standalone header email - email is available inside the mobile menu) */}

                <button
                  className="desktop-idioma"
                  onClick={() => setIdioma(prev => prev === 'es' ? 'en' : 'es')}
                  style={buttonIdiomaStyle}
                  title="Cambiar idioma"
                >
                  {idioma.toUpperCase()}
                </button>

                <div className="ms-2">
                  <MenuTresPuntos
                    secciones={secciones}
                    onSeleccionar={handleSeleccionar}
                    nombre={textos[idioma].nombre}
                    redes={[
                      { href: 'https://www.linkedin.com/in/miriantrujillomerino', title: 'LinkedIn', icon: <FaLinkedin size={20} color="#1D4E4A" /> },
                      { href: 'https://github.com/miritru', title: 'GitHub', icon: <FaGithub size={20} color="#1D4E4A" /> },
                      { type: 'email', href: 'mtm.mirian@gmail.com', label: 'mtm.mirian@gmail.com' },
                    ]}
                    idioma={idioma}
                    onChangeIdioma={(newIso) => { setIdioma(newIso); setIdiomaDropdownAbierto(false); }}
                  />
                </div>
              </div>
          </header>
        </div>
      </div>
      </div>

      <div className="container app-inner" style={containerStyle}>
        <main className="mt-4" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <section
            ref={perfilRef}
            id="perfil"
            style={{ marginBottom: 40 }}
          >
            <SeccionDesplegable
              titulo={textos[idioma].perfil}
              abierto={abiertoPerfil}
              setAbierto={() => handleSeleccionar('perfil')}
              icono={<FaUser color={colors.primary} />}
            >
              {textos[idioma].secciones.perfil}
            </SeccionDesplegable>
          </section>

          <section
            ref={formacionRef}
            id="formacion"
            style={{ marginBottom: 40 }}
          >
            <SeccionDesplegable
              titulo={textos[idioma].formacion}
              abierto={abiertoFormacion}
              setAbierto={() => handleSeleccionar('formacion')}
              icono={<FaGraduationCap color={colors.primary} />}
            >
              {textos[idioma].secciones.formacion}
            </SeccionDesplegable>
          </section>

          <section
            ref={experienciaRef}
            id="experiencia"
            style={{ marginBottom: 40 }}
          >
            <SeccionDesplegable
              titulo={textos[idioma].experiencia}
              abierto={abiertoExperiencia}
              setAbierto={() => handleSeleccionar('experiencia')}
              icono={<FaBriefcase color={colors.primary} />}
            >
              {textos[idioma].secciones.experiencia}
            </SeccionDesplegable>
          </section>

          <section
            ref={contactoRef}
            id="contacto"
            style={{ marginBottom: 40 }}
          >
            <SeccionDesplegable
              titulo={textos[idioma].contacto}
              abierto={abiertoContacto}
              setAbierto={() => handleSeleccionar('contacto')}
              icono={<FaPhone color={colors.primary} />}
            >
              <div>
                <p><FaPhone /> {textos[idioma].contactoDatos.telefono}</p>
                <p><FaEnvelope /> {textos[idioma].contactoDatos.email}</p>
                <p><FaMapMarkerAlt /> {textos[idioma].contactoDatos.ubicacion}</p>
              </div>
            </SeccionDesplegable>
          </section>

        </main>

        <footer style={{
          textAlign: 'center',
          marginTop: 40,
          fontSize: 14,
          color: colors.dark,
          borderTop: `1px solid ${colors.primary}`,
          paddingTop: 20
        }}>
          © 2025 Mirian Trujillo Merino
        </footer>
      </div>
    </>
  );
}

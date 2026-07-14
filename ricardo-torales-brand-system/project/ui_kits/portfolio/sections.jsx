// Portfolio UI kit — full-screen recreation of the Ricardo Torales site.
// Composes the design-system components + local icons. Exposes sections on window.
const DS = window.RicardoToralesBrandSystem_e0aacc;
const { Button, Tag, Badge, SectionLabel, Card, StatItem, SkillCard, TimelineItem, ContactCard, LangBar, Avatar } = DS;
const I = window.Icons;

const wrap = { maxWidth: '1060px', margin: '0 auto', padding: '0 24px' };

function Nav() {
  const links = ['Perfil', 'Competencias', 'Experiencia', 'Formación'];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-default)' }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-brand)', letterSpacing: '-.01em' }}>
          Ricardo <span style={{ color: 'var(--color-accent)' }}>Torales</span>
        </span>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l} href="#" style={{ fontSize: '.875rem', fontWeight: 500, color: 'var(--text-body)', textDecoration: 'none' }}>{l}</a>
          ))}
          <Button variant="primary" size="sm">Contactar</Button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const tags = ['Project Manager', 'Scrum Master', 'Dynamics 365', 'Azure AI', 'Salesforce', 'SAP B1', 'PMBOK', 'Power Platform'];
  return (
    <header style={{ background: 'var(--gradient-hero)', color: '#fff', padding: '88px 0 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={wrap}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.18)', borderRadius: '100px', padding: '5px 14px', fontSize: '.78rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--cyan-400)', marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--cyan-400)', borderRadius: '50%', animation: 'rt-pulse 2s infinite' }} />
              Gerente de Proyectos · Grupo Chacomer
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,3.4rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-.02em', margin: '0 0 12px' }}>Ricardo Torales</h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'rgba(255,255,255,.75)', margin: '0 0 28px', lineHeight: 1.5 }}>
              Gerente de Proyectos Tecnológicos<br />
              <strong style={{ color: 'var(--cyan-400)', fontWeight: 600 }}>Transformación Digital · Inteligencia Artificial · Gobernanza de TI</strong>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {tags.map((t) => <Tag key={t} tone="onDark">{t}</Tag>)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              <Button variant="white" icon={<I.whatsapp size={16} />}>Contactarme</Button>
              <Button variant="outline" icon={<I.download size={16} />}>Descargar CV (PDF)</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {[[<I.mail size={14} />, 'info@ricardotorales.com'], [<I.phone size={14} />, '+595 981 226 529'], [<I.linkedin size={14} />, 'linkedin.com/in/ricardo-torales'], [<I.pin size={14} />, 'Asunción, Paraguay']].map(([ic, tx], i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '.85rem', color: 'rgba(255,255,255,.7)' }}>
                  <span style={{ opacity: .7, display: 'inline-flex' }}>{ic}</span>{tx}
                </span>
              ))}
            </div>
          </div>
          <Avatar src="../../assets/ricardo-torales.jpeg" alt="Ricardo Torales" size={260} />
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)', padding: '32px 0' }}>
      <div style={{ ...wrap, display: 'flex' }}>
        {[['14', '+', 'Años de Experiencia'], ['3', '', 'Roles Simultáneos'], ['9', '+', 'Certificaciones'], ['2', '', 'Maestrías Completadas']].map(([v, s, l], i) => (
          <div key={i} style={{ flex: 1, borderRight: i < 3 ? '1px solid var(--border-default)' : 'none' }}>
            <StatItem value={v} suffix={s} label={l} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Perfil() {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '72px 0' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 340px', gap: '64px', alignItems: 'start' }}>
        <div>
          <SectionLabel>Sobre mí</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.1rem)', fontWeight: 700, color: 'var(--color-brand)', lineHeight: 1.3, margin: '10px 0 16px' }}>Perfil Profesional</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', margin: '0 0 18px', lineHeight: 1.75 }}>
            Ejecutivo tecnológico con más de <strong>14 años de trayectoria</strong> liderando iniciativas de transformación digital de alto impacto en ERP, CRM e Inteligencia Artificial.
          </p>
          <Card accent style={{ margin: '28px 0' }}>
            <p style={{ margin: 0, fontSize: '.95rem', color: 'var(--color-brand)', fontWeight: 500, lineHeight: 1.65 }}>
              Actualmente <strong>Gerente de Proyectos en Grupo Chacomer</strong>, Consultor Externo en Okara y Miembro Titular del Comité de Selección de Proyectos del MITIC (Resolución N.° 381/2025, fondos BID).
            </p>
          </Card>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.75 }}>
            Especialista en <strong>IA aplicada, hiperautomatización y plataformas Microsoft Dynamics 365, Salesforce y SAP</strong>. Scrum Master certificado con formación en PMBOK e ITIL.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card tone="subtle">
            <h4 style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 16px' }}>Posición actual</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--success-100)', border: '1px solid var(--success-200)', borderRadius: '8px', padding: '12px 16px', fontSize: '.875rem', fontWeight: 600, color: 'var(--success-700)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success-500)', animation: 'rt-pulse 2s infinite' }} />
              Gerente de Proyectos · Grupo Chacomer
            </div>
          </Card>
          <Card tone="subtle">
            <h4 style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 16px' }}>Idiomas</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <LangBar name="Español" level="Nativo" value={100} />
              <LangBar name="Inglés" level="Intermedio" value={60} />
              <LangBar name="Portugués" level="Intermedio" value={55} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Competencias() {
  const cards = [
    { icon: <I.clipboard />, title: 'Gestión de Proyectos & PMO', skills: ['PMBOK', 'ITIL', 'SCRUM', 'KANBAN', 'Design Thinking', 'Lean Six Sigma', 'Gobierno de TI'] },
    { icon: <I.stack />, title: 'Plataformas & Tecnologías', skills: ['Dynamics 365 F&O', 'Dynamics CRM', 'Salesforce', 'SAP B1', 'Azure AI', 'Power Platform', '.NET', 'Angular'] },
    { icon: <I.bulb />, title: 'IA & Automatización', skills: ['Azure AI', 'Copilot Studio', 'Machine Learning', 'RPA', 'Hiperautomatización', 'Low Code', 'BI'] },
    { icon: <I.users />, title: 'Liderazgo Ejecutivo', skills: ['Dirección de equipos +15', 'Gestión del cambio', 'Comunicación C-Level', 'Negociación', 'Reportes al directorio'] },
  ];
  return (
    <section style={{ background: 'var(--surface-page)', padding: '72px 0' }}>
      <div style={wrap}>
        <SectionLabel>Habilidades</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.1rem)', fontWeight: 700, color: 'var(--color-brand)', lineHeight: 1.3, margin: '10px 0 16px' }}>Competencias Clave</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: '640px', margin: '0 0 48px' }}>Integración de visión estratégica de negocio, gobernanza de TI y dominio técnico en plataformas líderes del mercado global.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>
          {cards.map((c) => <SkillCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  const items = [
    { current: true, company: 'Grupo Chacomer', role: 'Gerente de Proyectos de Tecnología', period: '2026 – Actualidad', context: 'Grupo empresarial líder en Paraguay · +3.000 colaboradores', bullets: ['Dirección estratégica de la agenda de transformación digital del Grupo.', 'Gobierno de proyectos de alto valor con gestión de presupuesto, riesgos y KPIs.', 'Liderazgo de equipos multidisciplinarios en implementaciones ERP, CRM e IA.'] },
    { company: 'Okara — Consultora Organizacional', role: 'Consultor Externo', period: '2024 – Actualidad', context: 'Consultora de referencia en Paraguay', bullets: ['Asesoría en transformación digital y optimización de procesos.', 'Diseño de soluciones de automatización a medida.'] },
    { company: 'MITIC — Comité de Selección', role: 'Miembro Titular (Sector Privado)', period: '2025', context: 'Resolución N.° 381/2025 · Fondos BID', bullets: ['Evaluación de proyectos tecnológicos con financiamiento BID.'] },
  ];
  return (
    <section style={{ background: 'var(--surface-card)', padding: '72px 0' }}>
      <div style={wrap}>
        <SectionLabel>Trayectoria</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.1rem)', fontWeight: 700, color: 'var(--color-brand)', lineHeight: 1.3, margin: '10px 0 16px' }}>Experiencia Profesional</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: '640px', margin: '0 0 48px' }}>Más de 14 años dirigiendo transformaciones tecnológicas de alto impacto en organizaciones líderes.</p>
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          <div style={{ position: 'absolute', left: '9px', top: '8px', bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--navy-800), var(--border-default))' }} />
          {items.map((it) => <TimelineItem key={it.company} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section style={{ background: 'var(--gradient-hero)', color: '#fff', textAlign: 'center', padding: '96px 0' }}>
      <div style={wrap}>
        <div style={{ display: 'inline-flex' }}><SectionLabel tone="onDark">Contacto</SectionLabel></div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.1rem)', fontWeight: 700, color: '#fff', margin: '12px 0 16px' }}>Construyamos algo de alto impacto</h2>
        <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Abierto a consultoría ejecutiva, alianzas estratégicas y proyectos de transformación digital, IA y automatización.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          <ContactCard icon={<I.mail size={18} />} href="#">info@ricardotorales.com</ContactCard>
          <ContactCard icon={<I.phone size={18} />} href="#">+595 981 226 529</ContactCard>
          <ContactCard icon={<I.linkedin size={18} />} href="#">linkedin.com/in/ricardo-torales</ContactCard>
        </div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="white" icon={<I.whatsapp size={16} />}>Escribir por WhatsApp</Button>
          <Button variant="outline" icon={<I.download size={16} />}>Descargar CV</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'rgba(255,255,255,.5)', textAlign: 'center', padding: '24px', fontSize: '.82rem' }}>
      © 2026 Ricardo Torales · Gerente de Tecnología & Consultor en Automatización · Asunción, Paraguay
    </footer>
  );
}

Object.assign(window, { Nav, Hero, StatsBar, Perfil, Competencias, Experiencia, Contacto, Footer });

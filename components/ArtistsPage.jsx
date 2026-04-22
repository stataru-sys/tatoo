// Artists page — 5 мастеров с реальными фото
function ArtistsPage({ setCurrentPage }) {
  const artists = [
    { id: 1, name: 'Макс Вереск',    role: 'Principal · Neo-traditional', years: '10y', styles: ['neo-trad', 'anime', 'color'],  photo: 'assets/artist-01.png' },
    { id: 2, name: 'Лина Саенко',    role: 'Senior · Neo-traditional',    years: '7y',  styles: ['neo-trad', 'illustration'],    photo: 'assets/artist-02.png' },
    { id: 3, name: 'Аня Вострикова', role: 'Senior · Fine line & Dotwork',years: '8y',  styles: ['fine line', 'dotwork', 'micro'], photo: 'assets/artist-03.png' },
    { id: 4, name: 'Ян Корольков',   role: 'Resident · Traditional & Blackwork', years: '6y', styles: ['traditional', 'blackwork'], photo: 'assets/artist-04.png' },
    { id: 5, name: 'Мия Курода',     role: 'Senior · Japanese & Irezumi',  years: '9y',  styles: ['japanese', 'irezumi', 'ornamental'], photo: 'assets/artist-05.png' },
  ];
  const [activeId, setActiveId] = useStateH(1);
  const active = artists.find(a => a.id === activeId);

  return (
    <div className="page">
      <section className="section grain" style={{paddingTop: 160}}>
        <div className="wrap-wide">
          <div style={{maxWidth: 900, marginBottom: 60}}>
            <div className="eyebrow"><span className="dot"/>Мастера · 05</div>
            <h1 className="display section-title headline" style={{marginTop: 12}}>
              Пятеро,<br/>кто держит<br/><span style={{color: 'var(--accent)'}}>машинку.</span>
            </h1>
            <p style={{fontSize: 17, lineHeight: 1.7, color: 'var(--bone-2)', maxWidth: 600, marginTop: 24}}>
              У каждого — свой почерк, свои табу и свои звёздные часы. Выберите мастера под стиль,
              под настроение или просто по глазам. Все одинаково аккуратны.
            </p>
          </div>

          <div className="artists-grid">
            <div className="artist-feature">
              <div className="ph" style={{height: '100%', backgroundImage: `url(${active.photo})`, backgroundSize: 'cover', backgroundPosition: 'center top'}}>
                <div className="ph-mark" style={{color: 'var(--bone)', opacity: 0.7}}>№ {active.id.toString().padStart(2,'0')}</div>
              </div>
              <div className="artist-feature-info" style={{background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,12,0.95) 55%)', padding: '140px 28px 28px', left: 0, right: 0, bottom: 0}}>
                <div className="mono" style={{fontSize: 11, letterSpacing: '0.22em', color: 'var(--accent)'}}>{active.role}</div>
                <h2 className="display artist-feature-name headline">{active.name}</h2>
                <div className="artist-feature-tags">
                  {active.styles.map(s => (
                    <span key={s} className="artist-chip filled">{s}</span>
                  ))}
                  <span className="artist-chip">{active.years} в ремесле</span>
                </div>
                <div style={{marginTop: 24}}>
                  <button className="btn btn-bone" onClick={() => setCurrentPage('booking')}>
                    Записаться к {active.name.split(' ')[0]} →
                  </button>
                </div>
              </div>
            </div>

            <div className="artist-list">
              {artists.map(a => (
                <div
                  key={a.id}
                  className={`artist-row ${activeId === a.id ? 'active' : ''}`}
                  onClick={() => setActiveId(a.id)}
                >
                  <div className="artist-num">0{a.id}</div>
                  <div>
                    <div className="artist-name">{a.name}</div>
                    <div className="artist-role">{a.role}</div>
                  </div>
                  <div className="artist-years">{a.years}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["PRINCIPAL", "SENIOR", "RESIDENT", "NEO-TRAD", "JAPANESE", "FINE LINE"]} />

      <section className="section grain">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"/>Как выбрать</div>
              <h2 className="display section-title headline">Под что<br/>подбирать.</h2>
            </div>
            <p style={{maxWidth: 340, fontSize: 15, lineHeight: 1.7, color: 'var(--bone-2)'}}>
              Если сомневаетесь — напишите администратору: мы подберём мастера под ваш эскиз.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
            {[
              { t: 'По стилю', b: 'Знаете направление — ищите по тегам. У каждого мастера в профиле помечены стили.' },
              { t: 'По размеру', b: 'Большие полотна — Мия и Ян. Компактное и точное — Аня. Цветной праздник — Макс и Лина.' },
              { t: 'По настроению', b: 'Спокойный длинный сеанс — Мия. Концентрат за час — Аня. Яркая иллюстрация — Макс или Лина.' },
            ].map(k => (
              <div key={k.t} style={{padding: 28, border: '1px solid var(--rule)', background: 'rgba(19,19,22,0.75)'}}>
                <div className="brush" style={{fontSize: 28, color: 'var(--accent)', marginBottom: 14}}>{k.t}</div>
                <div style={{fontSize: 15, lineHeight: 1.7, color: 'var(--bone-2)'}}>{k.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.ArtistsPage = ArtistsPage;

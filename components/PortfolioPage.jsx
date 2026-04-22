// Portfolio page — SVG силуэты (надёжно, без внешних сервисов)
function PortfolioPage() {
  const works = [
    { id: 241, title: 'Obsidian Wings',  style: 'blackwork', artist: 'Ян Корольков',   h: 18, sil: 'back',    sp: 'sp-5', r: 'r-3' },
    { id: 238, title: 'Mother Rose',     style: 'neo-trad',  artist: 'Лина Саенко',    h: 6,  sil: 'rose',    sp: 'sp-4', r: 'r-2' },
    { id: 235, title: 'Dagger',          style: 'fine line', artist: 'Аня Вострикова', h: 3,  sil: 'dagger',  sp: 'sp-3', r: 'r-2' },
    { id: 232, title: 'Serpent Line',    style: 'japanese',  artist: 'Мия Курода',     h: 22, sil: 'snake',   sp: 'sp-4', r: 'r-2' },
    { id: 229, title: 'Skull Card',      style: 'blackwork', artist: 'Ян Корольков',   h: 5,  sil: 'skull',   sp: 'sp-3', r: 'r-2' },
    { id: 225, title: 'Moth Compass',    style: 'dotwork',   artist: 'Аня Вострикова', h: 12, sil: 'moth',    sp: 'sp-5', r: 'r-3' },
    { id: 222, title: 'Rosa Mystica',    style: 'neo-trad',  artist: 'Макс Вереск',    h: 8,  sil: 'rose',    sp: 'sp-4', r: 'r-2' },
    { id: 218, title: 'Sleeve Koi',      style: 'japanese',  artist: 'Мия Курода',     h: 30, sil: 'arm',     sp: 'sp-3', r: 'r-2' },
    { id: 214, title: 'Hand Script',     style: 'lettering', artist: 'Аня Вострикова', h: 2,  sil: 'dots',    sp: 'sp-4', r: 'r-2' },
    { id: 210, title: 'Thin Serpent',    style: 'fine line', artist: 'Аня Вострикова', h: 4,  sil: 'snake',   sp: 'sp-4', r: 'r-2' },
    { id: 207, title: 'Dotted Moth',     style: 'dotwork',   artist: 'Аня Вострикова', h: 14, sil: 'moth',    sp: 'sp-4', r: 'r-2' },
  ];

  const styles = ['все', 'blackwork', 'neo-trad', 'fine line', 'japanese', 'dotwork', 'lettering'];
  const [filter, setFilter] = useStateH('все');
  const [lightbox, setLightbox] = useStateH(null);

  const filtered = filter === 'все' ? works : works.filter(w => w.style === filter);

  return (
    <div className="page">
      <section className="section grain" style={{paddingTop: 160, paddingBottom: 60}}>
        <div className="wrap-wide">
          <div className="eyebrow"><span className="dot"/>Портфолио · 2022–2026</div>
          <h1 className="display section-title headline" style={{marginTop: 12}}>
            Архив<br/>чернил.
          </h1>
          <p style={{fontSize: 17, lineHeight: 1.7, color: 'var(--bone-2)', maxWidth: 620, marginTop: 24}}>
            Более 200 работ в общем журнале. Фильтруйте по стилю или смотрите всё подряд —
            хронология от свежих к старым.
          </p>

          <div className="filters" style={{marginTop: 48}}>
            {styles.map(s => (
              <button
                key={s}
                className={`filter-btn ${filter === s ? 'active' : ''}`}
                onClick={() => setFilter(s)}
              >
                {s} {s !== 'все' && `· ${works.filter(w => w.style === s).length}`}
              </button>
            ))}
            <div style={{flex: 1}}/>
            <div className="mono" style={{fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)', alignSelf: 'center', padding: '0 14px'}}>
              Найдено: {filtered.length} работ
            </div>
          </div>
        </div>
      </section>

      <section className="section tight grain" style={{paddingTop: 0}}>
        <div className="wrap-wide">
          <div className="portfolio-grid" style={{gridAutoRows: '130px'}}>
            {filtered.map(w => (
              <div
                key={w.id}
                className={`work ${w.sp} ${w.r}`}
                onClick={() => setLightbox(w)}
              >
                <Placeholder silhouette={w.sil} mark={`№ ${w.id}`} />
                <div className="work-overlay">
                  <div className="mono" style={{fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)'}}>№ {w.id} · {w.h}H</div>
                  <div className="work-title" style={{marginTop: 6}}>{w.title}</div>
                  <div className="work-meta">{w.style} · {w.artist}</div>
                </div>
                <div className="work-arrow">↗</div>
              </div>
            ))}
          </div>

          <div style={{display:'flex', justifyContent: 'center', marginTop: 60}}>
            <button className="btn btn-ghost">Загрузить ещё ↓</button>
          </div>
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(5,5,7,0.92)', zIndex: 200,
          display: 'grid', placeItems: 'center', backdropFilter: 'blur(8px)', padding: 40
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: '100%', maxWidth: 920, background: 'var(--ink-2)', border: '1px solid var(--rule)',
            display: 'grid', gridTemplateColumns: '1.4fr 1fr'
          }}>
            <div style={{aspectRatio: '4/5', background: 'var(--ink-2)', position: 'relative'}}>
              <Placeholder silhouette={lightbox.sil} mark={`№ ${lightbox.id}`} />
            </div>
            <div style={{padding: 40, display: 'flex', flexDirection: 'column'}}>
              <div className="mono" style={{fontSize: 11, letterSpacing: '0.22em', color: 'var(--accent)'}}>№ {lightbox.id} · {lightbox.style}</div>
              <h2 className="display headline" style={{fontSize: 48, margin: '16px 0 8px'}}>{lightbox.title}</h2>
              <div className="mono" style={{fontSize: 11, letterSpacing: '0.2em', color: 'var(--muted)'}}>{lightbox.artist} · {lightbox.h}h · 2026</div>
              <p style={{fontSize: 14, lineHeight: 1.7, color: 'var(--bone-2)', marginTop: 24}}>
                Работа сделана в {lightbox.h} часов за {Math.ceil(lightbox.h / 6)} сеанс(а).
                Расположение — по согласованию с клиентом. Полное описание — в разделе блога.
              </p>
              <div style={{marginTop: 'auto', paddingTop: 24, display: 'flex', gap: 10}}>
                <button className="btn btn-primary" onClick={() => setLightbox(null)}>Закрыть ✕</button>
                <button className="btn btn-ghost">← В журнал</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.PortfolioPage = PortfolioPage;

// Home page
const { useState: useStateH } = React;

function HomePage({ setCurrentPage }) {
  return (
    <div className="page">
      {/* ======== HERO ======== */}
      <section className="hero wrap-wide grain">
        <div>
          <div className="hero-kicker">— Добро пожаловать в чернильный храм</div>
          <h1 className="display hero-title">
            OBSID<span className="slash">/</span><br/>
            <span className="stroke">IAN INK</span>
          </h1>
          <p className="hero-sub">
            Тату-студия на Пречистенке. Пятеро мастеров. Сотни миллилитров пигмента в год.
            Мы не повторяем эскизы из интернета — мы превращаем то, что у вас в голове, в то,
            что останется на коже.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => setCurrentPage('booking')}>
              Записаться на сеанс <span>→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => setCurrentPage('portfolio')}>
              Смотреть работы
            </button>
          </div>
          <div className="hero-meta">
            <div><b>12+</b><br/>лет чернил</div>
            <div><b>5</b><br/>мастеров</div>
            <div><b>2.4k</b><br/>клиентов</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-blob"/>
          <div className="hero-blob sm"/>
          <div className="hero-imgcard" style={{ top: 0, left: 20, width: 280, height: 360, transform: 'rotate(-3deg)', backgroundImage: 'url(assets/studio-facade.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="ph-mark" style={{color: 'var(--bone)', opacity: 0.8, position: 'absolute', top: 12, right: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em'}}>01 / 04 · FACADE</div>
          </div>
          <div className="hero-imgcard" style={{ top: 200, right: 10, width: 240, height: 340, transform: 'rotate(4deg)', backgroundImage: 'url(assets/studio-interior.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="ph-mark" style={{color: 'var(--bone)', opacity: 0.8, position: 'absolute', top: 12, right: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em'}}>02 / 04 · STUDIO</div>
          </div>
          <div className="hero-scribble" style={{ top: 140, left: 280 }}>
            «ink it.»
          </div>
          <div className="hero-scribble" style={{ bottom: 40, left: 40, color: 'var(--bone)' }}>
            ↘ realtalk
          </div>
        </div>
      </section>

      {/* ======== MARQUEE ======== */}
      <Marquee items={[
        "BLACKWORK", "NEO-TRAD", "FINE LINE", "JAPANESE", "DOTWORK", "REALISM", "ORNAMENTAL"
      ]} />

      {/* ======== SERVICES ======== */}
      <section className="section grain">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"/>Что делаем</div>
              <h2 className="display section-title headline">Три<br/>закона<br/>студии.</h2>
            </div>
            <div style={{maxWidth: 340, color: 'var(--bone-2)', fontSize: 15, lineHeight: 1.6}}>
              Мы не берёмся за всё подряд. Зато в трёх вещах — лучшие в районе.
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24}}>
            {[
              { num: '01', title: 'Ремесло', kw: 'CRAFT',
                body: 'Каждая линия — осознанное решение. Стерильно, чисто, без суеты. Машинки Cheyenne, краски World Famous и Eternal, одноразовые картриджи.'},
              { num: '02', title: 'Сюжет', kw: 'STORY',
                body: 'Эскиз — это разговор. Приходите с образами, а не с готовой картинкой. Мы рисуем под вашу анатомию и под вашу жизнь, а не под референс из Pinterest.'},
              { num: '03', title: 'Ритуал', kw: 'RITUAL',
                body: 'Татуировка — это маленький ритуал перехода. Чай, музыка, ноль спешки. Сеансы по 4–8 часов, никаких конвейеров.'}
            ].map(s => (
              <div key={s.num} style={{
                border: '1px solid var(--rule)',
                padding: '40px 32px',
                background: 'var(--ink-2)',
                position: 'relative',
              }}>
                <div className="mono" style={{fontSize: 11, letterSpacing: '0.24em', color: 'var(--accent)'}}>{s.num} / {s.kw}</div>
        <h3 className="display headline" style={{fontSize: 56, margin: '18px 0 16px'}}>{s.title}</h3>
                <p style={{fontSize: 15, lineHeight: 1.7, color: 'var(--bone-2)', margin: 0}}>{s.body}</p>
                <div className="stamp" style={{position: 'absolute', top: 32, right: 24, color: 'var(--accent)'}}>obs · {s.kw}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== BONE CALLOUT ======== */}
      <section className="section bone grain" style={{padding: '160px 0'}}>
        <div className="wrap" style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center'}}>
          <div>
            <div className="eyebrow"><span className="dot"/>Философия</div>
            <h2 className="display headline" style={{fontSize: 'clamp(56px, 8vw, 120px)', margin: '14px 0 24px', color: 'var(--ink)'}}>
              Кожа<br/>не забывает.
            </h2>
            <p style={{fontSize: 17, lineHeight: 1.7, color: '#2a2722', maxWidth: 480, margin: 0}}>
              Вы можете удалить файл, стереть переписку, обнулить аккаунт — но чернила не кликаются
              в «отмену». Поэтому мы предпочитаем долго обсуждать и быстро работать, а не наоборот.
            </p>
            <div style={{marginTop: 40}}>
              <button className="btn btn-bone" onClick={() => setCurrentPage('about')}>
                Наша история <span>→</span>
              </button>
            </div>
          </div>
          <div className="about-circle">
            <div className="blob"/>
            <Placeholder silhouette="moth" label="Moth · dotwork, 40h session" mark="2024"/>
            <div className="about-scribble-arrow">↑ настоящая работа —<br/>не та, что быстрая</div>
          </div>
        </div>
      </section>

      {/* ======== FEATURED PORTFOLIO ======== */}
      <section className="section grain">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"/>Свежие работы</div>
              <h2 className="display section-title headline">Из<br/>журнала.</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => setCurrentPage('portfolio')}>Все работы →</button>
          </div>

          <div className="portfolio-grid" style={{gridAutoRows: '140px'}}>
            {[
              { id: 241, t: 'Obsidian Wings', m: 'Blackwork · 18h · Ян Корольков',    sil: 'back',   sp: 'sp-5 r-3' },
              { id: 238, t: 'Mother Rose',    m: 'Neo-trad · 6h · Лина Саенко',       sil: 'rose',   sp: 'sp-4 r-2' },
              { id: 235, t: 'Dagger',         m: 'Fine line · 3h · Аня Вострикова',   sil: 'dagger', sp: 'sp-3 r-2' },
              { id: 232, t: 'Serpent Line',   m: 'Japanese · 22h · Мия Курода',       sil: 'snake',  sp: 'sp-4 r-2' },
              { id: 229, t: 'Skull Card',     m: 'Blackwork · 5h · Ян Корольков',     sil: 'skull',  sp: 'sp-3 r-2' },
            ].map(w => (
              <div key={w.id} className={`work ${w.sp}`}>
                <Placeholder silhouette={w.sil} mark={`№ ${w.id}`} />
                <div className="work-overlay">
                  <div className="work-title">{w.t}</div>
                  <div className="work-meta">{w.m}</div>
                </div>
                <div className="work-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== TESTIMONIAL ======== */}
      <section className="section tight grain" style={{borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)'}}>
        <div className="wrap" style={{display:'grid', gridTemplateColumns: 'auto 1fr', gap: 60, alignItems: 'center'}}>
          <div style={{width: 140, height: 140, borderRadius: '50%', overflow: 'hidden'}}>
            <Placeholder silhouette="portrait" label="Марина К." mark=""/>
          </div>
          <div>
            <div className="brush" style={{fontSize: 36, lineHeight: 1.15, color: 'var(--bone)', maxWidth: 800}}>
              «Я два года носила этот эскиз в голове. Ребята за полтора часа сделали его лучше, чем я придумала — и моя рука с этим согласна.»
            </div>
            <div className="mono" style={{fontSize: 11, letterSpacing: '0.22em', color: 'var(--muted)', marginTop: 20}}>
              МАРИНА К. · КЛИЕНТ С 2022 · 3 СЕАНСА
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="section" style={{padding: '140px 0', textAlign: 'center'}}>
        <div className="wrap">
          <div className="tape" style={{fontSize: 18, marginBottom: 28}}>ОКНО ЗАПИСИ ОТКРЫТО</div>
          <h2 className="display headline" style={{fontSize: 'clamp(72px, 11vw, 180px)', margin: '0 0 32px'}}>
            Готовы?
          </h2>
          <p style={{fontSize: 17, color: 'var(--bone-2)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.6}}>
            Запись на май–июль 2026 уже идёт. Консультация — бесплатно. После консультации —
            задаток 20% и календарь в руках.
          </p>
          <button className="btn btn-primary" style={{padding: '20px 32px', fontSize: 13}} onClick={() => setCurrentPage('booking')}>
            Записаться на сеанс <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;

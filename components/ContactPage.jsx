// Contact page
function ContactPage({ setCurrentPage }) {
  return (
    <div className="page">
      <section className="section grain" style={{paddingTop: 160}}>
        <div className="wrap-wide">
          <div className="eyebrow"><span className="dot"/>Как найти</div>
          <h1 className="display section-title headline" style={{marginTop: 12, fontSize: 'clamp(56px, 9vw, 140px)'}}>
            Пречистенка,<br/>14.<br/><span style={{color: 'var(--accent)'}}>Нижний звонок.</span>
          </h1>
          <p style={{fontSize: 17, lineHeight: 1.7, color: 'var(--bone-2)', maxWidth: 620, marginTop: 24}}>
            Подвал старого дома, вход со двора. Железная дверь, на ней — круглая жёлтая наклейка.
            Не перепутаете.
          </p>
        </div>
      </section>

      <section className="section tight grain" style={{paddingTop: 0}}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="eyebrow"><span className="dot"/>Адрес</div>
              <div className="contact-big">ул. Пречистенка, 14, стр. 2<br/>Москва, 119034</div>
              <div style={{fontSize: 14, color: 'var(--bone-2)', lineHeight: 1.7}}>
                м. Кропоткинская · 6 мин пешком<br/>
                Вход со двора, спуск в подвал
              </div>
              <div style={{marginTop: 28}}>
                <button className="btn btn-ghost">Открыть в картах ↗</button>
              </div>
            </div>
            <div className="contact-card">
              <div className="eyebrow"><span className="dot"/>Связь</div>
              <div className="contact-big">+7 (495) 000-14-14<br/>hello@obsidian.ink</div>
              <div style={{fontSize: 14, color: 'var(--bone-2)', lineHeight: 1.7}}>
                Пн–Сб · 12:00 — 22:00<br/>
                Вс — выходной
              </div>
              <div style={{marginTop: 28, display: 'flex', gap: 10}}>
                <button className="btn btn-primary" onClick={() => setCurrentPage('booking')}>Записаться →</button>
                <button className="btn btn-ghost">Telegram ↗</button>
              </div>
            </div>
          </div>

          <div className="map-ph" style={{marginTop: 24}}>
            <Placeholder silhouette="dots" label="Карта · Пречистенка 14" mark="MAP · MSK"/>
            <div style={{position: 'absolute', top: '42%', left: '38%', width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'grid', placeItems: 'center', color: 'var(--ink)', fontFamily: 'Rubik Mono One', zIndex: 3, boxShadow: '0 8px 30px rgba(246,182,60,0.5)'}}>OI</div>
            <div style={{position: 'absolute', bottom: 20, right: 20, zIndex: 3}}>
              <div className="stamp" style={{color: 'var(--bone)', background: 'var(--ink)', borderColor: 'var(--bone)'}}>вход со двора</div>
            </div>
          </div>

          <div style={{marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
            {[
              {t: 'Первый визит', b: 'Паспорт обязателен. Мы не татуируем до 18 лет.'},
              {t: 'Перед сеансом', b: 'Выспитесь, поешьте, не пейте накануне. Удобная одежда.'},
              {t: 'После', b: 'Памятка по заживлению — на выходе. Вопросы — в телеграм.'},
            ].map(k => (
              <div key={k.t} style={{padding: 24, border: '1px solid var(--rule)'}}>
                <div className="brush" style={{fontSize: 24, color: 'var(--accent)', marginBottom: 10}}>{k.t}</div>
                <div style={{fontSize: 14, lineHeight: 1.6, color: 'var(--bone-2)'}}>{k.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;

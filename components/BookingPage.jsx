// Booking page — multi-step form
function BookingPage() {
  const [step, setStep] = useStateH(0);
  const [data, setData] = useStateH({
    style: '',
    size: '',
    artist: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    desc: '',
  });
  const [done, setDone] = useStateH(false);

  const steps = [
    { k: 'style', label: 'Стиль' },
    { k: 'size', label: 'Размер' },
    { k: 'artist', label: 'Мастер' },
    { k: 'when', label: 'Когда' },
    { k: 'contact', label: 'Контакты' },
  ];

  const upd = (k, v) => setData(d => ({ ...d, [k]: v }));

  const canNext = (() => {
    if (step === 0) return !!data.style;
    if (step === 1) return !!data.size;
    if (step === 2) return !!data.artist;
    if (step === 3) return !!data.date && !!data.time;
    if (step === 4) return data.name && data.phone && data.email;
    return true;
  })();

  const styleOpts = [
    { v: 'blackwork', t: 'Blackwork', d: 'Сплошной чёрный, орнаменты, графика.', p: 'от 8 000 ₽/час' },
    { v: 'neo-trad',  t: 'Neo-traditional', d: 'Насыщенный цвет, жирный контур, символика.', p: 'от 7 500 ₽/час' },
    { v: 'fine line', t: 'Fine line', d: 'Тонкая линия, мелкие формы, минимализм.', p: 'от 6 000 ₽/час' },
    { v: 'japanese',  t: 'Japanese', d: 'Ирезуми, волны, драконы, полотна.', p: 'от 9 000 ₽/час' },
    { v: 'dotwork',   t: 'Dotwork', d: 'Точечная техника, геометрия, мандалы.', p: 'от 7 000 ₽/час' },
    { v: 'lettering', t: 'Lettering', d: 'Шрифт, каллиграфия, надписи.', p: 'от 5 500 ₽/час' },
  ];
  const sizeOpts = [
    { v: 'xs', t: 'XS · до 5 см', d: 'Один сеанс 1–2 часа.', p: 'от 6 000 ₽' },
    { v: 's',  t: 'S · 5–10 см', d: 'Один сеанс 2–3 часа.', p: 'от 12 000 ₽' },
    { v: 'm',  t: 'M · 10–20 см', d: 'Один–два сеанса.', p: 'от 24 000 ₽' },
    { v: 'l',  t: 'L · рукав/нога', d: 'Серия сеансов, 4–12 мес.', p: 'от 80 000 ₽' },
  ];
  const artistOpts = [
    { v: 'max',   t: 'Макс Вереск',    d: 'Principal · neo-traditional, anime' },
    { v: 'lina',  t: 'Лина Саенко',    d: 'Senior · neo-traditional, illustration' },
    { v: 'anya',  t: 'Аня Вострикова', d: 'Senior · fine line, dotwork, micro' },
    { v: 'yan',   t: 'Ян Корольков',   d: 'Resident · traditional, blackwork' },
    { v: 'miya',  t: 'Мия Курода',     d: 'Senior · japanese, irezumi' },
    { v: 'any',   t: 'Не важно',       d: 'Администратор подберёт по эскизу' },
  ];
  const dateOpts = ['5 мая', '8 мая', '12 мая', '15 мая', '22 мая', '29 мая'];
  const timeOpts = ['12:00', '14:00', '16:00', '18:00'];

  if (done) {
    return (
      <div className="page">
        <section className="section grain" style={{paddingTop: 200, minHeight: '80vh'}}>
          <div className="wrap" style={{maxWidth: 720, textAlign: 'center'}}>
            <div className="tape" style={{fontSize: 18, marginBottom: 32}}>ЗАЯВКА ПРИНЯТА</div>
            <h1 className="display headline" style={{fontSize: 'clamp(56px, 9vw, 120px)', margin: '0 0 28px'}}>
              До встречи,<br/><span style={{color: 'var(--accent)'}}>{data.name || 'друг'}.</span>
            </h1>
            <p style={{fontSize: 16, lineHeight: 1.7, color: 'var(--bone-2)', margin: '0 auto 32px', maxWidth: 480}}>
              Мы перезвоним на {data.phone} в ближайшие сутки, обсудим эскиз и подтвердим слот на
              {' '}<b>{data.date}, {data.time}</b> у <b>{artistOpts.find(a => a.v === data.artist)?.t}</b>.
            </p>
            <button className="btn btn-primary" onClick={() => { setDone(false); setStep(0); setData({style:'',size:'',artist:'',date:'',time:'',name:'',phone:'',email:'',desc:''}); }}>Новая заявка →</button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="section grain" style={{paddingTop: 160, paddingBottom: 60}}>
        <div className="wrap-wide">
          <div className="eyebrow"><span className="dot"/>Запись · 5 шагов</div>
          <h1 className="display section-title headline" style={{marginTop: 12, fontSize: 'clamp(56px, 8vw, 120px)'}}>
            Запиши<br/>первую<br/>линию.
          </h1>
        </div>
      </section>

      <section className="section tight grain" style={{paddingTop: 0}}>
        <div className="wrap-wide">
          <div className="booking-wrap">
            <div>
              <div className="stepper">
                {steps.map((s, i) => (
                  <div key={s.k}
                    className={`step ${step === i ? 'current' : (step > i ? 'done' : '')}`}
                    onClick={() => { if (step > i) setStep(i); }}
                  >
                    <span className="num">0{i+1}</span>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="step-panel">
                {step === 0 && (
                  <div>
                    <h2 className="display headline step-title">Какой<br/>стиль?</h2>
                    <div className="step-help">01 · выберите одно направление</div>
                    <div className="opts">
                      {styleOpts.map(o => (
                        <div key={o.v} className={`opt ${data.style === o.v ? 'selected' : ''}`} onClick={() => upd('style', o.v)}>
                          <div className="opt-title">{o.t}</div>
                          <div className="opt-desc">{o.d}</div>
                          <div className="opt-price">{o.p}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 className="display headline step-title">Какой<br/>размер?</h2>
                    <div className="step-help">02 · ориентировочно, уточним на консультации</div>
                    <div className="opts">
                      {sizeOpts.map(o => (
                        <div key={o.v} className={`opt ${data.size === o.v ? 'selected' : ''}`} onClick={() => upd('size', o.v)}>
                          <div className="opt-title">{o.t}</div>
                          <div className="opt-desc">{o.d}</div>
                          <div className="opt-price">{o.p}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="display headline step-title">С кем<br/>работать?</h2>
                    <div className="step-help">03 · если не определились — выбирайте «не важно»</div>
                    <div className="opts" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
                      {artistOpts.map(o => (
                        <div key={o.v} className={`opt ${data.artist === o.v ? 'selected' : ''}`} onClick={() => upd('artist', o.v)}>
                          <div className="opt-title">{o.t}</div>
                          <div className="opt-desc">{o.d}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="display headline step-title">Когда<br/>удобно?</h2>
                    <div className="step-help">04 · ближайшие свободные слоты</div>
                    <div className="field">
                      <label>Дата</label>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10}}>
                        {dateOpts.map(d => (
                          <div key={d} className={`opt ${data.date === d ? 'selected' : ''}`} onClick={() => upd('date', d)} style={{textAlign: 'center'}}>
                            <div className="opt-title" style={{fontSize: 14}}>{d}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="field">
                      <label>Время</label>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10}}>
                        {timeOpts.map(t => (
                          <div key={t} className={`opt ${data.time === t ? 'selected' : ''}`} onClick={() => upd('time', t)} style={{textAlign: 'center'}}>
                            <div className="opt-title" style={{fontSize: 14}}>{t}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="display headline step-title">Куда<br/>писать?</h2>
                    <div className="step-help">05 · заполним подтверждение на эти контакты</div>
                    <div className="field">
                      <label>Имя</label>
                      <input value={data.name} onChange={e => upd('name', e.target.value)} placeholder="Как к вам обращаться"/>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
                      <div className="field">
                        <label>Телефон</label>
                        <input value={data.phone} onChange={e => upd('phone', e.target.value)} placeholder="+7"/>
                      </div>
                      <div className="field">
                        <label>Email</label>
                        <input value={data.email} onChange={e => upd('email', e.target.value)} placeholder="you@mail.ru"/>
                      </div>
                    </div>
                    <div className="field">
                      <label>Что хотите набить</label>
                      <textarea value={data.desc} onChange={e => upd('desc', e.target.value)} placeholder="Опишите идею, пришлите референсы почтой или телеграмом"/>
                    </div>
                  </div>
                )}

                <div className="step-actions">
                  {step > 0 && <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>← Назад</button>}
                  <div style={{flex: 1}}/>
                  {step < 4 && <button className="btn btn-primary" disabled={!canNext} onClick={() => setStep(step + 1)} style={{opacity: canNext ? 1 : 0.4}}>Далее →</button>}
                  {step === 4 && <button className="btn btn-primary" disabled={!canNext} onClick={() => setDone(true)} style={{opacity: canNext ? 1 : 0.4}}>Отправить заявку →</button>}
                </div>
              </div>
            </div>

            {/* Sidebar summary */}
            <div className="booking-sidebar">
              <div className="mono" style={{fontSize: 10, letterSpacing: '0.24em', color: 'var(--muted)', textTransform: 'uppercase'}}>Резюме</div>
              <div className="brush" style={{fontSize: 32, color: 'var(--accent)', marginTop: 8, marginBottom: 20}}>ваша запись</div>

              <div className="summary-line"><span className="k">стиль</span><span className="v">{data.style || '—'}</span></div>
              <div className="summary-line"><span className="k">размер</span><span className="v">{data.size ? sizeOpts.find(o => o.v === data.size).t : '—'}</span></div>
              <div className="summary-line"><span className="k">мастер</span><span className="v">{data.artist ? artistOpts.find(o => o.v === data.artist).t : '—'}</span></div>
              <div className="summary-line"><span className="k">дата</span><span className="v">{data.date || '—'}</span></div>
              <div className="summary-line"><span className="k">время</span><span className="v">{data.time || '—'}</span></div>

              <div style={{marginTop: 24, padding: 16, background: 'var(--ink)', border: '1px dashed var(--rule)'}}>
                <div className="mono" style={{fontSize: 10, letterSpacing: '0.22em', color: 'var(--accent)', textTransform: 'uppercase'}}>Задаток</div>
                <div className="display" style={{fontSize: 32, marginTop: 8}}>20%</div>
                <div style={{fontSize: 12, color: 'var(--bone-2)', lineHeight: 1.5, marginTop: 6}}>
                  Оплачивается после подтверждения. Остальное — в день сеанса.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.BookingPage = BookingPage;

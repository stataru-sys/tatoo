// About page
function AboutPage({ setCurrentPage }) {
  return (
    <div className="page">
      {/* HERO */}
      <section className="section grain" style={{paddingTop: 160}}>
        <div className="wrap-wide">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
            <div>
              <div className="eyebrow"><span className="dot"/>О студии</div>
              <h1 className="display section-title headline" style={{marginTop: 12}}>
                Двенадцать<br/>лет<br/><span style={{color: 'var(--accent)'}}>кожи</span><br/>и чернил.
              </h1>
              <p style={{fontSize: 17, lineHeight: 1.7, color: 'var(--bone-2)', maxWidth: 520, marginTop: 28}}>
                Студия открылась в 2014 году в подвале на Пречистенке. Тогда нас было двое,
                одна машинка и одна идея: делать тату, которые не стыдно показать через десять лет.
                Сегодня нас шестеро, а идея та же.
              </p>
            </div>
            <div className="about-circle" style={{maxWidth: 480}}>
              <div className="blob" style={{background: 'var(--accent)'}}/>
              <Placeholder silhouette="arm" label="Sleeve · Ян, 2024" mark="студия · 2024"/>
              <div className="about-scribble-arrow" style={{color: 'var(--accent)'}}>↘ старая добрая ручная работа</div>
            </div>
          </div>
        </div>
      </section>

      {/* BONE SECTION — STORY */}
      <section className="section bone grain">
        <div className="wrap">
          <div className="about-story">
            <div className="about-circle">
              <div className="blob"/>
              <Placeholder silhouette="portrait" label="Ян Корольков · основатель" mark="2014"/>
            </div>
            <div>
              <div className="eyebrow"><span className="dot"/>01 · откуда</div>
              <h2 className="display headline" style={{fontSize: 'clamp(48px, 6vw, 88px)', margin: '12px 0 28px', color: 'var(--ink)'}}>
                Где всё<br/>началось.
              </h2>
              <div className="about-body">
                <p>
                  Ян уехал из Петербурга в 2011 с одним чемоданом и пачкой эскизов. Три года работал
                  в чужих студиях, пока не понял простую вещь: почти никто не делает татуировки,
                  которые он сам бы себе набил.
                </p>
                <p>
                  Obsidian Ink — это попытка построить студию, в которую хочется возвращаться не за
                  машинкой, а за разговором. За тем вечером, когда эскиз впервые превращается в линию.
                </p>
              </div>
              <div className="pull-quote" style={{marginTop: 40}}>
                «Хорошая татуировка — это диалог, который остался на коже.»
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION — CRAFT */}
      <section className="section grain">
        <div className="wrap">
          <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'}}>
            <div>
              <div className="eyebrow"><span className="dot"/>02 · как</div>
              <h2 className="display headline" style={{fontSize: 'clamp(48px, 6vw, 88px)', margin: '12px 0 28px'}}>
                Жизнь,<br/>в чернилах.
              </h2>
              <p style={{fontSize: 16, lineHeight: 1.75, color: 'var(--bone-2)', margin: '0 0 16px'}}>
                Мы не маркетинговое агентство. Мы — шестеро людей, которые большую часть недели
                проводят, наклонившись над чужой кожей. Поэтому у нас всё без рюшечек: честная цена,
                честные сроки и работы, которые заживают красиво.
              </p>
              <p style={{fontSize: 16, lineHeight: 1.75, color: 'var(--bone-2)', margin: 0}}>
                Стерильность, одноразовые картриджи, автоклав два раза в день. Всё то, о чём
                обычно не принято писать на сайте — но без чего нет ремесла.
              </p>
            </div>
            <div className="about-circle" style={{maxWidth: 480}}>
              <div className="blob" style={{background: 'var(--bone)'}}/>
              <Placeholder silhouette="skull" label="Работа над деталью" mark="процесс"/>
            </div>
          </div>
        </div>
      </section>

      {/* BONE — ART / CULTURE */}
      <section className="section bone grain">
        <div className="wrap">
          <div className="about-story">
            <div>
              <div className="eyebrow"><span className="dot"/>03 · зачем</div>
              <h2 className="display headline" style={{fontSize: 'clamp(48px, 6vw, 88px)', margin: '12px 0 28px', color: 'var(--ink)'}}>
                Искусство<br/>× культура.
              </h2>
              <div className="about-body">
                <p>
                  Раз в квартал мы приглашаем художников — иллюстраторов, граверов, каллиграфов —
                  и устраиваем закрытые сессии. Иногда из них рождаются татуировки. Иногда —
                  плакаты, которые висят у нас на стенах.
                </p>
                <p>
                  Мы верим, что татуировка — это продолжение искусства, а не его отдельная
                  подкатегория. Поэтому мы дружим с галереями, музыкантами и авторами зинов.
                  Приходите на наши вечеринки — они не на сайте, только по рассылке.
                </p>
              </div>
              <div style={{marginTop: 40}}>
                <button className="btn btn-bone" onClick={() => setCurrentPage('booking')}>
                  Подписаться на рассылку →
                </button>
              </div>
            </div>
            <div className="about-circle">
              <div className="blob"/>
              <Placeholder silhouette="moth" label="Collab · художник Я. Журков, 2025" mark="collab"/>
            </div>
          </div>

          <div className="stats">
            <div className="stat"><div className="stat-num">12<span className="suffix">y</span></div><div className="stat-label">На рынке</div></div>
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">Мастеров</div></div>
            <div className="stat"><div className="stat-num">2.4<span className="suffix">k</span></div><div className="stat-label">Клиентов</div></div>
            <div className="stat"><div className="stat-num">11<span className="suffix">k</span></div><div className="stat-label">Часов в кресле</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.AboutPage = AboutPage;

// Shared primitives for Obsidian Ink
const { useState, useEffect, useRef, useMemo } = React;

/* ===== Placeholder image tile ===== */
function Placeholder({ label, mark, silhouette = "portrait", style, className = "", children }) {
  const silhouettes = {
    portrait: (
      <svg width="55%" viewBox="0 0 120 160" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="60" cy="50" r="22" />
        <path d="M20 160 C 25 100, 95 100, 100 160" />
      </svg>
    ),
    arm: (
      <svg width="65%" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 70 C 40 55, 80 60, 110 50 L 150 40 L 150 80 L 110 80 C 80 80, 40 85, 10 100 Z" />
        <circle cx="70" cy="65" r="10" />
        <circle cx="100" cy="58" r="6" />
      </svg>
    ),
    back: (
      <svg width="60%" viewBox="0 0 140 180" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M30 20 L 110 20 L 115 70 L 130 160 L 10 160 L 25 70 Z" />
        <circle cx="70" cy="55" r="18" />
        <path d="M50 95 Q 70 115 90 95" />
      </svg>
    ),
    rose: (
      <svg width="55%" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="60" cy="60" r="10" />
        <circle cx="60" cy="60" r="22" />
        <circle cx="60" cy="60" r="36" />
        <path d="M60 24 L 60 10 M 60 96 L 60 110 M 24 60 L 10 60 M 96 60 L 110 60" />
      </svg>
    ),
    snake: (
      <svg width="70%" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M10 60 Q 40 20, 80 60 T 150 60" />
        <circle cx="150" cy="60" r="5" />
      </svg>
    ),
    dagger: (
      <svg width="30%" viewBox="0 0 40 160" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 10 L 25 120 L 20 135 L 15 120 Z" />
        <rect x="10" y="118" width="20" height="4" />
        <rect x="17" y="122" width="6" height="20" />
      </svg>
    ),
    skull: (
      <svg width="45%" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20 60 Q 20 20 60 20 Q 100 20 100 60 L 100 80 L 80 80 L 80 100 L 40 100 L 40 80 L 20 80 Z" />
        <circle cx="45" cy="55" r="8" fill="currentColor"/>
        <circle cx="75" cy="55" r="8" fill="currentColor"/>
      </svg>
    ),
    moth: (
      <svg width="60%" viewBox="0 0 140 120" fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="40" cy="60" rx="36" ry="28" />
        <ellipse cx="100" cy="60" rx="36" ry="28" />
        <line x1="70" y1="30" x2="70" y2="100" />
      </svg>
    ),
    hand: (
      <svg width="40%" viewBox="0 0 100 140" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M30 140 L 30 70 Q 30 50 45 50 L 45 30 Q 45 15 55 15 L 55 50 L 65 50 L 65 25 Q 65 10 75 10 L 75 60 L 85 60 Q 95 60 95 70 L 95 140 Z" />
      </svg>
    ),
    dots: null
  };
  return (
    <div className={`ph ${className}`} style={style}>
      {silhouettes[silhouette] && <div className="ph-silhouette">{silhouettes[silhouette]}</div>}
      {mark && <div className="ph-mark">{mark}</div>}
      {label && <div className="ph-label">{label}</div>}
      {children}
    </div>
  );
}

/* ===== Nav ===== */
function Nav({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["home", "artists", "portfolio", "about", "contact"];
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap-wide nav-inner">
        <div className="logo" onClick={() => setCurrentPage("home")}>
          <div className="logo-mark">OI</div>
          <div>
            <div className="logo-word">OBSIDIAN INK</div>
            <div className="logo-sub">EST · 2014 · MSK</div>
          </div>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <div
              key={l}
              className={`nav-link ${currentPage === l ? "active" : ""}`}
              onClick={() => setCurrentPage(l)}
            >
              {l}
            </div>
          ))}
        </div>
        <button className="nav-cta" onClick={() => setCurrentPage("booking")}>Записаться →</button>
      </div>
    </nav>
  );
}

/* ===== Marquee ===== */
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i} className="marquee-item">
            {it} <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Footer ===== */
function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">OBSIDIAN<br/>INK.</div>
            <div className="footer-sub">Tattoo studio · Est. 2014</div>
            <div style={{marginTop: 28, maxWidth: 360, color: 'var(--bone-2)', fontSize: 14, lineHeight: 1.6}}>
              Работаем с кожей как с холстом. Каждая работа — контракт между мастером и клиентом, подписанный чернилами.
            </div>
          </div>
          <div>
            <h5>Навигация</h5>
            <ul>
              <li><a onClick={() => setCurrentPage('home')}>Главная</a></li>
              <li><a onClick={() => setCurrentPage('artists')}>Мастера</a></li>
              <li><a onClick={() => setCurrentPage('portfolio')}>Работы</a></li>
              <li><a onClick={() => setCurrentPage('about')}>О студии</a></li>
              <li><a onClick={() => setCurrentPage('booking')}>Запись</a></li>
            </ul>
          </div>
          <div>
            <h5>Контакт</h5>
            <ul>
              <li><a>ул. Пречистенка 14,<br/>Москва</a></li>
              <li><a>+7 (495) 000-14-14</a></li>
              <li><a>hello@obsidian.ink</a></li>
              <li><a>Пн–Сб · 12:00–22:00</a></li>
            </ul>
          </div>
          <div>
            <h5>Соц. сети</h5>
            <ul>
              <li><a>Instagram ↗</a></li>
              <li><a>Telegram ↗</a></li>
              <li><a>VK ↗</a></li>
              <li><a>Behance ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <span>© 2014—2026 · Obsidian Ink</span>
          <span>Сделано с любовью к чернилам</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Placeholder, Nav, Marquee, Footer });

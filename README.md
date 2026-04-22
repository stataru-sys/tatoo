# OBSIDIAN INK — Tattoo Studio Website

Оригинальный многостраничный сайт тату-студии «Obsidian Ink».

## Запуск

Откройте `Obsidian Ink.html` в браузере — сайт полностью статический, без сборки.

## Структура

- `Obsidian Ink.html` — корневой файл с React + Babel
- `styles.css` — все стили (тёмная палитра + янтарный акцент, адаптив до 420px)
- `components/` — React-компоненты по страницам:
  - `Shared.jsx` — Nav, Footer, Placeholder, Marquee, Tweaks
  - `HomePage.jsx`, `ArtistsPage.jsx`, `PortfolioPage.jsx`, `AboutPage.jsx`, `BookingPage.jsx`, `ContactPage.jsx`
- `assets/` — фото салона, портреты мастеров, фоновая текстура

## Стек

- React 18 + Babel Standalone (inline JSX, без сборки)
- Чистый CSS (Grid, aspect-ratio, media queries)
- Google Fonts: Rubik Mono One, Bebas Neue, Permanent Marker, Caveat Brush, Playfair Display, JetBrains Mono

## Особенности

- 6 страниц с плавными переходами
- Многошаговая форма записи (5 шагов)
- Фильтры и lightbox в портфолио
- Карточки мастеров 9:16
- Встроенные Tweaks: 3 варианта стиля + 5 акцентных цветов
- Полный адаптив (1024 / 720 / 420 px)

## Лицензия

MIT

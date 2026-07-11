# Kingdom RP wiki

Публичная вики сервера **Kingdom RP**: справочник по системам развития (путям и
специализациям). Собрана на [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
и публикуется на GitHub Pages.

**Сайт:** https://kingdom-rp.github.io/krp-wiki/

## Пути развития

- ⚔ Война — бой, урон, доступ к броне и оружию
- ⛏ Добыча — камень, руды, древесина
- 🌾 Промысел — земледелие, животные, рыбалка, готовка
- 🔨 Ремесло — ковка, плотницкое дело, натуральные материалы
- ✨ Магия — зельеварение и зачарование

## Локальный запуск

```bash
pip install -r requirements.txt
mkdocs serve
```

Открыть http://127.0.0.1:8000

## Публикация

Пуш в ветку `main` автоматически собирает и деплоит сайт через GitHub Actions
(`.github/workflows/deploy.yml`). Контент — файлы в `docs/`.

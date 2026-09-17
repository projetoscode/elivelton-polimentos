# Elivelton Polimentos & Martelinho de Ouro

Site institucional do centro estético automotivo Elivelton Polimentos & Martelinho de Ouro — PPF, Window Film, Martelinho de Ouro, Coating Cerâmico, customização e cursos de formação técnica.

Publicado em GitHub Pages a partir da pasta [`docs/`](docs/).

## Estrutura

```
docs/
  index.html        ← página única
  css/style.css      ← design system (preto & amarelo)
  js/main.js         ← menu, scroll-reveal
  assets/img/        ← fotos otimizadas para web
  assets/video/      ← vídeos comprimidos (hero + showreel)
```

## Rodar localmente

```bash
cd docs
python -m http.server 8080
# abra http://localhost:8080
```

## Editar conteúdo

Todo o texto, links de WhatsApp e placeholders (`*`) ficam em `docs/index.html`. Há dois pontos marcados como sugestão para confirmar antes de publicar novamente:
- Endereço da cidade (rodapé)
- @ do Instagram (menu e rodapé)

## Publicar alterações

Qualquer alteração em `docs/` é publicada automaticamente pelo GitHub Pages após o push para `main`.

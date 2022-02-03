# 11ty + Tailwindcss starter

> Lavet med [Eleventy](https://www.11ty.dev) og [TailwindCSS](https://tailwindcss.com/).

## Struktur

### `config`

Indeholder config-filer med shortcodes og filters. Disse importeres til `.eleventy.js`.

### `src`

11ty input mappe. Indeholder sitets filer, templates, assets, osv.

- `_data`: global site data (husk at ændre `site.json`).
- `_includes`: partials/includes.
- `_layouts`: layout-filer.
- `assets`: billeder, css, js, osv.
- `_pages`: sider
- `404.md`: laver sitets 404-fejlside.
- `robots.njk`: laver sitets `robots.txt`.
- `sitemap.njk`: laver sitets `sitemap.xml`.


## `package.json` Scripts

- `serve`: serverer sitet i dev mode.
- `build`: bygger sitet til produktion.
- `clean`: sletter alt i `/dist` (undtagen billeder).
- `clean:all`: sletter `/dist`.

## Front Matter

Følgende data bør indsættes i Front Matter

- `title`: en del af sidens meta title, sammen med `title` fra `site.json`.
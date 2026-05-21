# Pizza 38 Landing Page

Sito statico vanilla HTML, CSS e JavaScript per Pizza 38, pizzeria artigianale a Bra.

## Struttura

- `index.html`: pagina principale con contenuto semantico, SEO di base, dati strutturati e asset locali.
- `styles.css`: reset, variabili, layout responsive, componenti e animazioni.
- `script.js`: menu mobile, stato header, anno corrente e funzione `isOpen()` per mostrare se il locale è aperto.
- `404.html`: pagina di errore coerente con l'identita visiva.
- `manifest.json`, `robots.txt`, `sitemap.xml`: file di supporto per browser, crawler e pubblicazione.
- `images/`: logo e immagini fotografiche del sito.
- `icons/`: favicon e icone PWA derivate dal logo.

## Uso locale

Il sito non richiede build o dipendenze. Puoi aprire `index.html` direttamente nel browser oppure servirlo con un server statico se vuoi testare URL e file di supporto:

```bash
python -m http.server 8080
```

## Pubblicazione

Carica l'intera cartella su un hosting statico. Prima del deploy definitivo verifica il dominio in:

- `index.html` nel tag canonical e nei metadati Open Graph, se serve un URL assoluto;
- `robots.txt`;
- `sitemap.xml`.

Il dominio impostato ora è `https://www.pizza38bra.it/`.

## Asset e font

Le immagini sono locali e arrivano dal progetto originale. I font sono caricati da Google Fonts: Inter, Bebas Neue e Caveat, con `display=swap`.

## Integrazioni esterne

La sezione contatti include una mappa Google Maps incorporata. Se in futuro verranno aggiunti analytics, pixel o altri script non tecnici, andranno collegati a un sistema di consenso cookie prima del caricamento.

## Note legali

Privacy Policy e Cookie Policy non sono incluse come testi definitivi. Vanno generate, approvate e pubblicate prima di aggiungere link legali pubblici nel footer o nella sitemap.

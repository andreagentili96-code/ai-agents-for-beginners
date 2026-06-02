# Villa dei Fiori — Nuovo sito web (3 varianti di design)

Restyling completo del sito della RSA **Villa dei Fiori**: moderno, fluido, responsive
e pensato per trasmettere professionalità e sicurezza ai familiari dei pazienti.

> ⭐ **Versione premium consigliata:** [`sito-premium/`](sito-premium/index.html) — esperienza
> cinematografica con apertura dal palazzo storico (clicca sull'ingresso ed entra) e contenuti
> reali della **Casa di Cura Villa dei Fiori di Acerra (dal 1962)**: reparti, presidio di
> riabilitazione e sedi. È l'evoluzione che supera le tre bozze iniziali qui sotto.

Sono incluse anche **tre proposte di design** iniziali, complete e indipendenti. Apri il file
[`index.html`](index.html) nella cartella principale per vedere tutto a confronto.

## 🎨 Le tre varianti

| # | Nome | Stile | Quando sceglierla |
|---|------|-------|-------------------|
| 1 | **Eleganza Classica** (`variante-1-eleganza/`) | Serif editoriale, verde-petrolio + oro | Immagine prestigiosa, autorevole, tradizionale |
| 2 | **Corporate USA** (`variante-2-corporate/`) | Navy + blu elettrico, guidata dai numeri | Look da società quotata, moderno e tecnologico |
| 3 | **Calore Mediterraneo** (`variante-3-calore/`) | Salvia + terracotta, forme morbide | Tono umano ed empatico, vicino alle famiglie |

Ogni variante contiene tutte le sezioni di un sito completo: hero, servizi/livelli di
assistenza, approccio alla cura, numeri, struttura e ambienti, testimonianze delle
famiglie, FAQ, contatti con modulo e footer.

## 👀 Come vederlo

- **Subito:** doppio clic su `index.html` (apre la vetrina) e poi "Apri la variante".
- In alternativa apri direttamente `variante-X-.../index.html`.

> Le interazioni (menu mobile, animazioni, contatori, FAQ, invio modulo) funzionano
> aprendo il file nel browser, senza alcuna installazione.

## ✏️ Come personalizzarlo (dati reali)

I dati specifici sono inseriti come **segnaposto tra parentesi quadre**. Cercali e
sostituiscili in tutti i file `.html` della variante scelta:

- `[TELEFONO]` → il numero di telefono reale
- `+390000000000` → lo stesso numero in formato internazionale (negli attributi `tel:` e `href`)
- `[VIA E NUMERO]`, `[CAP CITTÀ (PROV)]`, `[CITTÀ]` → l'indirizzo
- `info@villadeifiori.it` → l'email reale
- `[00000000000]` → la Partita IVA
- Statistiche (anni, posti letto, ecc.) negli attributi `data-count="..."`

### Foto
Al posto delle immagini sono presenti **segnaposto grafici** (gradienti + motivo
floreale) contrassegnati nel codice da commenti tipo
`<!-- Sostituisci con una foto reale -->`. Per usare foto vere, sostituisci il blocco
`<svg>...</svg>` con un tag immagine, ad esempio:

```html
<img src="../assets/img/struttura.jpg" alt="La struttura di Villa dei Fiori" />
```

e salva le foto nella cartella `assets/img/`.

### Colori e font
Si modificano in un attimo dalle variabili `:root { ... }` in cima al file `style.css`
di ciascuna variante (es. `--brand`, `--accent`).

## 📨 Far funzionare davvero il modulo contatti

Il modulo è già pronto graficamente e mostra un messaggio di conferma (demo
front-end). Per ricevere le richieste via email, le opzioni più semplici sono:

- **[Formspree](https://formspree.io)** o **[Web3Forms](https://web3forms.com)**:
  aggiungi `action="https://..."` e `method="POST"` al tag `<form>` (gratis, zero codice server).
- Oppure collega un backend/servizio email a tua scelta.

## 🌐 Pubblicarlo online (gratis)

- **GitHub Pages:** carica la cartella della variante scelta e attiva Pages.
- **Netlify / Vercel:** trascina la cartella nella dashboard → sito online in pochi secondi.
- **Hosting tradizionale:** carica i file via FTP nella cartella pubblica (`public_html`).

Essendo HTML/CSS/JS statico, non richiede database né configurazioni particolari.

## 🛠️ Tecnologia

- HTML5 semantico + CSS moderno (custom properties, grid, flexbox)
- JavaScript vanilla (nessuna dipendenza, nessun build)
- Tipografia via Google Fonts, icone SVG inline
- Completamente responsive (desktop, tablet, smartphone) e con animazioni
  che rispettano `prefers-reduced-motion` per l'accessibilità.

## 📁 Struttura

```
villa-dei-fiori-website/
├── index.html                  ← vetrina di confronto delle 3 varianti
├── README.md
├── assets/
│   ├── js/main.js              ← interazioni condivise
│   └── img/                    ← (qui le foto reali)
├── variante-1-eleganza/   { index.html · style.css }
├── variante-2-corporate/  { index.html · style.css }
└── variante-3-calore/     { index.html · style.css }
```

---

I dati sono segnaposto realistici: prima di andare online, verifica e sostituisci
tutte le informazioni tra `[ ]` con quelle ufficiali della struttura.

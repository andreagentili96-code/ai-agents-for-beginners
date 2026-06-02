# HANDOFF — Sito Villa dei Fiori (per una nuova sessione di Claude)

> Documento di passaggio di consegne. Leggimi per sapere **esattamente** stato del lavoro,
> decisioni prese, vincoli dell'ambiente e prossimi passi.

---

## 1. Contesto del progetto
Ricostruzione completa del sito di **"Villa dei Fiori"**. Inizialmente creduta una RSA, è in
realtà la **Casa di Cura privata "Villa dei Fiori" di Acerra (NA)**, attiva **dal 1962**,
accreditata SSN (~**242 posti letto**), con un **Presidio di Riabilitazione** (anche sede di
Nocera Inferiore, SA). Dominio reale: `villadeifiori.it`.

Obiettivo del cliente: sito **moderno, premium, professionale**, NON template/"da bambino".
Concept voluto: **apertura cinematografica dalla foto del palazzo storico → si entra dal portone**.

## 2. Dove si lavora
- Repo: `andreagentili96-code/ai-agents-for-beginners`
- Branch: **`claude/villa-dei-fiori-redesign-l3GxX`**
- **Deliverable principale (quello buono):** `villa-dei-fiori-website/sito-premium/`
  - `index.html`, `style.css`, `app.js`, cartella `img/`
- PR aperta (draft): **#1**
- Anteprima online (htmlpreview):
  `https://htmlpreview.github.io/?https://github.com/andreagentili96-code/ai-agents-for-beginners/blob/claude/villa-dei-fiori-redesign-l3GxX/villa-dei-fiori-website/sito-premium/index.html`
- Vedere in locale: `cd villa-dei-fiori-website/sito-premium && python3 -m http.server 8000`

> ⚠️ In `villa-dei-fiori-website/` ci sono anche `variante-1-eleganza/`, `variante-2-corporate/`,
> `variante-3-calore/` e una `index.html` vetrina: erano le **3 bozze iniziali, RIFIUTATE dal
> cliente** perché troppo generiche. NON sono il deliverable: lavorare solo su `sito-premium/`.

## 3. Stato attuale del sito premium
Design **editoriale/luxury**: tipografia serif **Cormorant Garamond** + **Inter**, palette presa
dall'edificio (**verde foresta `#1f3d34`** + **ottone `#9c7c3c`** + avorio `#f6f2ea`), filetti
sottili, molto bianco, niente card tonde. Tutte le **illustrazioni cartoon SVG sono state
rimosse** (erano la causa del feedback "sembra fatto da un bambino").

Sezioni presenti (in ordine): **Intro** (foto facciata a tutto schermo + "Entra", dissolvenza) →
**Header** sticky → **Hero** → **Facts** (1962 / 242 / 20+ / 24h, contatori animati) →
**Storia** → **Reparti** (indice editoriale numerato, 20 voci) → **Struttura** →
**Riabilitazione** (sezione scura, lista numerata 8 voci) → **Sedi** → **CTA/Contatti** → **Footer**.
JS (`app.js`): logica intro (clic "Entra"/sfondo, `sessionStorage` per non ripeterla), header allo
scroll, menu mobile, scroll-reveal, contatori, anno footer. Accessibile (`prefers-reduced-motion`).

### Slot foto (già cablati)
I `<figure class="shot">` usano `<img src="img/NOME.jpg" onerror="this.style.display='none'">`:
quando il file manca si vede un elegante riquadro scuro con etichetta; quando c'è, appare la foto.
Nomi attesi: `img/facciata.jpg` (intro + hero), `img/storia.jpg`, `img/struttura.jpg`,
`img/riabilitazione.jpg`. Vedi `img/LEGGIMI.txt`.

## 4. ⛔ Vincolo critico dell'ambiente
La rete di esecuzione ha una **allowlist**: raggiungibili **github.com** e
**raw.githubusercontent.com**; **bloccati** `villadeifiori.it`, **Google Drive**, host immagini,
`web.archive.org`. Conseguenze:
- **Non si possono scaricare le foto** dal vecchio sito né da Drive.
- **Le immagini incollate in chat NON sono salvabili come file** (si vedono ma non si persistono).
- **Unica via per le foto reali:** il cliente le carica nel **repo GitHub** (cartella
  `sito-premium/img/`) → poi `git pull` e si usano. (Tentato upload una volta: NON era andato a
  buon fine — verificare sempre con `git pull` + `ls img/`.)

## 5. Foto reali (già VISTE in chat, da incorporare quando arrivano i file)
Il cliente ha mostrato (screenshot) la galleria reale: 
- **Palazzo Liberty giallo** con torre centrale, orologio, stemma, persiane verdi e **fontana** nel
  cortile a raggiera → è la facciata principale (intro + hero).
- Facciata frontale simmetrica (altra inquadratura).
- **Camere** di degenza (letti, pareti pastello giallo/verde), **cucina** comune, **lavanderia/
  sartoria**, **giardino con ulivi**, e un **edificio "Ambulatorio" moderno** in travertino.
Da usare per: facciata→hero/intro; camere/cucina/giardino/ambulatorio→**nuova GALLERIA** + Struttura.

## 6. PROSSIMI PASSI (cosa fare appena ci sono le foto in `img/`)
1. `git pull` e `ls villa-dei-fiori-website/sito-premium/img/`; **aprire/guardare ogni immagine**.
2. Rinominare e assegnare: facciata gialla+fontana → `facciata.jpg`; ecc.
3. **Creare una sezione "Galleria"** elegante (griglia + lightbox) con le foto extra; aggiungere la
   voce "Galleria" nel menu di navigazione.
4. Sistemare inquadrature/`object-position`, verificare responsive.
5. Commit + push sul branch `claude/villa-dei-fiori-redesign-l3GxX`.

## 7. Dati reali (verificati via ricerca; due valori DA CONFERMARE col cliente)
- **Casa di Cura — Acerra:** Corso Italia, 157 — 80011 Acerra (NA) · tel **081 3190111** /
  081 8857624 · **info@villadeifiori.it**
- **Presidio Riabilitazione — Nocera Inferiore (SA):** Via Poggio San Pantaleone — 84014 ·
  tel **081 5178787** · fax 081 925755 · **ambulatorio@villadeifiori.it**
- Facebook: `villadeifioripresidioospedaliero`
- ⚠️ **Da confermare:** numero civico (fonti danno 157 vs 1) e **P.IVA** (ora `[DA CONFERMARE]`).
- **Reparti (20):** Chirurgia Generale, Plastica, Vascolare, Cardiochirurgia, Cardiologia/UTIC,
  Medicina Generale, Ortopedia e Traumatologia, Urologia, Oculistica, ORL, Angiologia, Ostetricia
  e Ginecologia, Neonatologia/TIN, Rianimazione, Pronto Soccorso, P.S. Ostetrico, Endoscopia,
  Diagnostica per Immagini, Laboratorio Analisi, Riabilitazione.
- **Riabilitazione:** ossigeno-terapia iperbarica, cardio-respiratoria, neurologica (neuromotorio),
  ortopedica, uro-ginecologica, fisioterapia, terapia occupazionale, logopedia, psicomotricità,
  musicoterapia, psicoterapia.

## 8. Possibili migliorie future (non richieste esplicitamente, da proporre)
- Modulo prenotazioni funzionante (Formspree/Web3Forms).
- Mappa Google delle sedi.
- Pagina/sezione "Lavora con noi", Carta dei Servizi, privacy/cookie reali.
- Pubblicazione stabile via GitHub Pages.

## 9. Note di stile / preferenze del cliente
- Diretto e pragmatico, scrive in italiano. Ha rifiutato 2 iterazioni perché "basiche/da template".
  Vuole davvero qualcosa di **premium, professionale, su misura**. Evitare illustrazioni
  amatoriali; puntare su foto reali + tipografia + spazi. Mantenere il concept dell'**ingresso
  cinematografico**.
- Convenzione commit messaggi: chiudere con la riga sessione di Claude Code.

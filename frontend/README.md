# 🍷 Vinoteca — Milestone del Progetto

**Tematica**: catalogo di vini italiani (Rosso, Bianco, Rosato, Spumante)
**Obiettivo**: SPA di sola consultazione (no login, no CRUD) — sfogliare, cercare, filtrare, confrontare, salvare preferiti

**Stato**: ✅ Completato

---

## Milestone 1 — Setup del progetto

- [x] Crea progetto con `npm create vite@latest .` (React, JavaScript)
- [x] Installa `react-router-dom`
- [x] Struttura cartelle: `components/`, `pages/`, `context/`, `hooks/`, `utils/`
- [x] Configura le route base con `react-router-dom`:
  - `/` — lista vini
  - `/vino/:id` — dettaglio
  - `/confronto` — comparatore
  - `/preferiti` — preferiti
- [x] Crea `GlobalContext.jsx` con `createContext` + `Provider`
- [x] Crea `useWines.js` (custom hook) con:
  - stato `wines` (lista vini dal server)
  - funzione `fetchWines()` che chiama `GET /wines`
- [x] Verifica che l'app si avvii e che il fetch della lista funzioni

**Riferimento**: stessa struttura Context + custom hook usata nel Task Manager

---

## Milestone 2 — Lista vini

- [x] Componente `WineList.jsx` — mostra `title` + `category` per ogni vino (da `GET /wines`)
- [x] Componente `WineCard.jsx` (riutilizzabile, riceve `wine` come prop) — mostra singola card
- [x] **Ricerca**: input di testo controllato → filtra per `title` (filtro lato client con `useMemo`)
- [x] **Filtro categoria**: select con le 4 categorie
- [x] **Ordinamento**: A-Z / Z-A per `title` o `category` (ordine custom, non alfabetico), con `useMemo`
- [x] Ogni card è cliccabile (`Link`) verso `/vino/:id`
- [x] Extra: banner hero illustrato in cima alla pagina, con overlay per garantire leggibilità del testo
- [x] Extra: gestione errore di connessione al backend, distinta dal messaggio "nessun risultato" del filtro

**Riferimento**: stesso pattern di `TaskList.jsx` (ricerca + ordinamento + `useMemo`)

---

## Milestone 3 — Pagina di dettaglio

- [x] Componente `WineDetail.jsx`, route `/vino/:id`
- [x] `useParams()` per leggere l'`id` dall'URL
- [x] Fetch di `GET /wines/:id` (tutte le proprietà: regione, annata, vitigno, gradazione, prezzo, produttore, descrizione, abbinamento)
- [x] Visualizzazione estesa e leggibile di tutte le proprietà
- [x] Gestione caso "vino non trovato" (id non valido → messaggio dedicato + link alla lista)

**Riferimento**: stesso pattern di `TaskDetail.jsx` (`useParams` + fetch singolo record)

---

## Milestone 4 — Sistema preferiti

- [x] Stato globale `preferiti` (array di id) nel `GlobalContext`
- [x] Funzione `toggleFavorite(id)` — aggiunge/rimuove dallo stato
- [x] Icona ❤️ su `WineCard` (lista) e su `WineDetail` — toggle al click
- [x] L'icona riflette visivamente se il vino è già nei preferiti (cuore pieno/vuoto)
- [x] Pagina `Favorites.jsx`, route `/preferiti` — mostra solo i vini preferiti
- [x] Icona/contatore preferiti sempre visibile in una navbar fissa

**Facoltativo (dopo i minimi)**: persistenza in `localStorage` — non implementata, possibile estensione futura

---

## Milestone 5 — Comparatore

- [x] Stato globale `confronto` (max 2 id) nel `GlobalContext`
- [x] Bottone "Confronta" su `WineCard` e `WineDetail`
  - Se già 2 vini selezionati, avvisa l'utente con un alert
- [x] Pagina `Compare.jsx`, route `/confronto`
- [x] Fetch dei vini selezionati in parallelo con `Promise.all` (`GET /wines/:id` per ciascuno)
- [x] Visualizzazione affiancata (grid a 2 colonne) con tutte le proprietà a confronto
- [x] Gestione caso "nessun vino selezionato" o "solo 1 selezionato" (messaggi dedicati)
- [x] Componentizzazione: card di confronto estratta in `CompareCard.jsx`

**Riferimento**: stesso concetto di stato condiviso dei preferiti, ma limitato a 2 elementi

---

## Rifiniture aggiuntive (oltre le milestone richieste)

- [x] Helper `utils/colors.js` — funzione `getCategoryColor()` per eliminare la duplicazione del blocco if/else colore-categoria, ripetuto in `WineCard.jsx`, `WineDetail.jsx` e `Compare.jsx`
- [x] Banner hero nella home con immagine e overlay leggibile a ogni larghezza schermo
- [x] Gestione robusta degli errori di rete: messaggi distinti per "vino non trovato" e "server non raggiungibile"
- [x] Repository unificata (backend + frontend in un'unica repo, con README di setup)

---

## Note generali

- Nessun CRUD lato frontend: i dati si popolano solo nel file `database/wine.json` (già fatto)
- Riusati pattern noti (Context, custom hook, `useMemo`, `Link`, `useParams`, `Promise.all`) in modo coerente in tutto il progetto
- Le milestone sono state completate in ordine, ognuna basandosi sulla precedente
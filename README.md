# 🍷 Vinoteca

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Vinoteca è una web app SPA per la consultazione di un catalogo di vini italiani. Permette di sfogliare, cercare e ordinare le etichette disponibili, salvare i propri vini preferiti e confrontare fino a due vini fianco a fianco per confrontarne le caratteristiche (annata, gradazione, prezzo, vitigno, abbinamenti).

Progetto realizzato come esame finale della specializzazione Front-End del corso Boolean.

## Indice

- [Stack tecnologico](#stack-tecnologico)
- [Struttura del progetto](#struttura-del-progetto)
- [Setup](#setup)
  - [1. Backend](#1-backend)
  - [2. Frontend](#2-frontend)
- [Funzionalità](#funzionalità)

## Stack tecnologico

**Frontend**
- React
- React Router (routing SPA)
- Vite (build tool e dev server)
- Bootstrap 5 + Bootstrap Icons (layout e icone)
- CSS custom con variabili (design system "etichetta da vino")

**Backend**
- Node.js
- Express
- TypeScript (definizione del tipo `Wine` e generazione automatica dello schema)
- Zod (validazione)
- CORS, Morgan
- Persistenza dati su file JSON (nessun database esterno richiesto)

## Struttura del progetto

```
vinoteca/
├── backend/     # API REST che espone i dati dei vini
└── frontend/    # Applicazione React (SPA)
```

## Setup

Il progetto è organizzato in un'unica repository con due sottocartelle indipendenti (`backend/` e `frontend/`). Dopo aver clonato la repo, serve avviare **entrambe** le cartelle in due terminali separati: il backend deve essere attivo prima di aprire il frontend, perché il frontend recupera i dati tramite fetch dall'API.

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

Il server si avvia di default su **http://localhost:3001**.

Al primo avvio, lo script `dev` genera automaticamente la cartella `/database` (basandosi sul tipo `Wine` definito in `types.ts`) e il relativo file `wine.json`, dove sono salvati i dati del catalogo.

### 2. Frontend

In un secondo terminale:

```bash
cd frontend
npm install
```

Crea un file `.env` nella cartella `frontend` con il seguente contenuto:

```
VITE_API_URL=http://localhost:3001
```

Poi avvia il progetto:

```bash
npm run dev
```

L'app sarà disponibile all'indirizzo mostrato in console (di default **http://localhost:5173**).

## Funzionalità

- 🖼️ **Home con banner** — hero illustrato in cima alla lista, con testo sempre leggibile grazie a un overlay sfumato
- 📜 **Catalogo vini** — lista di tutte le etichette disponibili, con card in stile "etichetta da vino"
- 🔍 **Ricerca e filtro** — ricerca per nome ed filtro per categoria (Rosso, Bianco, Rosato, Spumante)
- ↕️ **Ordinamento** — per nome (A-Z) o per categoria
- 🍾 **Dettaglio vino** — pagina dedicata con tutte le informazioni (regione, annata, gradazione, prezzo, vitigno, descrizione, produttore, abbinamenti)
- ❤️ **Preferiti** — aggiunta/rimozione rapida, contatore sempre visibile in navbar, e pagina dedicata con l'elenco salvato
- ⚖️ **Confronto** — selezione di massimo 2 vini da confrontare fianco a fianco
- ⚠️ **Gestione errori** — messaggi dedicati per vino non trovato (id inesistente) e per mancata connessione al server, distinti dal normale "nessun risultato" della ricerca

---

Progetto didattico — Boolean 2026
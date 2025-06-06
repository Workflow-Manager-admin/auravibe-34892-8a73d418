# My AuraGram Backend

This is the Node.js/Express/MongoDB backend for My AuraGram.

## Features

- REST API for posts, users, authentication, messaging, etc.
- MongoDB (with Mongoose) database
- Ready for JWT or Session authentication and integration with cloud storage
- Will connect to shared `common/` utilities

## Getting Started

```sh
cd backend
npm install
npm start
```

## Structure

- `server.js` — Entry point for the Express app
- `routes/` — Express route files
- `controllers/` — Business logic
- `models/` — Mongoose models/schemas
- `config/` — Configuration, env
- `middleware/` — Express middleware

## Environment Variables

Copy `.env.example` to `.env` and update as necessary:

```sh
cp .env.example .env
```

---

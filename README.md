# Shivani Mahadik — MERN Portfolio

A dark, editorial-style portfolio inspired by the supplied screenshots.

## Stack
- React + Vite
- Express.js
- MongoDB/Mongoose for contact messages
- Plain CSS with responsive layout

## Run locally

### 1. Client
```bash
cd client
npm install
npm run dev
```

### 2. Server
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

The client runs on `http://localhost:5173` and the API on `http://localhost:5000`.

If MongoDB is not configured, the contact API still works in demo mode and logs messages to the server console.

# Pick-Pickle Backend API

A scalable e-commerce backend for a pickle marketplace built using Node.js, Express.js, TypeScript, Prisma ORM, and PostgreSQL.

## Features

* JWT-based Authentication
* Role-Based Access Control (Buyer, Seller, Admin)
* Buyer & Seller Profiles
* Product Management
* Wishlist Management
* Order Management
* Address Management
* Earnings Tracking for Sellers
* Prisma ORM Integration
* PostgreSQL Database
* TypeScript Support
* Modular Architecture

## Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* PostgreSQL
* Prisma ORM

### Authentication

* JWT (JSON Web Tokens)
* bcrypt

### Validation

* Zod

### Deployment

* Vercel
* Neon PostgreSQL

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/LaxmanBommidi/pick-pickle.git
cd backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=

PORT=5000
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Database Migrations

```bash
npx prisma migrate dev
```

### Start Development Server

```bash
npm run dev
```

Server will run at:

```bash
http://localhost:5000
```
---

## Author

Laxman Bommidi

* GitHub: https://github.com/LaxmanBommidi
* LinkedIn: https://linkedin.com/in/laxman-bommidi

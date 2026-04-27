# Ecommerce

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash# E-Commerce Frontend

An Angular 21 single-page application for an e-commerce platform with authentication, product browsing, and cart functionality.

---

## Tech Stack

- **Framework:** Angular v21
- **Language:** TypeScript 5.9
- **Styling:** SCSS
- **HTTP:** Angular HttpClient
- **Auth:** JWT (via `jwt-decode`)
- **SSR:** Angular Universal (`@angular/ssr`)
- **Testing:** Vitest, jsdom
- **Formatter:** Prettier

---

## Project Structure

```
e-commerce-frontend/
├── src/
│   ├── app/
│   │   ├── app.ts              # Root component
│   │   ├── app.html
│   │   ├── app.routes.ts       # Route definitions
│   │   ├── app.config.ts       # App configuration
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── auth-guard.ts      # Protect authenticated routes
│   │   │   │   └── admin-guard.ts     # Protect admin routes
│   │   │   ├── interceptors/
│   │   │   │   └── auth-interceptor.ts  # Attaches JWT to requests
│   │   │   └── services/
│   │   │       └── auth.ts            # Login, register, logout
│   │   ├── features/
│   │   │   ├── admin/
│   │   │   ├── auth/
│   │   │   ├── cart/
│   │   │   └── products/
│   │   └── shared/
│   │       └── components/
│   │           ├── landing/           # Home/landing page
│   │           └── auth/
│   │               └── register/      # Registration form
│   ├── environments/
│   │   └── environment.ts     # API base URL config
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── tsconfig.json
├── package.json
└── .prettierrc
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [Angular CLI](https://angular.io/cli) v21
- npm v10 or higher

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone <your-frontend-repo-url>
cd e-commerce-frontend
```

### 2. Install Angular CLI globally (if not already installed)

```bash
npm install -g @angular/cli@21
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API URL

Open `src/environments/environment.ts` and set the backend URL:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'   // Change if backend runs on a different port
};
```

For production builds, update `src/environments/environment.prod.ts` with your deployed backend URL.

### 5. Start the development server

```bash
npm start
# or
ng serve
```

The app will be available at `http://localhost:4200`.

---

## Available Scripts

| Command          | Description                              |
|------------------|------------------------------------------|
| `npm start`      | Start dev server at localhost:4200       |
| `npm run build`  | Build for production (outputs to `dist/`)|
| `npm run watch`  | Build in watch mode for development      |
| `npm test`       | Run unit tests via Vitest                |

---

## Routes

| Path        | Component  | Guard      | Description        |
|-------------|------------|------------|--------------------|
| `/`         | Landing    | None       | Home/landing page  |
| `/register` | Register   | None       | User registration  |

---

## Authentication Flow

1. User registers via `/register` → POST `/api/auth/register`
2. User logs in → POST `/api/auth/login` → JWT token stored in `localStorage`
3. `AuthInterceptor` automatically attaches the token to all outgoing HTTP requests
4. `AuthGuard` protects routes that require login
5. `AdminGuard` protects routes that require admin role
6. Logout clears the token from `localStorage`

---

## Building for Production

```bash
npm run build
```

Output is generated in `dist/ecommerce/browser/`. You can serve this with any static file host (Netlify, Vercel, Nginx, etc.).

For SSR (Server-Side Rendering):

```bash
npm run build
node dist/ecommerce/server/server.mjs
```

---

## Connecting to Backend

Make sure the backend server is running before starting the frontend. By default:

- **Backend:** `http://localhost:5000`
- **Frontend:** `http://localhost:4200`

CORS is enabled on the backend, so both can run simultaneously on localhost during development.

---

## Troubleshooting

**`ng: command not found`**
```bash
npm install -g @angular/cli@21
```

**Port 4200 already in use**
```bash
ng serve --port 4201
```

**API calls failing / CORS errors**
- Confirm the backend is running on port 5000
- Check `src/environments/environment.ts` has the correct `apiUrl`
- Ensure the backend has CORS enabled (it does by default)

**Build errors after `npm install`**
```bash
npm install --legacy-peer-deps
```
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

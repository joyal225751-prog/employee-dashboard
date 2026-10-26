# Employee Dashboard

A responsive Employee Dashboard built with **React**, **Vite**, **React Router**, and **Bootstrap**.

## Features

- **Responsive Navbar** with Home and Employee Form links (mobile-friendly with a collapsible menu).
- **Home page** (`/`) fetches users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) using the Fetch API and displays them in a Bootstrap table with **ID**, **Name**, and **Email** columns.
- **Loading spinner** while data is being fetched and an **error message** if the request fails.
- **Employee Form** (`/employee-form`) with four fields: Name, Designation, Location, and Salary.
- **Client-side validation** for all required fields (Salary must be a valid positive number).
- The form is **frontend-only** — no backend, no database, and no POST requests are made.
- Clean, reusable, beginner-friendly React components.

## Tech Stack

- React 18
- Vite 7
- React Router DOM 6
- Bootstrap 5
- TypeScript

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Responsive top navigation bar
│   └── EmployeeTable.tsx   # Reusable Bootstrap table for employee data
├── pages/
│   ├── Home.tsx            # Fetches and displays employees from the API
│   └── EmployeeForm.tsx    # Validated employee entry form
├── App.tsx                 # Routes setup
├── main.tsx                # App entry point (Router + Bootstrap CSS)
├── index.css               # Tailwind base styles
└── vite-env.d.ts
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the URL shown in your terminal (typically http://localhost:5173).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Routes

| Path             | Page           | Description                                      |
| ---------------- | -------------- | ------------------------------------------------ |
| `/`              | Home           | Fetches and displays employees in a table.       |
| `/employee-form` | Employee Form  | Add a new employee via a validated form.         |

## Notes

- The employee data on the Home page comes from JSONPlaceholder, a free fake API for testing.
- The Employee Form does **not** submit data anywhere. It only validates input and shows a success message — this is intentional, as the app is frontend-only.

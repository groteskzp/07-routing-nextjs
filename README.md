# Homework 07: Routing in Next.js

GoIT homework that builds **NoteHub** on the Next.js App Router. The focus is routing: nested layouts, a catch-all filter route, a parallel sidebar slot, an intercepting note preview, and a full note details page. Notes are stored through the public NoteHub API.

## Live demo

[https://07-routing-nextjs-alpha-kohl.vercel.app](https://07-routing-nextjs-alpha-kohl.vercel.app)

## Features

- Home page with a short NoteHub intro and a shared header/footer (`Home`, `Notes`)
- Notes list from the NoteHub public API (`GET /notes`), with 12 notes per page
- Tag filter sidebar (parallel route): All notes, Todo, Work, Personal, Meeting, Shopping
- Catch-all filter route `/notes/filter/[...slug]`; unknown tags call `notFound()`
- Debounced keyword search (300 ms) that resets pagination to page 1
- Pagination when the API reports more than one page (`react-paginate`)
- Create a note in a modal (Formik + Yup: title 3–50 characters, content up to 500, required tag)
- Delete a note from the list
- Note details page `/notes/[id]` (title, tag, content, created date)
- Intercepting route: “View details” from the list opens a preview modal; Close or back returns to the list; a direct visit still loads the full page
- Server prefetch of notes and note details with TanStack Query `HydrationBoundary`
- Route-level loading and error UI, plus a custom 404 page
- Modal closes on Escape or backdrop click and locks body scroll while open

## Tech stack

- Next.js 16 (App Router, React Compiler)
- React 19
- TypeScript
- TanStack Query
- Axios
- Formik and Yup
- react-paginate
- use-debounce
- CSS Modules
- ESLint (`eslint-config-next`)

## Getting started

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/groteskzp/07-routing-nextjs.git
cd 07-routing-nextjs
npm install
```

2. Create a `.env.local` file in the project root with a NoteHub token (required by `lib/api.ts`):

```bash
NEXT_PUBLIC_NOTEHUB_TOKEN=your_token_here
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in the browser.

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Start the Next.js development server |
| `build` | `npm run build` | Create a production build |
| `start` | `npm start` | Serve the production build |
| `lint` | `npm run lint` | Run ESLint |

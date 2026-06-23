# Node.js Server Starter

This project includes two server implementations:

- `server.js` — a simple Node.js HTTP server using the built-in `http` module
- `app.js` — a new Express.js-based server for learning Express routing and response handling

The current project work is centered on `app.js`, but `server.js` remains available for reference.

## Features

- Uses Express.js in `app.js` to serve HTML pages
- Still keeps `server.js` as a working Node.js HTTP server example
- Serves a homepage and an about page via Express routes
- Supports development mode with `nodemon`

## Project Structure

- `server.js` - legacy/basic Node.js `http` server example
- `app.js` - current Express.js server entry point
- `package.json` - project metadata and scripts
- `views/` - HTML files served by the server
  - `index.html` - homepage
  - `about.html` - about page
  - `404.html` - fallback page for unknown routes

## Routes

### `app.js` (current Express.js server)

- `/` → serves `views/index.html`
- `/about` → serves `views/about.html`

### `server.js` (legacy Node.js `http` server)

- `/` → serves `views/index.html`
- `/about` → serves `views/about.html`
- `/about-me` → redirects to `/about`
- any other path → serves `views/404.html` with a `404` status code

## Requirements

- Node.js installed

## Installation

1. Open a terminal in the project folder
2. Run `npm install`

## Running

- Start normally:
  ```bash
  npm start
  ```

- Start in development mode with automatic reloads:
  ```bash
  npm run dev
  ```

- Open `http://localhost:3000` in your browser

## Notes

This is a learning project focused on Node.js server basics rather than a full Express.js application.

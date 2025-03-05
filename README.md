# Hungaroton Project

A small project using Next.js 15, TypeScript, Axios, and Cypress. The application features a list of artists where you can filter and paginate through the results.

## Project Overview

This project showcases a list of artists with functionality to:

- Filter artists by name, type, and letter.
- Paginate through the artist list.
- Display messages for no results or errors.

## Live Demo

The project is deployed on Vercel and can be accessed here:
[Hungaroton Project on Vercel](https://hungaroton-project.vercel.app)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/SziNo/hungaroton-project.git
cd hungaroton-project
npm install
# or
yarn install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to view it in the browser.

### Running Cypress Tests

The project uses Cypress for end-to-end testing. To run the tests:

```bash
npx cypress open
# or
yarn cypress open
```

To run tests in headless mode:

```bash
npx cypress run
# or
yarn cypress run
```

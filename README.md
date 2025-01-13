# AirBnB Clone - State Management with TypeScript and Next.js

## Overview

State management is a crucial aspect of building scalable and maintainable applications. This repository demonstrates how to manage state effectively using **Redux** and **Context API** in a **TypeScript**-based **Next.js** project.

This example is part of an AirBnB clone project. We cover:

- Setting up Redux in a Next.js application
- Managing state with strong type safety
- Best practices for scalable state management

---

## Features

- **TypeScript**: Full type safety for robust development.
- **Next.js**: Server-rendered React framework for optimized performance.
- **Redux Toolkit**: Simplified state management.
- **Context API**: Alternative state management strategy for smaller or simpler needs.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js v14+ and npm or yarn
- A basic understanding of TypeScript and Next.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/miftaha/airbnb-clone-state-management-ts.git
   cd airbnb-clone-state-management-ts
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

src/
├── pages/
│ ├── \_app.tsx # Wraps the app with Redux Provider
│ ├── index.tsx # Main page
│ └── userProfile.tsx # Example component using Redux
├── store/
│ ├── index.ts # Redux store setup
│ ├── rootReducer.ts # Root reducer combining slices
│ └── slices/
│ └── userSlice.ts # User slice for state management

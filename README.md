# 🎬 MovieDB App (WORK IN PROGRESS)

A sleek and modern web application for searching movies and browsing top-rated films and series. Built with React, Vite, and Tailwind CSS, this app provides a fast and visually appealing user experience for movie enthusiasts.

 <!-- It's recommended to replace this with an actual screenshot of your app -->

## ✨ Features

-   **Movie Search**: Instantly search for any movie using the OMDb API.
-   **Top Movies**: Browse a curated list of top-rated movies and TV shows.
-   **Detailed View**: Click on any movie to see a detailed modal with its plot, genre, year, and poster.
-   **IMDb Ratings**: Both search results and top movies display IMDb ratings for a quick quality check.
-   **Responsive Design**: A fully responsive interface that looks great on all devices.
-   **Modern UI**: Styled with Tailwind CSS for a clean, dark-themed aesthetic.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: Custom components inspired by [shadcn/ui](https://ui.shadcn.com/).
-   **API**: [OMDb API](https://www.omdbapi.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (v18 or newer)
-   npm or a compatible package manager
-   An API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/PiotrPerczak/moviedb.git
    cd moviedb
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up your API Key:**
    The project uses an API key to fetch data. Open [`src/App.tsx`](src/App.tsx) and replace the placeholder key with your own.
    ````typescript
    // filepath: src/App.tsx
    // ...existing code...
    const API_KEY = "your_api_key_here";
    // ...existing code...
    ````

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## 📜 Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the source code using ESLint.
-   `npm run preview`: Serves the built app for previewing the production version locally.


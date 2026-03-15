# 🍿 usePopcorn — Movie Search & Watchlist App

usePopcorn is a modern **React-based movie search and watchlist application** powered by the OMDB API. Users can search for movies, view detailed information, rate movies using a custom star rating component, and maintain a persistent watched list using localStorage.

## 🚀 Live Demo

👉 **Netlify Deployment:** https://ahish-use-popcorn.netlify.app/
👉 **GitHub Repository:** https://github.com/T-Ahish/usepopcorn

## 🎯 Features

- Search movies using the OMDB API
- Display real-time search results with loading & error states
- View detailed movie information (ratings, plot, cast, runtime)
- Custom reusable star rating component
- Add movies to a personal watched list
- Persist watched movies using localStorage
- Remove movies from the watched list
- Keyboard shortcuts (Enter to focus search, Esc to close details)
- clean UI

## 🧠 What I Learned

This project significantly strengthened my understanding of advanced React patterns, including:

- Building and using **custom hooks** (`useMovies`, `useLocalStorageState`, `useKey`)
- Handling asynchronous data fetching with `useEffect`
- Managing loading, error, and success states
- Using `AbortController` to cancel in-flight requests
- Persisting state with localStorage
- Using `useRef` for DOM interactions
- Implementing keyboard event handling
- Component reusability and separation of concerns
- Writing clean, scalable frontend logic

## 🛠️ Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- HTML5
- CSS3
- OMDB API

## 📁 Project Structure

```
src/
  components/
    Box.js
    ErrorMessage.js
    Loader.js
    Logo.js
    Main.js
    Movie.js
    MovieDetails.js
    MoviesList.js
    NavBar.js
    NumberOfResults.js
    Rating.js
    SearchBar.js
    WatchedMovie.js
    WatchedMoviesList.js
    WatchedMoviesSummary.js
  hooks/
    useKey.js
    useLocalStorage.js
    useMovies.js
  utils/
    average.js
  App.js
  index.js
  index.css
public/
  index.html
  manifest.json
  robots.txt
```

## ▶️ Getting Started

Clone the repository:

```bash
git clone https://github.com/T-Ahish/usepopcorn.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

## 📸 Screenshots

```
./screenshots/usepopcorn-1.png
./screenshots/usepopcorn-2.png
./screenshots/usepopcorn-3.png
```

## ✅ Possible Improvements

- Add pagination or infinite scrolling
- Enhance accessibility (ARIA roles, focus management)
- Add genre-based filtering
- Add user authentication
- Migrate state management to Context API or `useReducer`

## 📜 License

This project is licensed under the **MIT License**.

## ⭐ Author

**Ahish T**  
Frontend Engineer | React | Next.js | TypeScript  
GitHub: https://github.com/T-Ahish  
LinkedIn: https://www.linkedin.com/in/ahish-t

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss improvements.

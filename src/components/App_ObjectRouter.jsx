import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

// Convert an array of objects into a <Routes> componenet containing <Route> components
const someFancyRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={someFancyRouter} />
    </div>
  );
}

export default App;

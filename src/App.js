import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>

  );
}

export default App;

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
import Lsp from './pages/lsp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lsp />} />
    </Routes>

  );
}

export default App;

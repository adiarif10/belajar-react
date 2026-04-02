import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Users } from "./pages/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {""}
          <Link to="/about">About</Link> | {""}
          <Link to="/users">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

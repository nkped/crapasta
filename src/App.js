import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Testing</h1>

      <Link to="/blog">Blog</Link>
      <Outlet />
    </div>
  );
}

export default App;

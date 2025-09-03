import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import RegisterLayout from "./layouts/RegisterLayout";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="latest" element={<Home />} />
        <Route path="tv-shows" element={<Home />} />
        <Route path="movies" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route element={<RegisterLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import Terms from "./pages/Terms";

const App = () => {
  const mode = useSelector((state: { mode: PaletteMode }) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  // const isAuth = Boolean(useSelector((state: any) => state.token));
  const isAuth = true;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isAuth && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/home" /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={isAuth ? <Navigate to="/home" /> : <Signup />}
          />
          <Route
            path="/home"
            element={isAuth ? <HomePage /> : <Navigate to="/" />}
          />
          <Route
            path="/product/:id"
            element={isAuth ? <SingleProduct /> : <Navigate to="/" />}
          />
          <Route
            path="/cart"
            element={isAuth ? <Cart /> : <Navigate to="/" />}
          />
          <Route
            path="/privacy"
            element={isAuth ? <Privacy /> : <Navigate to="/" />}
          />
          <Route
            path="/legal"
            element={isAuth ? <Legal /> : <Navigate to="/" />}
          />
          <Route
            path="/terms"
            element={isAuth ? <Terms /> : <Navigate to="/" />}
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
        {isAuth && <Footer />}
      </ThemeProvider>
    </Router>
  );
};

export default App;

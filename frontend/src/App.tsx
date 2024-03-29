import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  CssBaseline,
  IconButton,
  PaletteMode,
  Snackbar,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { useDispatch, useSelector } from "react-redux";
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
import { setSnackBarMsg } from "./redux/state";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const mode = useSelector((state: { mode: PaletteMode }) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state: any) => state.token));
  const msg = useSelector((state: any) => state.snackBarMsg);
  // const isAuth = false;
  const dispatch = useDispatch();
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => dispatch(setSnackBarMsg(""))}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
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
        {/* Snackbar */}
        <Snackbar
          open={msg}
          autoHideDuration={2000}
          onClose={() => dispatch(setSnackBarMsg(""))}
          message={msg}
          action={action}
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;

import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import amazon from "../../assets/images/amazon-logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { MouseEvent, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import DiamondIcon from "@mui/icons-material/Diamond";
import LoadingButton from "@mui/lab/LoadingButton";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const empty = email === "" || password === "";

  const handleSubmit = async () => {
    if (empty) {
      return alert("Enter all fields");
    }
    try {
      setLoading(true);
      console.log("email", email);
      console.log("password", password);

      setLoading(false);
    } catch (error) {}
  };

  return (
    <Box
      width={"100dvw"}
      height={"100dvh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"1000px"}
        height={"500px"}
        border={"1px solid #ddd"}
        borderRadius={"20px"}
        display={"flex"}
      >
        <Stack width={"50%"} paddingLeft={5} paddingTop={5}>
          <Box display={"flex"}>
            <img
              src={amazon}
              width={"150px"}
              height={"60px"}
              style={{ marginBottom: "30px", marginLeft: "10px" }}
            />
            <Typography
              variant="h2"
              marginLeft={10}
              fontWeight={"700"}
              color={"primary"}
              sx={{
                textDecoration: "underline",
              }}
            >
              Login
            </Typography>
          </Box>
          <Stack gap={2} paddingX={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="start"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ ml: 1.5 }} />
                      ) : (
                        <Visibility sx={{ ml: 1.5 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <LoadingButton
              loading={loading}
              loadingPosition="center"
              variant="contained"
              sx={{
                height: "50px",
              }}
              onClick={handleSubmit}
            >
              Login
            </LoadingButton>

            <Box mt={2}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  Signup
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack
          bgcolor={"#222"}
          width={"50%"}
          paddingLeft={5}
          paddingTop={5}
          alignItems={"center"}
          sx={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <Box display={"flex"}>
            <DiamondIcon
              color="warning"
              sx={{
                fontSize: "2.5rem",
              }}
            />
            <Typography variant="h1" color={"GrayText"}>
              Unpack!{" "}
            </Typography>
          </Box>
          <Typography variant="h1" color={"GrayText"}>
            Happiness{" "}
          </Typography>
          <Box marginTop={2}>
            <StorefrontIcon
              sx={{
                fontSize: "10rem",
                color: "whitesmoke",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;

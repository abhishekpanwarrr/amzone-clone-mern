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
import Face5Icon from "@mui/icons-material/Face5";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const empty = email === "" || password === "" || fullName === "";
  const handleSubmit = async () => {
    if (empty) {
      return alert("Enter all fields");
    }
    if (password.length < 8) {
      setError("Password must me atleast 8 characters long");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://amzone-clone-backend.vercel.app/api/v1/auth/register",
        { fullName, email, password }
      );
      console.log("🚀 ~ handleSubmit ~ response:", data);
      if (data.status === 201) {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
              Signup
            </Typography>
          </Box>
          <Stack gap={2} paddingX={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-full-name">
                Full Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-full-name"
                type={"text"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <Face5Icon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Full Name"
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type={"email"}
                value={email}
                defaultChecked={true}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (password.length > 8) {
                    setError("");
                  }
                }}
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

            <Typography variant="body2" color={"crimson"}>
              {error ? (
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <ErrorIcon />
                  {error}
                </Box>
              ) : null}
            </Typography>
            <LoadingButton
              loading={loading}
              loadingPosition="center"
              variant="contained"
              onClick={handleSubmit}
            >
              Sign up
            </LoadingButton>

            <Box mt={2}>
              <Typography variant="body2">
                Already a member?{" "}
                <Link
                  to={"/"}
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  Login
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
            <CardMembershipIcon
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

export default Signup;

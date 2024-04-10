import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setProfie, setSnackBarMsg } from "./redux/state";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BACKEND_URL } from "./utils/util";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalComponent({ open }: any) {
  const user = useSelector((state: any) => state.user);

  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [fullName, setFullName] = useState(user?.fullName);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setProfie());
  const profile = useSelector((state: any) => state.profile);
  const location = useLocation();

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/update/${user?._id}`,
        { email, phone, fullName }
      );
      console.log("response", response);
      if (response.status === 200) {
        dispatch(
          setLogin({
            user: response.data.updatedUser,
            token: "",
          })
        );
        dispatch(setSnackBarMsg("Profile updated successfully"));
      } else {
        dispatch(setSnackBarMsg("Error updating profile."));
      }
    } catch (error: any) {
      console.log("Error in update profile", error);
      dispatch(setSnackBarMsg(error.message));
    }
  };
  useEffect(() => {
    if (profile) {
      dispatch(setProfie());
    }
  }, [location.pathname]);
  return (
    <BootstrapDialog
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Typography variant="h4">Profile</Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ mb: 3 }}>
        <Box display={"flex"} gap={4}>
          <Stack
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar
              alt="Abhishek Panwar"
              src={user?.picturePath}
              sx={{ width: 110, height: 110 }}
            />
            <Button>Change</Button>
          </Stack>
          <Stack flex={2} gap={1}>
            <TextField
              autoFocus
              required
              margin="dense"
              label="Full Name"
              type="email"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
            />
            <TextField
              required
              margin="dense"
              label={"Email"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              required
              margin="dense"
              label={"Phone number"}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
            />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" type="submit" onClick={handleUpdate}>
          Save
        </Button>
        <Box></Box>
      </DialogActions>
      <DialogActions></DialogActions>
    </BootstrapDialog>
  );
}

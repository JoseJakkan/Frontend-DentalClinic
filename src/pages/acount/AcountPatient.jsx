import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// @MUI
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//
import userService from "../../_services/userService";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";

// ----------------------------------------------------------------------

const defaultTheme = createTheme();

const initialFormValues = {
  user_first_name: "",
  user_last_name: "",
  email: "",
  birthday: "",
  phone_number: "",
  // password: "",
  // verify_password: "",
};

export default function AcountPatient() {
  // hooks
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // glogal state hooks
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getProfile();
  }, []);

  // handlers

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((oldState) => {
      return {
        ...oldState,
        [name]: value, // key: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      user_name: data.get("user_first_name"),
      user_lastname: data.get("user_last_name"),
      email: data.get("email"),
      birthdate: data.get("birthday"),
      phone: data.get("phone_number"),
      address: data.get("address"),
    });
  };

  const getProfile = async () => {
    setIsLoading(true);
    try {
      const data = await userService.getProfile(token);
      setUser(data.results);
      setFormValues({
        user_name: data.results.user_name,
        user_lastname: data.results.user_lastname,
        email: data.results.email,
        birthdate: format(new Date(data.results.birthday), "yyyy-MM-dd"),
        phone: data.results.phone,
        adress: data.results.address,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveProfile = async (user) => {
    setIsLoading(true);
    try {
      const data = await userService.saveProfile(token, user);
      setUser(data.results);
      console.log(data.results);
      setSuccess(true);
      setTimeout(dismissAlert, 5000);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setTimeout(dismissAlert, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const dismissAlert = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success">
          <AlertTitle>Succes</AlertTitle>
          Changes applied successfully!
        </Alert>
      )}
      <Box
        sx={{
          backgroundColor: "#E3E3E3",
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <Container component="main" maxWidth="md">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ mt: 1, mb: 4 }}>
              <AccountCircleRoundedIcon
                sx={{ fontSize: 90, color: "primary.light" }}
              />

              <Typography component="h1" variant="h5">
                Account
              </Typography>
            </Box>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 5,
                p: 3,
                borderRadius: 4,
                border: "1px solid #e8e8e8",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                backgroundColor: "#FBFBFD",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Stack direction="column" spacing={2}>
                    <TextField
                      autoComplete="given-name"
                      name="user_name"
                      required
                      fullWidth
                      id="user_name"
                      label="First Name"
                      autoFocus
                      value={formValues.user_first_name}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      fullWidth
                      id="user_lastname"
                      label="Last Name"
                      name="user_lastname"
                      autoComplete="family-name"
                      value={formValues.user_last_name}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Stack direction="column" spacing={2}>
                    <TextField
                      fullWidth
                      id="birthdate"
                      label=""
                      name=""
                      autoComplete="birthdate"
                      value={formValues.birthdate}
                      onChange={handleChange}
                      InputProps={{
                        inputProps: {
                          type: "date",
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      id="phone"
                      label="Phone "
                      name="phone"
                      autoComplete="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                    />
                    <TextField
                      fullWidth
                      id="address"
                      label="address"
                      name="address"
                      autoComplete="address"
                      value={formValues.address}
                      onChange={handleChange}
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Grid>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/users/profile"
                  >
                    <Button type="button" variant="contained" sx={{ mt: 3 }}>
                      Cancel
                    </Button>
                  </NavLink>
                  <Button
                    type="button"
                    variant="contained"
                    startIcon={<SaveRoundedIcon />}
                    sx={{ mt: 3 }}
                    onClick={() => {
                      saveProfile(formValues);
                    }}
                  >
                    Apply changes
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

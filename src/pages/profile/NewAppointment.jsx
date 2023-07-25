/* import React, { useState } from "react";
import userService from "../../_services/userService";
import dayjs from "dayjs";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import authService from "../../_services/authService";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";

//doctros object array for selector
const doctors = [
  {
    value: "id.1",
    label: "Philip Sherman",
  },
  {
    value: "id.2",
    label: "Laura Palmer",
  },
  {
    value: "id.3",
    label: "Stephen Strange",
  },
  {
    value: "id.4",
    label: "Robert Smith",
  },
];

// Funtion for date
const useDateFieldValue = () => {
  const [value, setValue] = React.useState(dayjs("2023-10-15"));
  return { value, setValue };
};

//Hour object array for selector
const hours = [
  {
    value: "09:00",
    label: "09:00",
  },
  {
    value: "10:00",
    label: "10:00",
  },
  {
    value: "11:00",
    label: "11:00",
  },
  {
    value: "12:00",
    label: "12:00",
  },
  {
    value: "13:00",
    label: "13:00",
  },
  {
    value: "16:00",
    label: "16:00",
  },
  {
    value: "17:00",
    label: "17:00",
  },
  {
    value: "18:00",
    label: "18:00",
  },
  {
    value: "19:00",
    label: "19:00",
  },
  {
    value: "20:00",
    label: "20:00",
  },
];

//Function for create appointment
export default function NewAppointment() {
  const { value, setValue } = useDateFieldValue();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // hooks
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // glogal state hooks
    const token = useSelector((state) => state.auth.token);
    const userRole = useSelector((state) => state.auth.userInfo.role);
    const isAdmin = userRole == "admin";
    const isCustomer = userRole == "patient";
    const isDoctor = userRole == "doctor";

    const selectedDate = data.get("Date");
    console.log(selectedDate);

    const newAppointment = {
      patient_id: token.userId,
      doctor_id: data.get("Doctor"),
      date: selectedDate,
      time: data.get("Time"),
    };

    console.log(newAppointment);
    newAppo(newAppointment);
  };

  const newAppo = async (newAppointment) => {
    try {
      const response = await userService.createAppoint(newAppointment);
      // setError(null);
      console.log(response);
      console.log(newAppointment);
    } catch (error) {
      // setError(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={""}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create a New Appointent
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <TextField
                id="outlined-select-doctors"
                select
                name="Doctor"
                label="Select"
                defaultValue="id.1"
                helperText="Please select your doctors"
              >
                {doctors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField", "DateField"]}>
                  <DateField
                    label="Select Day"
                    name="Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-hour"
                select
                name="Time"
                label="Select"
                defaultValue="09:00"
                helperText="Please select your Hour"
              >
                {hours.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reserve
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
 */

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
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import { DateField } from "@mui/x-date-pickers/DateField";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//
import userService from "../../_services/userService";
import { NavLink, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";

// ----------------------------------------------------------------------

const defaultTheme = createTheme();

//doctros object array for selector
const doctors = [
  {
    value: "id.1",
    label: "Philip Sherman",
  },
  {
    value: "id.2",
    label: "Laura Palmer",
  },
  {
    value: "id.3",
    label: "Stephen Strange",
  },
  {
    value: "id.4",
    label: "Robert Smith",
  },
];

//Function for create appointment
function NewDate() {
  const { value, setValue } = useDateFieldValue();
}
let initialFormValues = {
  patient_id: "",
  doctor_id: "",
  date: "",
  time: "",
};

//Hour object array for selector
const hours = [
  {
    value: "09:00",
    label: "09:00",
  },
  {
    value: "10:00",
    label: "10:00",
  },
  {
    value: "11:00",
    label: "11:00",
  },
  {
    value: "12:00",
    label: "12:00",
  },
  {
    value: "13:00",
    label: "13:00",
  },
  {
    value: "16:00",
    label: "16:00",
  },
  {
    value: "17:00",
    label: "17:00",
  },
  {
    value: "18:00",
    label: "18:00",
  },
  {
    value: "19:00",
    label: "19:00",
  },
  {
    value: "20:00",
    label: "20:00",
  },
];

export default function NewAppointment() {
  // hooks
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // glogal state hooks
  const token = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.userInfo.role);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const isAdmin = userRole == "admin";
  const isCustomer = userRole == "user";
  const isDoctor = userRole == "doctor";

  if (isCustomer) {
    initialFormValues = {
      patient_id: userInfo.customerId,
      doctor_id: "",
      date: "",
      time: "",
    };
  } else if (isDoctor) {
    initialFormValues = {
      patient_id: "",
      doctor_id: userInfo.doctorId,
      date: "",
      time: "",
    };
  } else {
    initialFormValues = {
      patient_id: "",
      doctor_id: "",
      date: "",
      time: "",
    };
  }

  // useEffect(() => {
  //   getProfile();
  // }, []);

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
      patient_id: data.get("patient_id"),
      doctor_id: data.get("doctor_id"),
      date: data.get("date"),
      time: data.get("time"),
    });
  };

  const redirect = () => {
    navigate("/users/my-appointments");
  };

  const createAppoint = async () => {
    setIsLoading(true);
    try {
      const data = await userService.createAppoint(token, formValues);
      console.log(data.results);
      setSuccess(true);
      setTimeout(dismissAlert, 5000);
      setTimeout(redirect, 5000);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      // console.log("userInfo:", userInfo);
      // console.log("initialFormValues:", initialFormValues);
      // console.log("formValues:", formValues);
      // setTimeout(dismissAlert, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const dismissAlert = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <ThemeProvider theme={""}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create a New Appointent
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <TextField
                id="outlined-select-doctors"
                select
                name="Doctor"
                label="Select"
                defaultValue="id.1"
                helperText="Please select your doctors"
                value={formValues.time}
                onChange={handleChange}
              >
                {doctors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField", "DateField"]}>
                  <DateField
                    label="Select Day"
                    name="Date"
                    value={formValues.time}
                    onChange={handleChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-hour"
                select
                name="Time"
                label="Select"
                defaultValue="09:00"
                helperText="Please select your Hour"
                value={formValues.time}
                onChange={handleChange}
              >
                {hours.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                createAppoint(formValues);
              }}
            >
              Reserve
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

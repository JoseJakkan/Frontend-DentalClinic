import React, { useState } from "react";
import userService from "../../_services/userService";
import dayjs from "dayjs";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";

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

const [value, setValue] = useState(dayjs("2022-04-17"));

//doctros object array for selector
const doctors = [
  {
    value: "id.2",
    label: "Philip Sherman",
  },
  {
    value: "id.3",
    label: "Laura Palmer",
  },
  {
    value: "id.4",
    label: "Stephen Strange",
  },
  {
    value: "id.5",
    label: "Robert Smith",
  },
];

// Funtion for date
const DateFieldValue = () => {
  return { value, setValue };
};

//Hour object array for selector
const hours = [
  {
    value: "09.00",
    label: "09.00",
  },
  {
    value: "10.00",
    label: "10.00",
  },
  {
    value: "11.00",
    label: "11.00",
  },
  {
    value: "12.00",
    label: "12.00",
  },
  {
    value: "13.00",
    label: "13.00",
  },
  {
    value: "16.00",
    label: "16.00",
  },
  {
    value: "17.00",
    label: "17.00",
  },
  {
    value: "18.00",
    label: "18.00",
  },
  {
    value: "19.00",
    label: "19.00",
  },
  {
    value: "20.00",
    label: "20.00",
  },
];

//Function for create appointment
export default function AppointmentCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newAppointment = {
      doctor_id: data.get("Doctor"),
      date: data.get("Date"),
      time: data.get("Time"),
    };
    console.log(newAppointment);
    newAppo(newAppointment);
  };

  function DateFieldValue() {
    const [value, setValue] = React.useState(dayjs("2022-04-17"));
    return { value, setValue };
  }

  const newAppo = async (newAppointment) => {
    try {
      const response = await userService.createAppoint(newAppointment);
      // setError(null);
      console.log(response);
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
                defaultValue="id.2"
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
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker name="Date" label="Select Day" />
                </DemoContainer>
              </LocalizationProvider> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField", "DateField"]}>
                  <DateField
                    label="Uncontrolled field"
                    defaultValue={dayjs("2022-04-17")}
                  />
                  <DateField
                    label="Select Day"
                    name="date"
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
                defaultValue="09.00"
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

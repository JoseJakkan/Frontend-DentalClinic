import React, { useEffect } from "react";

import { useState } from "react";
import authSlice from "../../features/login/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//select
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

//date flied
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import userService from "../../_services/userService";

//date function
function DateFieldValue() {
  const [value, setValue] =
    (React.useState < Dayjs) | (null > dayjs("10-17-2023"));
}
//doctros object array for selector
const doctors = [
  {
    value: 1,
    label: "Philip Sherman",
  },
  {
    value: 2,
    label: "Laura Palmer",
  },
  {
    value: 3,
    label: "Stephen Strange",
  },
  {
    value: 4,
    label: "Robert Smith",
  },
];

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
  const [value, setValue] = React.useState(dayjs("10-17-2023"));
  const [patient, setPatient] = useState();
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.auth.token);
  const [appointment, setAppointment] = useState([]);
  const userId = useSelector((state) => state.auth.userInfo.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newAppointment = {
      patient_id: `${userId}`,
      doctor_id: data.get("doctor"),
      date: data.get("dates"),
      time: data.get("time"),
    };
    console.log(newAppointment);
    newdate(newAppointment);
  };
  const newdate = async (newAppointment) => {
    try {
      const response = await userService.createAppoint(token, newAppointment);
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
      {
        error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        );
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Box />
        {/* doctors select */}
        <TextField
          select
          label="Select"
          defaultValue="1"
          name="doctor"
          helperText="Please select your doctor"
        >
          {doctors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* dates select */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateField", "DateField"]}>
            <DateField
              label="Controlled field"
              value={value}
              name="dates"
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        {/* hour select */}
        <TextField
          select
          label="Select"
          defaultValue="09:00"
          name="time"
          helperText="Please select your hour"
        >
          {hours.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}
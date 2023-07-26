import React from "react";
import doctorServices from "../../_services/doctorServices";
import { useState } from "react";
//select

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

//date flied
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

/* //date function
function DateFieldValue() {
  const [value, setValue] =
    (React.useState < Dayjs) | (null > dayjs("2022-04-17"));
} */
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
  const [value, setValue] = (useState < Dayjs) | (null > dayjs("2023-08-17"));

  const handleSubmit = (e) => {
    const NewAppointment = {
      patient: patient.id,
      doctor: data.get("doctor"),
      date: data.get("date"),
      time: data.get("time"),
    };

    newdate(NewAppointment);
  };
  const newdate = async (newAppointment) => {
    try {
      const response = await doctorServices.doctorAppoinment(newAppointment);
      console.log(response);
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <div>
      {/* doctors select */}
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="Philip Sherman"
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
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="09:00"
        name="Time"
        helperText="Please select your hour"
      >
        {hours.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <button onClick={handleSubmit}>Reserve</button>
    </div>
  );
}

import React from "react";
import userService from "../../_services/userService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import format from "date-fns/format";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

//select
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./Appointments.scss";

//date flied
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

//date function
function DateFieldValue() {
  const [value, setValue] =
    (React.useState < Dayjs) | (null > dayjs("11-09-2023"));
}

export default function ModifyAppointment() {
  // hooks
  const [value, setValue] = React.useState(dayjs("10-17-2023"));
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(null);

  const [patient, setPatient] = useState();
  const docInfo = useSelector((state) => state.docInfo);
  const [error, setError] = useState(null);

  const appointment = useSelector((state) => state.appointment.appointment);
  //const docId = useSelector((state) => state.doctor.docInfo.user_id);
  //const docName = useSelector((state) => state.doctor.docInfo.user_name);
  const totaltime = appointment.time;
  const timeSplit = totaltime.split(":");

  const timeHour = timeSplit[0];
  const timeMinutes = timeSplit[1];

  const realHour = ` ${timeHour}:${timeMinutes}`;

  const doctors = [
    {
      value: "1",
      label: "Philip Sherman",
    },
    {
      value: "2",
      label: "Laura Palmer",
    },
    {
      value: "3",
      label: "Stephen Strange",
    },
    {
      value: "4",
      label: "Robert Smith",
    },
  ];

  console.log(doctors);

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
      value: "14:00",
      label: "14:00",
    },
    {
      value: "15:00",
      label: "15:00",
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
    {
      value: realHour,
      label: realHour,
    },
  ];

  // glogal state hooks
  const token = useSelector((state) => state.auth.token);
  console.log(appointment);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let date = data.get("date");
    if (date == "") {
      date = appointment.date;
    }
    console.log("ggg", appointment);
    const updatedAppointment = {
      appointment_id: appointment.id,

      date: data.get("date"),
      time: data.get("time"),
    };

    try {
      const response = await userService.modifyAppointment(
        token,
        updatedAppointment
      );
      setSuccess("Updated successfully");
    } catch (error) {
      console.log(error.response.data);
    }

    console.log(updatedAppointment);
  };

  return (
    <div className="centerDiv">
      {success && (
        <Alert severity="success">
          <AlertTitle>success</AlertTitle>
          {success}
        </Alert>
      )}
      <form
        className="centerForm"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Box />
        <TextField
          select
          className="center"
          label="Select"
          defaultValue="1"
          name="time"
          helperText="Please select your doctor"
        >
          {doctors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* dates select */}
        <TextField
          id="date_appointment"
          label="Select your day"
          name="date"
          defaultValue={format(new Date(appointment.date), "yyyy/MM/dd")}
          fullWidth
          InputProps={{
            readOnly: false,
          }}
        />

        <TextField
          select
          className="center"
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

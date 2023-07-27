import React from "react";
import userService from "../../_services/userService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

const initialFormValues = {
  doctor_id: "",
  date: "",
  time: "",
};

export default function ModifyAppointment() {
  // hooks
  const [value, setValue] = React.useState(dayjs("10-17-2023"));
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);

  // glogal state hooks
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    findAppointment();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((oldState) => {
      return {
        ...oldState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      doctor_id: data.get("doctor"),
      date: data.get("date"),
      time: data.get("time"),
    });
  };

  const findAppointment = async () => {
    setIsLoading(true);
    try {
      const data = await userService.findAppointment(token);
      setUser(data.results);
      setFormValues({
        doctor_id: data.results.user_name,
        date: data.results.date,
        time: data.results.time,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
